/// <reference types="css" />

interface DeclarationModifications extends CSSStyleDeclaration {
  getParam: (param: number) => string;
}

interface RuleModifications extends CSSRule {
  findDeclarations: (
    callback: (
      declaration: DeclarationModifications,
      declarationIndex: number
    ) => void
  ) => void;
  findDeclarationsBySelectors: (
    selectors: string,
    callback: (
      declaration: DeclarationModifications,
      declarationIndex: number
    ) => void
  ) => void;
  findDeclarationsByProperty: (
    selectors: string,
    callback: (
      declaration: DeclarationModifications,
      declarationIndex: number
    ) => void
  ) => void;
  findDeclarationsByValue: (
    selectors: string,
    callback: (
      declaration: DeclarationModifications,
      declarationIndex: number
    ) => void
  ) => void;
  addDeclaration: (
    property: string,
    value: string,
    declarationIndex: number
  ) => void;
  removeDeclaration: (declarationIndex: number) => void;
}

interface StylesheetModifications extends Omit<CSSStyleSheet, "addRule"> {
  findAllRules: (
    callback: (rule: RuleModifications, ruleIndex: number) => void
  ) => void;
  moonWalkAllRules: (
    callback: (rule: RuleModifications, ruleIndex: number) => void
  ) => void;
  findAllRulesByType: (
    type: string,
    callback: (rule: RuleModifications, ruleIndex: number) => void
  ) => void;
  addRule: (rule: RuleModifications, index: number) => void;
  removeRule: (index: number) => void;
  findAllSelectors: (
    callback: (selectors: any, selectorIndex: number) => void
  ) => void;
  findAllImport: (callback: (url: string) => void) => void;
  findAllDeclarations: (
    callback: (declaration: DeclarationModifications) => void
  ) => void;
  findAllDeclarationsBySelectors: (
    selector: string,
    callback: (declaration: DeclarationModifications) => void
  ) => void;
  findAllDeclarationsByProperty: (
    property: string,
    callback: (declaration: DeclarationModifications) => void
  ) => void;
  findAllDeclarationsByValue: (
    value: string,
    callback: (declaration: DeclarationModifications) => void
  ) => void;
}

type Factory = (ast: CSSStyleSheet) => StylesheetModifications;

export = Factory;
