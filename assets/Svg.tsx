import React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';

export const SearchIcon = props => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
      <Circle
        cx="11.7666"
        cy="11.7664"
        r="8.98856"
        stroke="#200E32"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M18.0183 18.4849L21.5423 21.9997"
        stroke="#200E32"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
