import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Loans from './pages/loans';
import Mortgage from './pages/Mortgage';
import Paperwork from './pages/Paperwork';
import Header from './components/Header';
function App() {
  return (
    <Router>
          <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/loans" element={<Loans/>}></Route>
        <Route path="/mortgage" element={<Mortgage/>}></Route>
        <Route path="/paperwork" element={<Paperwork/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
