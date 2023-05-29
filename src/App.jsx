
import Login from './pages/Login';
import { BrowserRouter as Router, Routes, Route   } from 'react-router-dom'; 
import Dashboard from './pages/Dashboard';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route></Route>

          <Route path="/" element={<Login />}></Route>
          <Route path='/dashboard' element={<Dashboard/>}></Route>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
