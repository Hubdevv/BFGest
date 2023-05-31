import React from 'react'
import { Link } from 'react-router-dom'
function Dashboard() {
  return (
    <div className='col-10' >

      <header >
        <div className="flex ai-center">
            <span className='icon cl2 '>n</span>
            <div className='pos-r'>
                <span className='icon cl2'>b</span>
                <div className="circle"></div>
            </div>
           <div className='name'>
                <p className='cl2 '>Lyes</p>
                <span className='green'>SuperAdmin</span>
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
                    <li><Link to={"/"} className='link' > <span className='icon'>a</span> Tableau de bord</Link> </li>
                    <li><Link to={"/"} className='link' ><span className='icon'>u</span> Clients </Link></li>
                    <li><Link to={"/"} className='link' ><span className='icon'>h</span> Achats</Link></li>
                    <li><Link to={"/"} className='link' ><span className='icon'>s</span> Articles</Link></li>
                    <li><Link to={"/"} className='link' ><span className='icon'>i</span> Fournisseurs</Link></li>
                    <li><Link to={"/"} className='link' ><span className='icon'>o</span> Ventes</Link></li>
                    <li><Link to={"/"}className='link'  ><span className='icon'>y</span> Utilisateurs</Link></li>
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
