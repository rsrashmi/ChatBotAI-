export function parseInput(input) {
  const commandMatch = input.match(/^\/(\w+)\s*(.*)$/);
  if (commandMatch) {
    return {
      isCommand: true,
      command: commandMatch[1].toLowerCase(),
      args: commandMatch[2].trim(),
    };
  }

  const weatherRegex =
    /(?:weather|temperature|forecast)\s+(?:for|in|at)?\s*([^\?]+)/i;
  const weatherMatch = input.match(weatherRegex);
  if (weatherMatch) {
    return {
      isCommand: true,
      command: "weather",
      args: weatherMatch[1].trim(),
    };
  }

  const calcRegex = /(?:calculate|what is|compute|solve)\s+([^\?]+)/i;
  const calcMatch = input.match(calcRegex);
  if (calcMatch) {
    return {
      isCommand: true,
      command: "calc",
      args: calcMatch[1].trim(),
    };
  }

  const defineRegex = /(?:define|meaning of|what is)\s+([^\?]+)/i;
  const defineMatch = input.match(defineRegex);
  if (defineMatch) {
    return {
      isCommand: true,
      command: "define",
      args: defineMatch[1].trim(),
    };
  }

  return {
    isCommand: false,
    command: null,
    args: input,
  };
}
