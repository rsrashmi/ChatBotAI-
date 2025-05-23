import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadMessages, addMessage, setProcessing } from "./features/chatSlice";
import {
  loadMessagesFromStorage,
  saveMessagesToStorage,
} from "./utils/storage";
import ChatContainer from "./components/ChatContainer";

function App() {
  const { messages } = useSelector((state) => state.chat);
  const dispatch = useDispatch();

  useEffect(() => {
    const savedMessages = loadMessagesFromStorage();
    if (savedMessages.length > 0) {
      dispatch(loadMessages(savedMessages));
    } else {
      dispatch(
        addMessage({
          sender: "assistant",
          content:
            "Hello! I'm ChatBoat. Try commands like /weather London, /calc 2+2, or /define hello",
          type: "text",
        })
      );
    }
  }, [dispatch]);

  useEffect(() => {
    saveMessagesToStorage(messages);
  }, [messages]);

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <header className="bg-blue-600 text-white p-4 shadow-md">
        <h1 className="text-xl font-bold">ChatBoat</h1>
      </header>
      <ChatContainer />
    </div>
  );
}

export default App;
