
import Login from './pages/Login';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route   } from 'react-router-dom'; 
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import User from './class/User';

function App() {
  
  const [session, setSession] = useState(false)

  useEffect(() => {
    // User.connected(setSession)
  }, []);
  
  return (
    <div className="App">
    

      <Router>
        <Routes>

           <Route path="/" element={<Login />}></Route>
          <Route path='/dashboard' element={<Dashboard/>}></Route>
          <Route path='/user' element={<Users/>}></Route>

        </Routes>
      </Router>

    </div>
  );
}

export default App;
