package net.jeeeyul.jsdt.node.infer;

import java.util.Arrays;

import org.eclipse.wst.jsdt.core.ast.IExpression;
import org.eclipse.wst.jsdt.core.ast.IFieldReference;
import org.eclipse.wst.jsdt.core.ast.IFunctionCall;
import org.eclipse.wst.jsdt.core.ast.IFunctionExpression;
import org.eclipse.wst.jsdt.core.ast.IObjectLiteral;
import org.eclipse.wst.jsdt.core.ast.IObjectLiteralField;
import org.eclipse.wst.jsdt.core.ast.IStringLiteral;
import org.eclipse.wst.jsdt.core.infer.InferredAttribute;
import org.eclipse.wst.jsdt.core.infer.InferredType;
import org.eclipse.wst.jsdt.internal.compiler.classfmt.ClassFileConstants;

@SuppressWarnings("restriction")
public class DefinePropertyInferrer extends
		AbstractInfererPartcipant<IFunctionCall> {

	public DefinePropertyInferrer(NodeJSInferEngine engine) {
		super(engine);
	}

	@Override
	public boolean canInfer(IFunctionCall ast) {
		if (ast.getReceiver() != null
				&& ast.getReceiver().toString().equals("Object")
				&& Arrays.equals(ast.getSelector(),
						"defineProperty".toCharArray())
				&& ast.getArguments() != null && ast.getArguments().length == 3) {

			IExpression[] arguments = ast.getArguments();
			if (!(arguments[0] instanceof IFieldReference)) {
				return false;
			}

			IFieldReference prototypeRef = (IFieldReference) arguments[0];
			if (!Arrays.equals(prototypeRef.getToken(),
					"prototype".toCharArray())) {
				return false;
			}

			if (!(arguments[1] instanceof IStringLiteral)) {
				return false;
			}

			if (!(arguments[2] instanceof IObjectLiteral)) {
				return false;
			}

			return true;
		}
		return false;
	}

	@Override
	public void infer(IFunctionCall ast) {
		IExpression[] arguments = ast.getArguments();
		IFieldReference prototypeRef = (IFieldReference) arguments[0];
		IStringLiteral propertyNameNode = (IStringLiteral) arguments[1];
		IObjectLiteral descriptor = (IObjectLiteral) arguments[2];

		String typeName = prototypeRef.getReceiver().toString();
		InferredType type = ensureType(typeName);

		IObjectLiteralField valueNode = getField(descriptor, "value");
		IObjectLiteralField getNode = getField(descriptor, "get");
		if (valueNode != null) {
			IExpression valueInitializer = valueNode.getInitializer();
			if (valueInitializer instanceof IFunctionExpression) {
				IFunctionExpression fncExp = (IFunctionExpression) valueInitializer;
				type.addMethod(propertyNameNode.source(),
						fncExp.getMethodDeclaration(),
						propertyNameNode.sourceStart());
				fncExp.getMethodDeclaration().modifiers = ClassFileConstants.AccPublic;
			} else {
				InferredAttribute attribute = type.addAttribute(
						propertyNameNode.source(), propertyNameNode,
						propertyNameNode.sourceStart() + 1);
				attribute.type = getTypeOf(valueInitializer);
			}
		}

		else if (getNode != null) {
			IExpression valueInitializer = getNode.getInitializer();
			InferredAttribute attribute = type.addAttribute(
					propertyNameNode.source(), propertyNameNode,
					propertyNameNode.sourceStart() + 1);
			
			IFunctionExpression fncExp = (IFunctionExpression) valueInitializer;
			attribute.type = fncExp.getMethodDeclaration().inferredType;
		}
		
	}

}
