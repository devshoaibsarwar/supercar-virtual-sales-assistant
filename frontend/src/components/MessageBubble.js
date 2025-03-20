const MessageBubble = ({ message }) => {
  return (
    <div className={`message-bubble ${message.type}`}>
      {message.type === 'ai' && <div>{message.text}</div>}
      {message.type === 'tool_use' && <div>AI is using the tool: {message.tool}</div>}
      {message.type === 'tool_output' && (
        <div>{JSON.stringify(message.output, null, 2)}</div>
      )}
    </div>
  );
};

export default MessageBubble;
