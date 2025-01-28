import { StartPage } from "./pages/start-page";
import { Game } from "./pages/game";
import { Routes, Route } from 'react-router-dom';



function App() {


  return (
    <Routes>
    <Route path="/" element={<StartPage />} />
    <Route path="/game" element={<Game />} />
  </Routes>
  )
}

export default App
