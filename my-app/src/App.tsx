import React from 'react';
import { Header } from './components/Header';
import { Presentation } from './components/Presentation';
import { Partners } from './components/Partners';
import { Categories } from './components/Categories';
import { Masterpiece } from './components/Masterpiece';
function App() {
  return (
    <div>
      <Header />
      <Presentation />
      <Partners />
      <Categories />
      <Masterpiece />
    </div>
    
    
  );
}

export default App;
