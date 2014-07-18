package net.jeeeyul.jsdt.node.infer;

import org.eclipse.wst.jsdt.core.infer.IInferEngine;
import org.eclipse.wst.jsdt.core.infer.IInferenceFile;
import org.eclipse.wst.jsdt.core.infer.InferrenceProvider;
import org.eclipse.wst.jsdt.core.infer.RefactoringSupport;
import org.eclipse.wst.jsdt.core.infer.ResolutionConfiguration;

public class NodeJSInferenceProvider implements InferrenceProvider {
	public static final String ID = "net.jeeeyul.jsdt.node";

	@Override
	public int applysTo(IInferenceFile arg0) {
		return MAYBE_THIS;
	}

	@Override
	public String getID() {
		return ID;
	}

	@Override
	public IInferEngine getInferEngine() {
		return new NodeJSInferEngine(this);
	}

	@Override
	public RefactoringSupport getRefactoringSupport() {
		return new RefactoringSupport() {
			@Override
			public boolean supportsClassRename() {
				return false;
			}
		};
	}

	@Override
	public ResolutionConfiguration getResolutionConfiguration() {
		return new ResolutionConfiguration();
	}
}
