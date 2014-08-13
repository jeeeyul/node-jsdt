package net.jeeeyul.jsdt.node.infer;

import java.util.Arrays;

import org.eclipse.core.runtime.IPath;
import org.eclipse.core.runtime.Path;
import org.eclipse.wst.jsdt.core.ast.IASTNode;
import org.eclipse.wst.jsdt.core.ast.IAssignment;
import org.eclipse.wst.jsdt.core.ast.IExpression;
import org.eclipse.wst.jsdt.core.ast.IFunctionCall;
import org.eclipse.wst.jsdt.core.ast.ILocalDeclaration;
import org.eclipse.wst.jsdt.core.ast.IStringLiteral;
import org.eclipse.wst.jsdt.core.infer.InferredType;

public class RequireInferer extends AbstractInfererPartcipant<IASTNode> {

	public RequireInferer(NodeJSInferEngine engine) {
		super(engine);
	}

	private IFunctionCall getFunctionCall(IASTNode ast) {
		if (ast instanceof IAssignment) {
			IExpression expression = ((IAssignment) ast).getExpression();
			if (expression instanceof IFunctionCall) {
				return (IFunctionCall) expression;
			} else {
				return null;
			}
		} else if (ast instanceof ILocalDeclaration) {
			IExpression initialization = ((ILocalDeclaration) ast)
					.getInitialization();
			if (initialization instanceof IFunctionCall) {
				return (IFunctionCall) initialization;
			} else {
				return null;
			}
		} else {
			return null;
		}
	}

	private void setInferredType(IASTNode node, InferredType type) {
		if (node instanceof IAssignment) {
			((IAssignment) node).setInferredType(type);
		} else if (node instanceof ILocalDeclaration) {
			((ILocalDeclaration) node).setInferredType(type);
		}
	}

	@Override
	public boolean canInfer(IASTNode ast) {
		if (ast == null) {
			return false;
		}

		if (getFunctionCall(ast) == null) {
			return false;
		}

		IFunctionCall functionCall = getFunctionCall(ast);
		return functionCall.getReceiver() == null
				&& functionCall.getArguments() != null
				&& functionCall.getArguments().length == 1
				&& functionCall.getArguments()[0] instanceof IStringLiteral
				&& Arrays.equals(functionCall.getSelector(),
						"require".toCharArray());
	}

	@Override
	public void infer(IASTNode ast) {
		IFunctionCall functionCall = getFunctionCall(ast);
		IStringLiteral literal = (IStringLiteral) functionCall.getArguments()[0];

		String moduleRef = String.valueOf(literal.source());
		IPath relPath = new Path(moduleRef).removeFileExtension();
		String moduleName = null;

		if (!moduleRef.startsWith(".")) {
			moduleName = "_NPM_" + relPath.lastSegment();
		} else {
			IPath targetPath = getSourceFile().getProjectRelativePath()
					.removeLastSegments(1).append(relPath);
			moduleName = targetPath.toPortableString().replace("/", ".").replace("-", "_");
		}
		
		InferredType type = ensureType(moduleName);
		if (type != null) {
			setInferredType(ast, type);
		}
	}
}
