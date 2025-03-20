import { useEffect, useState } from 'react';

export const useSSE = (query, sessionId) => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query) return;

    const eventSource = new EventSource(`http://localhost:8000/query?session_id=${sessionId}&query=${query}`);

    eventSource.onopen = () => {
      setLoading(true);
    };

    eventSource.onmessage = (event) => {
      const data = JSON.parse(event.data);

      if (data.type === 'chunk') {
        setMessages((prevMessages) => [
          ...prevMessages,
          { type: 'ai', text: data.text },
        ]);
      } else if (data.type === 'tool_use') {
        setMessages((prevMessages) => [
          ...prevMessages,
          { type: 'tool_use', tool: data.tool },
        ]);
      } else if (data.type === 'tool_output') {
        setMessages((prevMessages) => [
          ...prevMessages,
          { type: 'tool_output', output: data.output },
        ]);
      } else if (data.type === 'end') {
        setLoading(false);
      }
    };

    eventSource.onerror = () => {
      setLoading(false);
      console.error('Error in SSE connection');
    };

    return () => {
      eventSource.close();
    };
  }, [query, sessionId]);

  return { messages, loading };
};
