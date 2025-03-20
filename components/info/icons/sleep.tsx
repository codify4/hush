import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';

const SleepIllustration = () => {
  return (
    <Svg width={200} height={200} viewBox="0 0 200 200" fill="none">
      <Circle cx="100" cy="100" r="60" fill="#121418" />
      
      <Path
        d="M140 70C140 70 120 90 120 110C120 130 140 150 140 150"
        stroke="#121418"
        strokeWidth="3"
        strokeLinecap="round"
      />
      
      <Path
        d="M60 70C60 70 80 90 80 110C80 130 60 150 60 150"
        stroke="#121418"
        strokeWidth="3"
        strokeLinecap="round"
      />
      
      <Path
        d="M85 120C85 120 100 130 115 120"
        stroke="#f1744c"
        strokeWidth="3"
        strokeLinecap="round"
      />
      
      <Circle cx="80" cy="90" r="5" fill="#121418" stroke="#f1744c" strokeWidth="2" />
      <Circle cx="120" cy="90" r="5" fill="#121418" stroke="#f1744c" strokeWidth="2" />
      
      <Path
        d="M150 50L160 40M160 50L150 40"
        stroke="#121418"
        strokeWidth="3"
        strokeLinecap="round"
      />
      
      <Path
        d="M40 50L50 40M50 50L40 40"
        stroke="#121418"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </Svg>
  );
};

export default SleepIllustration;