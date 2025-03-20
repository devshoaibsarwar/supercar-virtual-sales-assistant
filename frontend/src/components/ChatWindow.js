import { useState } from 'react';
import { useSSE } from '../hooks/useSSE';
import MessageBubble from './MessageBubble';
import ToolOutput from './ToolOutput';

const ChatWindow = ({ sessionId }) => {
  const [query, setQuery] = useState('');
  const { messages, loading } = useSSE(query, sessionId);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      setQuery('');
    }
  };

  return (
    <div className="chat-window">
      <div className="messages">
        {messages.map((message, index) => (
          <div key={index}>
            <MessageBubble message={message} />
            {message.type === 'tool_output' && (
              <ToolOutput output={message.output} type={message.tool} />
            )}
          </div>
        ))}
        {loading && <div className="loading">AI is typing...</div>}
      </div>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ask me something..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ChatWindow;
