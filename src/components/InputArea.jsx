import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage, setProcessing } from "../features/chatSlice";
import { parseInput } from "../utils/parser";
import { executePlugin } from "../plugins";

export default function InputArea() {
  const [input, setInput] = useState("");
  const { isProcessing } = useSelector((state) => state.chat);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim() || isProcessing) return;
    dispatch(
      addMessage({
        sender: "user",
        content: input,
        type: "text",
      })
    );

    dispatch(setProcessing(true));
    setInput("");

    try {
      const parsed = parseInput(input.toLowerCase());
      if (parsed.isCommand) {
        const pluginResponse = await executePlugin(parsed.command, parsed.args);

        dispatch(
          addMessage({
            sender: "assistant",
            content: pluginResponse.content,
            type: "plugin",
            pluginName: parsed.command,
            pluginData: pluginResponse.data,
          })
        );
      } else {
        const retryParse = parseInput("/" + input);
        if (retryParse.isCommand) {
          const pluginResponse = await executePlugin(
            retryParse.command,
            retryParse.args
          );
          dispatch(
            addMessage({
              sender: "assistant",
              content: pluginResponse.content,
              type: "plugin",
              pluginName: retryParse.command,
              pluginData: pluginResponse.data,
            })
          );
        } else {
          dispatch(
            addMessage({
              sender: "assistant",
              content: `Try using commands like /weather [city], /calc [expression], or /define [word]`,
              type: "text",
            })
          );
        }
      }
    } catch (error) {
      dispatch(
        addMessage({
          sender: "assistant",
          content: `Error: ${error.message}`,
          type: "text",
        })
      );
    } finally {
      dispatch(setProcessing(false));
    }
  };
  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Type a message or command..."
        disabled={isProcessing}
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50"
        disabled={!input.trim() || isProcessing}
      >
        Send
      </button>
    </form>
  );
}
