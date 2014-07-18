package net.jeeeyul.jsdt.node.infer;

import org.eclipse.wst.jsdt.core.ast.IAssignment;
import org.eclipse.wst.jsdt.core.ast.IFunctionCall;
import org.eclipse.wst.jsdt.core.ast.IInstanceOfExpression;
import org.eclipse.wst.jsdt.core.ast.ILocalDeclaration;
import org.eclipse.wst.jsdt.core.infer.InferEngine;
import org.eclipse.wst.jsdt.core.infer.InferredType;
import org.eclipse.wst.jsdt.core.infer.InferrenceProvider;
import org.eclipse.wst.jsdt.internal.compiler.ast.CompilationUnitDeclaration;

@SuppressWarnings("restriction")
public class NodeJSInferEngine extends InferEngine {
	private CompilationUnitDeclaration compUnit;
	private ModuleInferer moduleInferer = new ModuleInferer(this);
	private RequireInferer requireInferer = new RequireInferer(this);

	public NodeJSInferEngine(InferrenceProvider provider) {
		this.inferenceProvider = provider;
	}

	public int getPassNumber() {
		return this.passNumber;
	}

	@Override
	public InferredType addType(char[] className) {
		return super.addType(className);
	}

	@Override
	public InferredType addType(char[] className, boolean isDefinition) {
		return super.addType(className, isDefinition);
	}

	public CompilationUnitDeclaration getCompUnit() {
		return compUnit;
	}

	@Override
	public void setCompilationUnit(CompilationUnitDeclaration cu) {
		super.setCompilationUnit(cu);
		this.compUnit = cu;
	}

	@Override
	public boolean visit(IFunctionCall functionCall) {
		return super.visit(functionCall);
	}

	@Override
	public boolean visit(ILocalDeclaration localDeclaration) {
		if (requireInferer.canInfer(localDeclaration)) {
			requireInferer.infer(localDeclaration);
		}
		return super.visit(localDeclaration);
	}

	@Override
	public boolean visit(IAssignment assignment) {
		if (moduleInferer.canInfer(assignment)) {
			moduleInferer.infer(assignment);
		}

		else if (requireInferer.canInfer(assignment)) {
			requireInferer.infer(assignment);
		}
		return super.visit(assignment);
	}

	@Override
	public boolean visit(IInstanceOfExpression instanceOfExpression) {
		return super.visit(instanceOfExpression);
	}
}
