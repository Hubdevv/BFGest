import React, {useState} from 'react'
import User from '../class/User'

const Connect = async (e, setError) => {

    e.preventDefault()
    let inputs = e.target
    let pass = inputs.pass 
    let email = inputs.email  

 if( email.value !=='' && pass.value !==''){

    console.log("Les champs sont remplis")
    // console.log(email.value);
    // console.log('hello ')

    // const results = await User.login(inputs);

    // console.log(results)
    if(pass.value ==''){setError(true)
    console.log('hello ')}

}
}

function Login() {

  const [error, setError] =useState(false)

  return (
    <div className='c center'>
      <div className='login cl2 '>
        <h2>Connectez vous</h2>
        <p>Connectez-vous à votre espace administrateur</p>

        <form action='' method='POST' onSubmit={(e) => Connect(e, setError)}>
            {error? <p className='cl6'>Veuillez saisir votre mot de passe.</p> : ''}
            <label>Email</label>
            <input type="email" name='email' placeholder='Email' required="true" />

            <label>Mot de passe</label>
            <input type="password" name='pass' placeholder='Mot de passe' required="true"/>
            <input type="submit" value={"SE CONNECTER"}  className="btn" />
            
        </form>

      </div>
    </div>
  )
}

export default Login
