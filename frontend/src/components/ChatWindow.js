import { useState, useEffect } from 'react';
import { useSSE } from '../hooks/useSSE';
import MessageBubble from './MessageBubble';
import ToolOutput from './ToolOutput';

const ChatWindow = ({ sessionId }) => {
  const [query, setQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState(query);
  const { messages, loading } = useSSE(debouncedQuery, sessionId);

  // Debounce the query input to avoid sending too many requests to the backend
  useEffect(() => {
    const timer = setTimeout(() => {
      if (query.trim()) {
        setDebouncedQuery(query);
      }
    }, 1500); // Delay of 500ms after the user stops typing

    // Cleanup the timer when query changes or the component unmounts
    return () => clearTimeout(timer);
  }, [query]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      // Reset query after submission
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
