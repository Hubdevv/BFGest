import React , {useContext , useEffect, useState} from 'react'
import { useNavigate, Link } from "react-router-dom";
import { Context } from '../class/Context'
import Logout from '../class/Logout';
import User from '../class/User';
import Table from '../components/Table';



function Users() {
  const fetchInfo = async() =>{

    const results = await User.home();
  
    console.log("where are the users !")
    setData(results)
    // setAllUser(results)
  
    console.log("heeloooe",results)
  }
  const url = "https://bf-gest.rylize.dev/users";
  const context = useContext(Context)

  // const [alluser, setAllUser] = useState([]);
  const [data, setData] = useState([])
  const navigate = useNavigate();



      
    useEffect(() => {
     
      fetchInfo(setData);

    }, [])

  // useEffect(() => {
    
  //   User.session(context, navigate)
  //   async function getUsers(){
  //     const response = await fetch(url,{method: "POST",
      // headers: {

      //     "Content-Type": "application/json",
      //     Authorization: 'Bearer' + localStorage.getItem('access'),
      // },      body: JSON.stringify({
        
  //   })
  //   }) ;
  //     const data = await response.json();
  //   setAllUser(data)}

  //   getUsers()

  //   // getUsers(setAllUser)
    
  //   console.log(alluser, "data users");

  // }, []);
  
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

            {/* {
              alluser == false
              ?
              <div className=''>Loading</div>
              :
              alluser

              &&
              alluser.map((element) => <Table key={element.id} data={element} />)
            } 
       
            { 
                alluser

                &&
              
                alluser.map((element) => <Table key={element.id} data={element} />)
            } */}
          </table>
        
      <h1 style={{ color: "green" }}>using JavaScript inbuilt FETCH API</h1>
      <center> {data.lastName}   
           {/* {
        
        data 
        &&
        data.map((dataObj, index) => {
          return (
            <div
              style={{
                width: "15em",
                backgroundColor: "#35D841",
                padding: 2,
                borderRadius: 10,
                marginBlock: 10,
              }}
            >
              <p style={{ fontSize: 20, color: 'white' }}>{dataObj.lastName}</p>
            </div>
          );
        })} */}
      </center>
        </div>
      </div>
 
    </div>
  )
}

export default Users
