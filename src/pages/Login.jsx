import React from 'react'

function Login() {
  return (
    <div className='c center'>
      <div className='login cl2 '>
        <h2>Connectez vous</h2>
        <p>Connectez-vous à votre espace administrateur</p>

        <form action='' method='' className=''>

            <label>Email</label>
            <input type="email" placeholder='Email'/>

            <label>Mot de passe</label>
            <input type="password" placeholder='Mot de passe'/>
            <input type="submit" value={"SE CONNECTER"}  className="btn" />
            
        </form>

      </div>
    </div>
  )
}

export default Login
