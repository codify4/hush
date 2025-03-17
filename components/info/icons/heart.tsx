import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const HeartIcon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width={120} height={120} viewBox="0 0 120 120" fill="none" {...props}>
      <Path
        d="M60 103.5l-7.65-6.96C30.6 77.76 15 63.75 15 46.5c0-13.8 10.8-24.6 24.6-24.6 7.8 0 15.3 3.6 20.4 9.3 5.1-5.7 12.6-9.3 20.4-9.3 13.8 0 24.6 10.8 24.6 24.6 0 17.25-15.6 31.26-37.35 50.04L60 103.5z"
        fill="#121418"
      />
    </Svg>
  );
};

export default HeartIcon;