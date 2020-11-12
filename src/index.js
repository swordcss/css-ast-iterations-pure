const addIterations = require("css-ast-iterations");

module.exports = (ast) => {
  addIterations(ast);
  return ast;
};
