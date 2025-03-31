import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList, KeyboardAvoidingView, Platform } from 'react-native';
import ChatMessage from '../components/ChatMessage';
import MessageInput from '../components/MessageInput';
import TypingIndicator from '../components/TypingIndicator';

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = (text) => {
    if (!text.trim()) return;
    
    const newMessage = {
      id: Date.now(),
      text,
      isUser: true,
      timestamp: new Date().toISOString()
    };
    
    setMessages(prev => [...prev, newMessage]);
    setIsTyping(true);
    
    // Simulate bot response after 1-2 seconds
    setTimeout(() => {
      const botResponse = {
        id: Date.now() + 1,
        text: getBotResponse(text),
        isUser: false,
        timestamp: new Date().toISOString()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const getBotResponse = (userMessage) => {
    const responses = [
      "Interesting! Tell me more.",
      "I'm still learning. Can you rephrase that?",
      "Thanks for sharing that with me!",
      "What else would you like to talk about?",
      "I'll make a note of that."
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ChatMessage message={item} />}
        contentContainerStyle={styles.messagesContainer}
        inverted
      />
      {isTyping && <TypingIndicator />}
      <MessageInput onSend={handleSend} />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  messagesContainer: {
    padding: 10,
  },
});

export default ChatScreen;