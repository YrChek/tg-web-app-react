/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import './App.css';
import { useTelegram } from './hooks/useTelegram';
import Header from './conponents/Header/Header';
import { Route, Routes } from 'react-router';
import ProductList from './conponents/ProductList/ProductList';
import Form from './conponents/Form/Form';

function App() {

  const { tg } = useTelegram()

  useEffect(() => {
    tg.ready()
  }, [])

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<ProductList />} />
        <Route path='form' element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
