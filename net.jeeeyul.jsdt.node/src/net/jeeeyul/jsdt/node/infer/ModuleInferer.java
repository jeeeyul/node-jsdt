package net.jeeeyul.jsdt.node.infer;

import java.util.Arrays;

import org.eclipse.core.resources.IFile;
import org.eclipse.core.runtime.IPath;
import org.eclipse.wst.jsdt.core.ast.IAssignment;
import org.eclipse.wst.jsdt.core.ast.IExpression;
import org.eclipse.wst.jsdt.core.ast.IFieldReference;
import org.eclipse.wst.jsdt.core.ast.IFunctionExpression;
import org.eclipse.wst.jsdt.core.ast.ISingleNameReference;
import org.eclipse.wst.jsdt.core.infer.InferredAttribute;
import org.eclipse.wst.jsdt.core.infer.InferredType;
import org.eclipse.wst.jsdt.internal.compiler.classfmt.ClassFileConstants;

@SuppressWarnings("restriction")
public class ModuleInferer extends AbstractInfererPartcipant<IAssignment> {

	public ModuleInferer(NodeJSInferEngine engine) {
		super(engine);
	}

	@Override
	public boolean canInfer(IAssignment ast) {
		IExpression leftHandSide = ast.getLeftHandSide();
		if (!(leftHandSide instanceof IFieldReference)) {
			return false;
		}

		IFieldReference fieldReference = (IFieldReference) leftHandSide;
		if (!(fieldReference.getReceiver() instanceof ISingleNameReference)) {
			return false;
		}
		ISingleNameReference singleNameReference = (ISingleNameReference) fieldReference.getReceiver();
		if (!Arrays.equals(singleNameReference.getToken(), "exports".toCharArray())) {
			return false;
		}

		return true;
	}

	@Override
	public void infer(IAssignment ast) {
		IExpression expression = ast.getExpression();

		IFile wFile = getSourceFile();
		IPath path = wFile.getProjectRelativePath().removeFileExtension();
		if (path.lastSegment().equals("index")) {
			path = path.removeLastSegments(1);
		}
		String typeName = path.toPortableString().replace("/", ".");
		typeName = typeName.replace("-", "_");

		IFieldReference fieldReference = (IFieldReference) ast.getLeftHandSide();

		InferredType type = ensureType(typeName);
		type.sourceStart = 0;
		type.sourceEnd = getCompUnit().sourceEnd;
		type.setNameStart(0);
		type.setIsDefinition(true);
		type.setModifiers(ClassFileConstants.AccPublic);

		if (expression instanceof IFunctionExpression) {
			IFunctionExpression functionExpression = (IFunctionExpression) expression;
			type.addMethod(fieldReference.getToken(),
					functionExpression.getMethodDeclaration(),
					fieldReference.sourceEnd()
							- fieldReference.getToken().length + 1);
		}

		else {
			InferredAttribute attr = type.addAttribute(
					fieldReference.getToken(), 
					ast.getLeftHandSide(),
					fieldReference.sourceEnd() - fieldReference.getToken().length + 1);
			attr.type = ast.getInferredType();
		}
	}
}
