import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const BrainIcon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width={120} height={120} viewBox="0 0 120 120" fill="none" {...props}>
      <Path
        d="M95 50c0-13.807-11.193-25-25-25-5.235 0-10.089 1.612-14.09 4.365C51.91 26.612 47.055 25 41.82 25 28.014 25 16.82 36.193 16.82 50c0 6.585 2.54 12.566 6.69 17.036A24.922 24.922 0 0020 77.5C20 91.583 31.417 103 45.5 103c6.454 0 12.367-2.398 16.864-6.346C66.86 100.602 72.774 103 79.228 103 93.31 103 104.728 91.583 104.728 77.5c0-3.768-.838-7.338-2.337-10.536C92.52 62.495 95 56.544 95 50z"
        fill="#121418"
      />
    </Svg>
  );
};

export default BrainIcon;