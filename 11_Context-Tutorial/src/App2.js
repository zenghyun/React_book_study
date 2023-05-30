import React from 'react';
import { ColorProvider } from './contexts/color2';
import ColorBox from './components/ColorBox2';
import SelectColors from './components/SelectColors2';
const App2 = () => {
  return (
    <ColorProvider>
      <div>
        <SelectColors />
        <ColorBox />
      </div>
    </ColorProvider>
  );
};

export default App2;