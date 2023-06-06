import React, {useContext, useState} from 'react'
import User from '../class/User'
import { useNavigate } from 'react-router-dom'
import { Context } from '../class/Context'

const Connect = async (e, setError,navigate) => {

  e.preventDefault();

  let inputs = e.target

  let pass= inputs.pass

  let email = inputs.email

  if( email.value !=='' && pass.value !==''){

      console.log("Les champs sont remplis")

      const results = await User.login(inputs);

      console.log(results)

      if(results){
        console.log('logged in');
        localStorage.setItem('id', results.user.id)   
        localStorage.setItem('email', results.user.email);    
        localStorage.setItem('token', results.tokens.refresh.token);    
        localStorage.setItem('firstName', results.user.firstName);    
        localStorage.setItem('lastName', results.user.lastName); 

          setError('')

          navigate('/dashboard')

          // setSession(true)

       }else{
          setError(results.message)
                       
       }

  }else{

  setError( 'Veuillez saisir votre mot de passe')
  }

}

function Login() {

  const navigate = useNavigate();
  const context = useContext(Context)

  const [error, setError] = useState('')

  return (
    <div className='c center'>
      <div className='login cl2 '>
        <h2>Connectez vous</h2>
        <p>Connectez-vous à votre espace administrateur</p>

        <form action="" method="POST" onSubmit={(e) => Connect(e,setError,navigate)}>

          {(error !== '') && <p className="err">{error}</p>}  

            <label>Email</label>
            <input type="email" name='email' id='email' placeholder='Email' required="true" />

            <label>Mot de passe</label>
            <input type="password" id='pass' placeholder='Mot de passe'/>
           {/* {(error !== '') && <p className="cl6">Veuillez saisir votre mot de passe</p>}   */}


            <input type="submit" value={"SE CONNECTER"}  className="btn" />
            
        </form>

      </div>
    </div>
  )
}

export default Login
