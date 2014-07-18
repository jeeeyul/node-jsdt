package net.jeeeyul.jsdt.node.infer;

import java.util.Arrays;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.eclipse.core.resources.IFile;
import org.eclipse.core.resources.ResourcesPlugin;
import org.eclipse.core.runtime.IPath;
import org.eclipse.core.runtime.Path;
import org.eclipse.wst.jsdt.core.ast.IASTNode;
import org.eclipse.wst.jsdt.core.ast.IExpression;
import org.eclipse.wst.jsdt.core.ast.IObjectLiteral;
import org.eclipse.wst.jsdt.core.ast.IObjectLiteralField;
import org.eclipse.wst.jsdt.core.ast.IScriptFileDeclaration;
import org.eclipse.wst.jsdt.core.ast.ISingleNameReference;
import org.eclipse.wst.jsdt.core.ast.IStringLiteral;
import org.eclipse.wst.jsdt.core.infer.InferredType;
import org.eclipse.wst.jsdt.internal.compiler.ast.CompilationUnitDeclaration;

@SuppressWarnings("restriction")
public abstract class AbstractInfererPartcipant<T extends IASTNode> {
	private static List<String> PRIM_TYPES = Arrays.asList("object", "string",
			"number", "array", "boolean", "function");
	private NodeJSInferEngine engine;

	public AbstractInfererPartcipant(NodeJSInferEngine engine) {
		super();
		this.engine = engine;
	}

	protected InferredType addType(char[] className) {
		return engine.addType(className);
	}

	protected InferredType addType(char[] className, boolean isDefinition) {
		return engine.addType(className, isDefinition);
	}

	public abstract boolean canInfer(T ast);

	protected String capitalize(String propName, String prefix) {
		Pattern propPattern = Pattern.compile("^(_*)([a-zA-Z][a-zA-Z0-9_]*)$");
		Matcher matcher = propPattern.matcher(propName);
		if (matcher.matches()) {
			String prop = matcher.group(2);
			String access = matcher.group(1);
			prop = prop.substring(0, 1).toUpperCase() + prop.substring(1);
			return access + prefix + prop;
		}
		return "x";
	}

	protected InferredType ensureType(char[] className) {
		String str = new String(className);
		if (PRIM_TYPES.contains(str.toLowerCase())) {
			className = capitalize(str, "").toCharArray();
		}

		InferredType result = findDefinedType(className);
		if (result == null) {
			result = addType(className);
		}
		return result;
	}

	protected InferredType ensureType(String className) {
		return ensureType(className.toCharArray());
	}

	protected InferredType findDefinedType(char[] className) {
		return engine.findDefinedType(className);
	}

	public CompilationUnitDeclaration getCompUnit() {
		return engine.getCompUnit();
	}

	public NodeJSInferEngine getEngine() {
		return engine;
	}

	protected IObjectLiteralField getField(IObjectLiteral obj, String fieldName) {
		if (obj.getFields() == null) {
			return null;
		}
		for (IObjectLiteralField field : obj.getFields()) {
			String eachFieldName = getFieldNameAsString(field.getFieldName());
			if (eachFieldName.equals(fieldName)) {
				return field;
			}
		}
		return null;
	}

	protected String getFieldNameAsString(IExpression ast) {
		String fieldName = null;
		if (ast instanceof IStringLiteral) {
			fieldName = new String(((IStringLiteral) ast).source());
		} else if (ast instanceof ISingleNameReference) {
			fieldName = new String(((ISingleNameReference) ast).getToken());
		} else {
			fieldName = "필드이름얻기실패";
		}
		return fieldName;
	}

	protected IScriptFileDeclaration getScriptFileDeclaration() {
		return engine.getScriptFileDeclaration();
	}

	public abstract void infer(T ast);

	protected String plainName(String propName) {
		Pattern propPattern = Pattern.compile("^(_*)([a-zA-Z][a-zA-Z0-9_]*)$");
		Matcher matcher = propPattern.matcher(propName);
		if (matcher.matches()) {
			return matcher.group(2);
		}
		return "x";
	}

	protected IFile getSourceFile() {
		try {
			IPath path = new Path(String.valueOf(getCompUnit().getFileName()));
			return ResourcesPlugin.getWorkspace().getRoot().getFile(path);
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}

}
