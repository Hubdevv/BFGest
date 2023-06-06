
import Login from './pages/Login';
import { useEffect, useState } from 'react';
import { Context } from './class/Context';
import { BrowserRouter as Router, Routes, Route   } from 'react-router-dom'; 
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import User from './class/User';

function App() {
  
  const [session, setSession] = useState(false)
  // const [me, setMe] = useState(false)

  useEffect(() => {
    User.connected(setSession)
  }, []);
  
  return (
    <div className="App">
    <Context.Provider value={{session: session, setSession: setSession }}>

      <Router>
        <Routes>
          <Route></Route>

          <Route path="/" element={<Login />}></Route>
          <Route path='/dashboard' element={<Dashboard/>}></Route>
          <Route path='/user' element={<Users/>}></Route>

        </Routes>
      </Router>
    </Context.Provider>

    </div>
  );
}

export default App;
