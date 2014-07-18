package net.jeeeyul.jsdt.node.lib;

import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.URL;
import java.util.ArrayList;
import java.util.Enumeration;
import java.util.List;

import net.jeeeyul.jsdt.node.NodeJSDTCore;

import org.eclipse.core.runtime.IPath;
import org.eclipse.core.runtime.Path;
import org.eclipse.wst.jsdt.core.IJavaScriptProject;
import org.eclipse.wst.jsdt.core.IJsGlobalScopeContainer;
import org.eclipse.wst.jsdt.core.JsGlobalScopeContainerInitializer;
import org.eclipse.wst.jsdt.core.compiler.libraries.LibraryLocation;
import org.osgi.framework.Bundle;

/**
 * eclipse.js jsdt library initializer.
 * 
 * @author Jeeeyul
 *
 */
public class NodeJSLibraryInitializer extends JsGlobalScopeContainerInitializer
		implements IJsGlobalScopeContainer {

	/**
	 * JSDT Library ID.
	 */
	public static final String LIB_ID = "net.jeeeyul.jsdt.node.lib";

	/**
	 * Human readable Library name.
	 */
	public static final String LIB_NAME = "Node.JS Libraries";

	@Override
	public LibraryLocation getLibraryLocation() {
		return NodeJSLibraryLocation.getInstance();
	}

	static class NodeJSLibraryLocation implements LibraryLocation {
		public NodeJSLibraryLocation() {
			IPath stateLocation = NodeJSDTCore.getDefault().getStateLocation();
			IPath libLocation = stateLocation.append("jsdt-libraries");
			Bundle bundle = NodeJSDTCore.getDefault().getBundle();
			Enumeration<URL> entries = bundle.findEntries("jsdt-libraries",
					"*.js", true);

			while (entries.hasMoreElements()) {
				URL url = (URL) entries.nextElement();
				IPath srcPath = new Path(url.getPath()).removeFirstSegments(1);
				IPath destPath = libLocation.append(srcPath);
				File dest = destPath.toFile();
				try {
					copyFile(url.openStream(), dest);
				} catch (IOException e) {
					e.printStackTrace();
				}
			}
		}

		private static LibraryLocation fInstance;

		public static LibraryLocation getInstance() {
			if (fInstance == null) {
				fInstance = new NodeJSLibraryLocation();
			}
			return fInstance;
		}

		public char[][] getLibraryFileNames() {
			List<char[]> result = new ArrayList<char[]>();
			collect("node", result);
			collect("node-gen", result);
			return result.toArray(new char[result.size()][]);
		}

		private void collect(String relPath, List<char[]> result) {
			Bundle bundle = NodeJSDTCore.getDefault().getBundle();
			IPath libPath = new Path("jsdt-libraries")
					.append(new Path(relPath));
			Enumeration<URL> folder = bundle.findEntries(
					libPath.toPortableString(), "*.js", false);

			while (folder.hasMoreElements()) {
				URL url = (URL) folder.nextElement();
				IPath path = new Path(url.getPath());
				path = new Path(relPath).append(path.lastSegment());
				result.add(path.toPortableString().toCharArray());
			}
		}

		@Override
		public String getLibraryPath(char[] name) {
			return getLibraryPath(new String(name));
		}

		@Override
		public String getLibraryPath(String name) {
			return NodeJSDTCore.getDefault().getStateLocation()
					.append("jsdt-libraries").append(new String(name))
					.toPortableString();
		}

		@Override
		public IPath getLibraryPathInPlugin() {
			return new Path(getLibraryPath(""));
		}

		@Override
		public IPath getWorkingLibPath() {
			return new Path(getLibraryPath(""));
		}

		protected static void copyFile(InputStream src, File dst)
				throws IOException {
			File dir = dst.getParentFile();
			if (!dir.exists()) {
				dir.mkdirs();
			}
			InputStream in = null;
			OutputStream out = null;
			try {
				in = new BufferedInputStream(src);
				out = new BufferedOutputStream(new FileOutputStream(dst));
				byte[] buffer = new byte[4096];
				int len;
				while ((len = in.read(buffer)) != -1) {
					out.write(buffer, 0, len);
				}
			} finally {
				if (in != null)
					try {
						in.close();
					} catch (IOException e) {
						// problem closing, no recovery or diagnosis possible
					}
				if (out != null)
					try {
						out.close();
					} catch (IOException e) {
						// problem closing, no recovery or diagnosis possible
					}
			}
		}

	}

	@Override
	public String getDescription() {
		return LIB_NAME;
	}

	@Override
	public boolean canUpdateJsGlobalScopeContainer(IPath containerPath,
			IJavaScriptProject project) {
		return true;
	}
}
