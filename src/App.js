import { useEffect } from 'react';
import './App.css';
import { useTelegram } from './hooks/useTelegram';
import Header from './conponents/Header/Header';

function App() {

  const {tg, onToggleButton} = useTelegram()

  useEffect(() => {
    tg.ready()
  }, [])

  return (
    <div className="App">
      <Header />
      <button onClick={onToggleButton}>Спец кнопка</button>
    </div>
  );
}

export default App;
