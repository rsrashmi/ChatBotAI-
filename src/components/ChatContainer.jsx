import { useSelector } from "react-redux";
import ScrollToBottom from "react-scroll-to-bottom";
import Message from "./Message";
import InputArea from "./InputArea";
import TypingIndicator from "./TypingIndicator";

export default function ChatContainer() {
  const { messages, isProcessing } = useSelector((state) => state.chat);

  return (
    <div className="flex flex-col h-[calc(100vh-64px)] bg-gradient-to-b from-white to-gray-50">
      <div className="flex-1 overflow-auto p-4">
        <ScrollToBottom className="h-full space-y-3">
          {messages.map((message) => (
            <div key={message.id} className="message-enter">
              <Message message={message} />
            </div>
          ))}
          {isProcessing && <TypingIndicator />}
        </ScrollToBottom>
      </div>

      <div className="p-4 border-t border-gray-200 bg-white">
        <InputArea />
      </div>
    </div>
  );
}
