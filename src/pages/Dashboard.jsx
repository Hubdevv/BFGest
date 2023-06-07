import React from 'react'
import { useContext , useEffect , useState } from 'react'
import { Link , useNavigate } from 'react-router-dom'
import { Context } from '../class/Context'
import Logout from '../class/Logout'

function Dashboard() {
  const context = useContext(Context)
  const [user, setUser] = useState('');
  const [userAllInfos, setUserAllInfos] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://bf-gest.rylize.dev/users/62fd25c1c143830a30c75dda`)
    .then(response => response.json())
    .then(user => {
      setUser(user[0])
      console.log(user.lastName)
      console.log('Minouche');

    } );
  }, []);

  return (
    <div className='col-10' >

      <header >
        <div className="flex ai-center">
            <span className='icon cl2 '>n</span>
            <div className='pos-r'>
                <span className='icon cl2'>b</span>
                <div className="circle"></div>
            </div>
           <div className='name user'>
              {/* <p className='cl2 '>{localStorage.getItem(user.user.lastName)}</p> */}
              <p className='cl2 '>Lyes</p>
              <span className='green'>SuperAdmin</span>

                <ul className='compte'>
                      <li><Link to={'/'} className='link'>Profile</Link></li>
                      <li><Link to={'/'} className='link'>Parametres</Link></li>
                      <li><Link onClick={() => Logout.logout(context, navigate)} className='link'>Se déconnecter</Link></li>

                </ul>
            </div>
           <img src="/image/cat.jpg" alt="" /> 
        </div>
      </header>
      <div className='grid2'>
        <aside>
                <div className='flex top'>
                    <div className='logo center'>
                        <h1>BF</h1>
                    </div>
                    <p>BFGest</p>
                </div>
                <ul>
                    <li><Link to={"/dashboard"} className='link' > <span className='icon'>a</span> Tableau de bord</Link> </li>
                    <li><Link to={"/"} className='link' ><span className='icon'>u</span> Clients </Link></li>
                    <li><Link to={"/"} className='link' ><span className='icon'>h</span> Achats</Link></li>
                    <li><Link to={"/"} className='link' ><span className='icon'>s</span> Articles</Link></li>
                    <li><Link to={"/"} className='link' ><span className='icon'>i</span> Fournisseurs</Link></li>
                    <li><Link to={"/"} className='link' ><span className='icon'>o</span> Ventes</Link></li>
                    <li><Link to={"/user"}className='link'  ><span className='icon'>y</span> Utilisateurs</Link></li>
                </ul>
        </aside>
        <div className="main">
          <div className="card">
            <div className="logo"><span className="icon">a</span></div>
            <h1>Bienvenue <strong>Lyes Djerada</strong></h1>

            <p>Votre business vous attend</p>
          </div>
        </div>
      </div>
 
    </div>
  )
}

export default Dashboard
