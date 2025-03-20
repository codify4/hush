import * as React from 'react';
import Svg, { Path, Rect, Circle } from 'react-native-svg';

const FocusIllustration = () => {
  return (
    <Svg width={200} height={200} viewBox="0 0 200 200" fill="none">
      <Circle cx="100" cy="100" r="50" fill="#121418" />
      <Circle cx="100" cy="100" r="70" stroke="#121418" strokeWidth="3" strokeDasharray="8 8" />
      <Circle cx="100" cy="100" r="90" stroke="#121418" strokeWidth="2" strokeDasharray="4 4" />
      
      <Path
        d="M100 60V140"
        stroke="#121418"
        strokeWidth="3"
      />
      <Path
        d="M60 100H140"
        stroke="#121418"
        strokeWidth="3"
      />
      
      <Circle cx="100" cy="100" r="10" fill="#121418" stroke="#A28BEE" strokeWidth="3" />
      
      <Circle cx="140" cy="60" r="8" fill="#121418" />
      <Circle cx="60" cy="140" r="8" fill="#121418" />
      <Circle cx="140" cy="140" r="8" fill="#121418" />
      <Circle cx="60" cy="60" r="8" fill="#121418" />
    </Svg>
  );
};

export default FocusIllustration;