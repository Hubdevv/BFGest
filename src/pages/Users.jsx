import React , {useContext , useEffect, useState} from 'react'
import { useNavigate, Link } from "react-router-dom";
import { Context } from '../class/Context'
import Logout from '../class/Logout';


function Users() {
  const context = useContext(Context)
  const [user, setUser] = useState('');
  const navigate = useNavigate();

  useEffect(() => {


fetch ("https://bf-gest.rylize.dev/users?search=admin&role=admin")
.then((response) => response.json())
.then((data) =>{ setUser(data)
   console.log(data)})
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
                <p className='cl2 '>{localStorage.getItem('firstName')}</p>
                <span className='green'>{localStorage.getItem('role')}</span>
                
                <ul className='compte'>
                      <li><Link to={'/'} className='link'>Profile</Link></li>
                      <li><Link to={'/'} className='link'>Parametres</Link></li>
                      <li><Link  onClick={() => Logout.logout(context, navigate)} className='link'>Se déconnecter</Link></li>

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
          <h1 className='cl2'>Utilisateurs</h1>
          <div className=" bloc">
            <form  action='' method='POST' className="form "> 
              <input type="search"  placeholder='Recherche'/>
            </form>
            <div className="left">
              <Link to={"/"} className="btn link sup">SUPPRIMER</Link>
              <Link to={"/"} className="btn link add">AJOUTER</Link>
            </div>

          </div>

          <table>
            <tr>
              <th> <form action="" className='form'>
                 <input type="checkbox" name="check" id="" /></form></th>
              <th>NOM</th>
              <th>PRENOM</th>
              <th>EMAIL</th>
              <th>ROLE</th>
            </tr>

            <tr>
            <td>
            <form action="" className='form'>
                 <input type="checkbox" name="check" id="" /></form>
              </td>

              {/* <td>{
              user.map((element)=> {
                return <p>{element.firstName}</p>
              })}</td> */}
              <td>hello</td>
              <td>hello</td>
              <td>hello</td>

            </tr>
          </table>
        

        </div>
      </div>
 
    </div>
  )
}

export default Users
