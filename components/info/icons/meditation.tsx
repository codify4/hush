import * as React from 'react';
import Svg, { Path, Circle, G } from 'react-native-svg';

const MeditationIllustration = () => {
  return (
    <Svg width={200} height={200} viewBox="0 0 200 200" fill="none">
      <Circle cx="100" cy="100" r="60" fill="#121418" />
      <G opacity="0.8">
        <Path
          d="M100 50C88.954 50 80 58.954 80 70C80 81.046 88.954 90 100 90C111.046 90 120 81.046 120 70C120 58.954 111.046 50 100 50Z"
          fill="#121418"
          stroke="#121418"
          strokeWidth="2"
        />
        <Path
          d="M65 85C53.954 85 45 93.954 45 105C45 116.046 53.954 125 65 125C76.046 125 85 116.046 85 105C85 93.954 76.046 85 65 85Z"
          fill="#121418"
          stroke="#121418"
          strokeWidth="2"
        />
        <Path
          d="M135 85C123.954 85 115 93.954 115 105C115 116.046 123.954 125 135 125C146.046 125 155 116.046 155 105C155 93.954 146.046 85 135 85Z"
          fill="#121418"
          stroke="#121418"
          strokeWidth="2"
        />
        <Path
          d="M100 120C88.954 120 80 128.954 80 140C80 151.046 88.954 160 100 160C111.046 160 120 151.046 120 140C120 128.954 111.046 120 100 120Z"
          fill="#121418"
          stroke="#121418"
          strokeWidth="2"
        />
      </G>
      <Circle cx="100" cy="100" r="15" fill="#121418" stroke="#f1744c" strokeWidth="3" />
    </Svg>
  );
};

export default MeditationIllustration;