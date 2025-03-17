import * as React from 'react';
import Svg, { Path, Circle, SvgProps } from 'react-native-svg';

const BreathIcon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width={120} height={120} viewBox="0 0 120 120" fill="none" {...props}>
      <Circle cx="60" cy="60" r="30" fill="#121418" />
      <Path
        d="M60 15c-8.284 0-15 6.716-15 15 0 8.284 6.716 15 15 15s15-6.716 15-15c0-8.284-6.716-15-15-15zM30 45c-8.284 0-15 6.716-15 15 0 8.284 6.716 15 15 15s15-6.716 15-15c0-8.284-6.716-15-15-15zM90 45c-8.284 0-15 6.716-15 15 0 8.284 6.716 15 15 15s15-6.716 15-15c0-8.284-6.716-15-15-15zM60 75c-8.284 0-15 6.716-15 15 0 8.284 6.716 15 15 15s15-6.716 15-15c0-8.284-6.716-15-15-15z"
        fill="#121418"
        fillOpacity="0.3"
      />
    </Svg>
  );
};

export default BreathIcon;