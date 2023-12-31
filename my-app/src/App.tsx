import React from 'react';
import { Header } from './components/Header';
import { Presentation } from './components/Presentation';
import { Partners } from './components/Partners';
import { Categories } from './components/Categories';
import { Masterpiece } from './components/Masterpiece';
import { Services } from './components/Services';
import { Solutions } from './components/Solutions';
import { Reviews } from './components/Reviews';
import { Catalogs } from './components/Catalogs';
import { ArtEvents } from './components/ArtEvents';
import { JoinUs } from './components/JoinUs';
import { Footer } from './components/Footer';
function App() {
  return (
    <div>
      <Header />
      <Presentation />
      <Partners />
      <Categories />
      <Masterpiece />
      <Services />
      <Solutions/>
      <Reviews/>
      <Catalogs/>
      <ArtEvents/>
      <JoinUs/>
      <Footer/>
    </div>
    
    
  );
}

export default App;
