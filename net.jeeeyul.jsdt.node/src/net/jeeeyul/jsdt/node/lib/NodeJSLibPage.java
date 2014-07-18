package net.jeeeyul.jsdt.node.lib;

import org.eclipse.core.runtime.Path;
import org.eclipse.swt.SWT;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Label;
import org.eclipse.wst.jsdt.core.IIncludePathEntry;
import org.eclipse.wst.jsdt.core.IJavaScriptProject;
import org.eclipse.wst.jsdt.core.JavaScriptCore;
import org.eclipse.wst.jsdt.ui.wizards.IJsGlobalScopeContainerPage;
import org.eclipse.wst.jsdt.ui.wizards.IJsGlobalScopeContainerPageExtension;
import org.eclipse.wst.jsdt.ui.wizards.IJsGlobalScopeContainerPageExtension2;
import org.eclipse.wst.jsdt.ui.wizards.NewElementWizardPage;

/**
 * Configuration UI for eclipse.js JSDT Library.
 * 
 * @author Jeeeyul
 *
 */
public class NodeJSLibPage extends NewElementWizardPage implements
		IJsGlobalScopeContainerPage, IJsGlobalScopeContainerPageExtension,
		IJsGlobalScopeContainerPageExtension2 {

	/**
	 * Creates an {@link NodeJSLibPage}.
	 */
	public NodeJSLibPage() {
		super(NodeJSLibraryInitializer.LIB_NAME);
	}

	@Override
	public void createControl(Composite parent) {
		Label label = new Label(parent, SWT.NORMAL);
		label.setText(NodeJSLibraryInitializer.LIB_NAME);
		setControl(label);

	}

	@Override
	public boolean finish() {
		return true;
	}

	@Override
	public IIncludePathEntry getSelection() {
		return null;
	}

	@Override
	public void setSelection(IIncludePathEntry containerEntry) {
	}

	@Override
	public IIncludePathEntry[] getNewContainers() {
		IIncludePathEntry entry = JavaScriptCore.newContainerEntry(new Path(
				NodeJSLibraryInitializer.LIB_ID));
		return new IIncludePathEntry[] { entry };
	}

	@Override
	public void initialize(IJavaScriptProject project,
			IIncludePathEntry[] currentEntries) {

	}

}
