import { RuleFailure, Rules, RuleWalker } from "tslint";
import * as ts from "typescript";

export class Rule extends Rules.AbstractRule {
  public static FAILURE_STRING = "don't use only";

  public apply(sourceFile: ts.SourceFile): RuleFailure[] {
    return this.applyWithWalker(new NoImportsWalker(sourceFile, this.getOptions()));
  }
}

// The walker takes care of all the work.
class NoImportsWalker extends RuleWalker {
  public visitPropertyAccessExpression(node: ts.PropertyAccessExpression) {
    if ((node.expression as any).text === "test" && node.name.text === "only") {
      // create a failure at the current position
      this.addFailure(this.createFailure(node.getStart(), node.getWidth(), Rule.FAILURE_STRING));
    }

    // call the base version of this visitor to actually parse this node
    super.visitPropertyAccessExpression(node);
  }
}
