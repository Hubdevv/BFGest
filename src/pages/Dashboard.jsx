import React from 'react'
import { Link } from 'react-router-dom'
function Dashboard() {
  return (
    <div >

      <header >
     

        <div className="flex flex-end ai-center">
            <span className='icon'>l</span>
            <div>
                <span className='icon'>m</span>
            </div>
            <div className=''>
                <p>Lyes</p>
                <p className=''>Super Admin</p>
            </div>
           <img src="/image/cat.jpg" alt="" /> 
         
       
        </div>
      </header>

      <aside>
        <div className='flex top'>
            <div className='logo center'>
                <h1>BF</h1>
            </div>
            <p>BFGest</p>
        </div>
        <ul>
            <li><Link to={"/"} className='link' > <span className='icon'>a</span> Tableau de bord</Link> </li>
            <li><Link to={"/"} className='link' ><span className='icon'>u</span> Clients </Link></li>
            <li><Link to={"/"} className='link' ><span className='icon'>h</span> Achats</Link></li>
            <li><Link to={"/"} className='link' ><span className='icon'>s</span> Articles</Link></li>
            <li><Link to={"/"} className='link' ><span className='icon'>i</span> Fournisseurs</Link></li>
            <li><Link to={"/"} className='link' ><span className='icon'>o</span> Ventes</Link></li>
            <li><Link to={"/"}className='link'  ><span className='icon'>y</span> Utilisateurs</Link></li>
        </ul>
      </aside>
    </div>
  )
}

export default Dashboard
