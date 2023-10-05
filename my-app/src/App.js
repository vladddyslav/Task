import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import CardList from './components/cardfList/CardList';
import { useState } from 'react';

function App() {

  const [searchValue,setSearchValue] = useState("");
  const onSetValue = (newValue) => {
    setSearchValue(newValue);
  }

  return (
    <>
      <Header searchValue={searchValue} setSearchValue={setSearchValue}/>
      <CardList searchValue={searchValue}  />
      <Footer />
    </>

  );
}

export default App;
