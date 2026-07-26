import React, { useState, useRef, useEffect } from 'react';
import { Send, Leaf, Sparkles, ShieldAlert, RefreshCw, MessageSquare } from 'lucide-react';
import ChatMessage from '../components/ChatMessage';
import { mockCompanionResponses } from '../data/mockData';

export default function CompanionPage() {
  const [messages, setMessages] = useState([
    {
      id: 'msg-1',
      sender: 'companion',
      text: "Hello Anusha. I'm NUURAI Companion — a quiet space to unpack how you've been feeling and notice patterns across your check-ins.\n\nWhat would you like to reflect on right now?",
      timestamp: 'Just now'
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSendMessage = (textToSend) => {
    const text = textToSend || inputText;
    if (!text.trim()) return;

    // Add user message
    const userMsg = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: text,
      timestamp: 'Just now'
    };

    setMessages(prev => [...prev, userMsg]);
    setInputText('');
    setIsTyping(true);

    // Simulate gentle companion typing response
    setTimeout(() => {
      let replyObj = mockCompanionResponses.presetReplies[text];
      if (!replyObj) {
        replyObj = mockCompanionResponses.defaultReply;
      }

      const companionMsg = {
        id: `comp-${Date.now()}`,
        sender: 'companion',
        text: replyObj.message,
        timestamp: 'Just now'
      };

      setMessages(prev => [...prev, companionMsg]);
      setIsTyping(false);
    }, 1200);
  };

  return (
    <div className="animate-fade-in" style={{
      maxWidth: '780px',
      margin: '0 auto 3rem',
      display: 'flex',
      flexDirection: 'column',
      height: 'calc(100vh - 150px)',
      minHeight: '560px'
    }}>
      {/* Top Companion Header */}
      <div style={{
        backgroundColor: 'var(--bg-card)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-lg) var(--radius-lg) 0 0',
        padding: '1rem 1.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: '1px solid var(--border-subtle)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{
            width: '38px',
            height: '38px',
            borderRadius: '50%',
            backgroundColor: 'var(--sage-light)',
            border: '1px solid var(--sage-border)',
            color: 'var(--sage-primary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Leaf size={18} />
          </div>

          <div>
            <h2 style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--text-primary)' }}>
              NUURAI Companion
            </h2>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
              Private Reflection & Dialogue Prototype
            </span>
          </div>
        </div>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.4rem',
          backgroundColor: 'var(--bg-card-subtle)',
          padding: '0.25rem 0.65rem',
          borderRadius: 'var(--radius-full)',
          fontSize: '0.75rem',
          color: 'var(--text-secondary)'
        }}>
          <Sparkles size={12} color="var(--sage-primary)" />
          <span>Local Simulation</span>
        </div>
      </div>

      {/* Main Chat Container */}
      <div style={{
        flex: 1,
        backgroundColor: 'var(--bg-warm)',
        borderLeft: '1px solid var(--border-subtle)',
        borderRight: '1px solid var(--border-subtle)',
        padding: '1.5rem',
        overflowY: 'auto'
      }}>
        {messages.map(msg => (
          <ChatMessage 
            key={msg.id} 
            message={msg.text} 
            isUser={msg.sender === 'user'} 
            timestamp={msg.timestamp}
          />
        ))}

        {isTyping && (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.75rem 1rem',
            backgroundColor: 'var(--bg-card)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-md)',
            width: 'fit-content',
            fontSize: '0.825rem',
            color: 'var(--text-muted)',
            marginBottom: '1rem'
          }}>
            <RefreshCw size={14} className="animate-spin" style={{ animation: 'spin 1.5s linear infinite' }} />
            <span>NUURAI Companion is reflecting...</span>
          </div>
        )}

        <div ref={chatEndRef} />
      </div>

      {/* Suggested Starter Prompts Pill Row */}
      <div style={{
        backgroundColor: 'var(--bg-card)',
        borderLeft: '1px solid var(--border-subtle)',
        borderRight: '1px solid var(--border-subtle)',
        padding: '0.75rem 1.25rem',
        borderTop: '1px solid var(--border-subtle)',
        overflowX: 'auto',
        whiteSpace: 'nowrap',
        display: 'flex',
        gap: '0.5rem'
      }}>
        <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', alignSelf: 'center', flexShrink: 0 }}>
          Suggested:
        </span>
        {mockCompanionResponses.starterPrompts.map((prompt, i) => (
          <button
            key={i}
            onClick={() => handleSendMessage(prompt)}
            style={{
              padding: '0.35rem 0.85rem',
              borderRadius: 'var(--radius-full)',
              border: '1px solid var(--border-subtle)',
              backgroundColor: 'var(--bg-card-subtle)',
              fontSize: '0.78rem',
              color: 'var(--text-primary)',
              transition: 'background var(--transition-fast)',
              flexShrink: 0
            }}
          >
            {prompt}
          </button>
        ))}
      </div>

      {/* Input Form Bar */}
      <form 
        onSubmit={(e) => { e.preventDefault(); handleSendMessage(); }}
        style={{
          backgroundColor: 'var(--bg-card)',
          border: '1px solid var(--border-subtle)',
          borderRadius: '0 0 var(--radius-lg) var(--radius-lg)',
          padding: '0.85rem 1.25rem',
          display: 'flex',
          gap: '0.75rem',
          alignItems: 'center'
        }}
      >
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Share how you are feeling or ask about your patterns..."
          style={{
            flex: 1,
            padding: '0.65rem 1rem',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border-subtle)',
            backgroundColor: 'var(--bg-warm)',
            fontSize: '0.9rem',
            outline: 'none',
            color: 'var(--text-primary)'
          }}
        />

        <button 
          type="submit" 
          disabled={!inputText.trim()}
          className="btn btn-primary"
          style={{
            padding: '0.65rem 1.1rem',
            opacity: inputText.trim() ? 1 : 0.5,
            cursor: inputText.trim() ? 'pointer' : 'default'
          }}
        >
          <Send size={16} />
        </button>
      </form>

      {/* Mandatory Mental Healthcare Disclaimer Banner */}
      <div style={{
        marginTop: '0.85rem',
        padding: '0.65rem 1rem',
        borderRadius: 'var(--radius-md)',
        backgroundColor: 'var(--bg-card-subtle)',
        border: '1px solid var(--border-subtle)',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        fontSize: '0.75rem',
        color: 'var(--text-secondary)',
        lineHeight: 1.4
      }}>
        <ShieldAlert size={14} color="var(--text-muted)" style={{ flexShrink: 0 }} />
        <span>
          <strong>Disclaimer:</strong> NUURAI supports personal reflection and emotional awareness. It is not a medical or clinical tool, and is not a replacement for professional mental healthcare.
        </span>
      </div>
    </div>
  );
}
