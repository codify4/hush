import React, { useState, useEffect } from 'react';
import { Text, TextStyle } from 'react-native';

interface SimpleTypingTextProps {
  text: string;
  typingSpeed?: number;
  style?: TextStyle;
  delay?: number;
}

const SimpleTypingText: React.FC<SimpleTypingTextProps> = ({ 
  text, 
  typingSpeed = 70, 
  style, 
  delay = 1000
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startTyping, setStartTyping] = useState(false);

  // Handle initial delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setStartTyping(true);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [delay]);

  // Handle typing animation
  useEffect(() => {
    if (!startTyping || currentIndex >= text.length) return;
    
    const timer = setTimeout(() => {
      setDisplayedText(prev => prev + text[currentIndex]);
      setCurrentIndex(prev => prev + 1);
    }, typingSpeed);
    
    return () => clearTimeout(timer);
  }, [currentIndex, startTyping, text, typingSpeed]);

  return (
    <Text style={style}>
      {displayedText}
      {currentIndex < text.length && '|'}
    </Text>
  );
};

export default SimpleTypingText;