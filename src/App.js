import './App.css';

import { Header, HomeSection, Navigation,Language,Portifolio, Contact, Footer } from './components';


const App = () => {
  return (
    <div className=''>

      <Header />
      <Navigation />

      <HomeSection />
      <Language />
      <Portifolio />
      <Contact />
    <Footer />
    </div>
  );
}

export default App;
