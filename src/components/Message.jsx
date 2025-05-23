import PluginCard from "./PluginCard";

export default function Message({ message }) {
  const isUser = message.sender === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-3`}>
      <div
        className={`
        max-w-[85%] p-4 rounded-lg
        ${isUser ? "chat-message-user" : "chat-message-bot"}
        shadow-sm hover:shadow-md transition-shadow
      `}
      >
        {message.type === "plugin" ? (
          <PluginCard
            pluginName={message.pluginName}
            data={message.pluginData}
          />
        ) : (
          <p className="whitespace-pre-wrap">{message.content}</p>
        )}
        <p className="text-xs opacity-70 mt-1">
          {new Date(message.timestamp).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </p>
      </div>
    </div>
  );
}
