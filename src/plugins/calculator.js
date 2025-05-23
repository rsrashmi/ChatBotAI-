export default {
  execute(expression) {
    if (!expression)
      throw new Error("Please provide an expression (e.g., /calc 2+2)");
    const sanitized = expression.replace(/[^\d+\-*/().,]/g, "");

    if (!/^[\d+\-*/().,]+$/.test(sanitized)) {
      throw new Error("Invalid mathematical expression");
    }

    try {
      const result = eval(sanitized);

      if (!Number.isFinite(result)) {
        throw new Error("Invalid result");
      }

      return {
        expression: sanitized,
        result: result,
      };
    } catch {
      throw new Error("Invalid mathematical expression");
    }
  },
};
