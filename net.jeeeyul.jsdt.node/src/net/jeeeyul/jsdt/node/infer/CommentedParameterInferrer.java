package net.jeeeyul.jsdt.node.infer;

import org.eclipse.wst.jsdt.core.ast.IArgument;
import org.eclipse.wst.jsdt.core.ast.IFunctionDeclaration;

public class CommentedParameterInferrer extends AbstractInfererPartcipant<IFunctionDeclaration> {

	public CommentedParameterInferrer(NodeJSInferEngine engine) {
		super(engine);
	}

	@Override
	public boolean canInfer(IFunctionDeclaration ast) {
		IArgument[] arguments = ast.getArguments();
		if (arguments == null || arguments.length == 0) {
			return false;
		}
		for (IArgument each : arguments) {
			if (each.getComment() != null) {
				return true;
			}
		}
		return false;
	}

	@Override
	public void infer(IFunctionDeclaration ast) {
		IArgument[] arguments = ast.getArguments();
		for (IArgument each : arguments) {
			if (each.getComment() == null) {
				continue;
			}
			String name = new String(each.getComment()).trim();
			each.setInferredType(ensureType(name));
		}
	}

}
