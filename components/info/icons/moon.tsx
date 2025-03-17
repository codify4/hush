import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const MoonIcon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width={100} height={100} viewBox="0 0 100 100" fill="none" {...props}>
      <Path
        d="M86.11 64.89c-4.91 4.91-11.39 7.8-18.33 7.8-13.8 0-25-11.2-25-25 0-10 5.59-18.7 13.8-23.2-1.6-0.2-3.2-0.4-4.9-0.4-19.6 0-35.6 16-35.6 35.6s16 35.6 35.6 35.6c14.9 0 27.7-12 31.6-28.7 0.7-0.7 1.3-1.4 1.9-2.2z"
        fill="#121418"
      />
    </Svg>
  );
};

export default MoonIcon;