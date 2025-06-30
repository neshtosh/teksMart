import React, { useRef, useEffect, useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface Supplier {
  id: string;
  name: string;
  logo: string;
}

interface Message {
  id: number;
  sender: 'buyer' | 'supplier';
  text: string;
  timestamp: string;
}

interface ChatModalProps {
  isOpen: boolean;
  onClose: () => void;
  supplier: Supplier;
  initialMessages: Message[];
}

export default function ChatModal({ isOpen, onClose, supplier, initialMessages }: ChatModalProps) {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) setMessages(initialMessages);
  }, [isOpen, initialMessages]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages(prev => [
      ...prev,
      {
        id: prev.length + 1,
        sender: 'buyer',
        text: input,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);
    setInput('');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md w-full p-0 flex flex-col h-[80vh]">
        <DialogHeader className="flex-shrink-0">
          <div className="flex items-center gap-3">
            <img src={supplier.logo} alt={supplier.name} className="w-10 h-10 rounded-full object-cover" />
            <DialogTitle className="text-lg">Chat with {supplier.name}</DialogTitle>
          </div>
        </DialogHeader>
        {/* Message List */}
        <div className="flex-1 overflow-y-auto px-4 py-2 bg-gray-50" style={{ minHeight: 0 }}>
          {messages.map(msg => (
            <div
              key={msg.id}
              className={`flex ${msg.sender === 'buyer' ? 'justify-end' : 'justify-start'} mb-2`}
            >
              <div className={`max-w-xs px-4 py-2 rounded-2xl shadow text-sm ${
                msg.sender === 'buyer'
                  ? 'bg-blue-500 text-white rounded-br-none'
                  : 'bg-white text-gray-900 border rounded-bl-none'
              }`}>
                {msg.text}
                <div className="text-xs text-gray-400 mt-1 text-right">{msg.timestamp}</div>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        {/* Message Input */}
        <form
          className="flex items-center gap-2 p-4 border-t bg-white"
          onSubmit={e => {
            e.preventDefault();
            sendMessage();
          }}
        >
          <Input
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1"
            autoFocus
          />
          <Button type="submit" disabled={!input.trim()}>
            Send
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
} 