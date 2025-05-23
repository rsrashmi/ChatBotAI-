import weatherPlugin from "./weather";
import calculatorPlugin from "./calculator";
import dictionaryPlugin from "./dictionary";

const plugins = {
  weather: weatherPlugin,
  calc: calculatorPlugin,
  define: dictionaryPlugin,
};

export async function executePlugin(command, args) {
  const plugin = plugins[command];
  if (!plugin) {
    throw new Error(`Unknown command: ${command}`);
  }

  try {
    const result = await plugin.execute(args);
    return {
      content: `Here's the result from ${command}:`,
      data: result,
    };
  } catch (error) {
    throw new Error(`Plugin ${command} failed: ${error.message}`);
  }
}
