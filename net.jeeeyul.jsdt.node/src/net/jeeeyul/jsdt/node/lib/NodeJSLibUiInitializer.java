package net.jeeeyul.jsdt.node.lib;

import net.jeeeyul.jsdt.node.SharedImages;

import org.eclipse.core.runtime.IPath;
import org.eclipse.jface.resource.ImageDescriptor;
import org.eclipse.wst.jsdt.core.IJavaScriptProject;
import org.eclipse.wst.jsdt.internal.ui.IJsGlobalScopeContainerInitializerExtension;

/**
 * Provides eclipse.js jsdt library icon.
 * 
 * @author Jeeeyul
 *
 */
@SuppressWarnings("restriction")
public class NodeJSLibUiInitializer implements
		IJsGlobalScopeContainerInitializerExtension {

	public ImageDescriptor getImage(IPath containerPath, String element,
			IJavaScriptProject project) {

		if (containerPath == null) {
			return null;
		}

		return SharedImages.getImageDescriptor(SharedImages.NODE);
	}

}
