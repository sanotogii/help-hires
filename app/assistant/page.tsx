"use client";

import { useEffect, useRef, useState } from "react";
import { answers } from "@/lib/data";

type Message = {
  id: number;
  role: "user" | "assistant";
  text: string;
  source?: string;
};

const greeting =
  "Hi Sara. I can help with the practical side of your first weeks: access, benefits, expenses, and where to find things. What do you need?";

const suggestions = [
  "How do I set up the VPN?",
  "What is the vacation policy?",
  "How do I file an expense?",
];

const fallback =
  "I do not have a set answer for that one. Try asking the People team about policy, or IT Support for anything account or equipment related. You can also browse the Employee Handbook.";

export default function AssistantPage() {
  const [messages, setMessages] = useState<Message[]>([
    { id: 0, role: "assistant", text: greeting },
  ]);
  const [input, setInput] = useState("");
  const [thinking, setThinking] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const list = listRef.current;
    if (list) {
      list.scrollTop = list.scrollHeight;
    }
  }, [messages, thinking]);

  function send(text: string) {
    const question = text.trim();
    if (!question || thinking) return;

    const lower = question.toLowerCase();
    const match = answers.find((entry) =>
      entry.keywords.some((keyword) => lower.includes(keyword)),
    );

    setMessages((current) => [
      ...current,
      { id: Date.now(), role: "user", text: question },
    ]);
    setInput("");
    setThinking(true);

    setTimeout(() => {
      setMessages((current) => [
        ...current,
        {
          id: Date.now() + 1,
          role: "assistant",
          text: match ? match.answer : fallback,
          source: match ? match.source : "HR & IT Directory",
        },
      ]);
      setThinking(false);
    }, 700);
  }

  return (
    <div>
      <header className="page-head">
        <h1>Ask anything about the company</h1>
      </header>

      <div className="chat">
        <div className="messages" ref={listRef}>
          {messages.map((message) => (
            <div
              key={message.id}
              className={`msg msg-${message.role}`}
            >
              <p>{message.text}</p>
              {message.source && (
                <span className="source-chip">Source: {message.source}</span>
              )}
            </div>
          ))}
          {thinking && <div className="msg msg-assistant thinking">Thinking...</div>}
        </div>

        {messages.length === 1 && (
          <div className="suggestions">
            {suggestions.map((suggestion) => (
              <button
                key={suggestion}
                type="button"
                className="suggestion"
                onClick={() => send(suggestion)}
              >
                {suggestion}
              </button>
            ))}
          </div>
        )}

        <form
          className="chat-input"
          onSubmit={(event) => {
            event.preventDefault();
            send(input);
          }}
        >
          <input
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="Ask a question..."
            aria-label="Ask a question"
          />
          <button
            type="submit"
            className="send"
            disabled={!input.trim() || thinking}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
