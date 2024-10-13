import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Loans from './pages/Loans';
import FindHomes from './pages/FindHomes';
import Paperwork from './pages/Paperwork';
import Header from './components/Header';
import Landing from './pages/Landing';
import Footer from './components/Footer';
function App() {
  return (
    <Router>
          <Header/>
      <Routes>
        <Route path="/" element={<Landing/>}></Route>
        <Route path="/loans" element={<Loans/>}></Route>
        <Route path="/findHomes" element={<FindHomes/>}></Route>
        <Route path="/paperwork" element={<Paperwork/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
