import React, {useContext, useState , useRef, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import AuthContext from '../context/AuthProvider';
import axios from '../api/axios'
const LOGIN_URL = '/auth'

function Login() {

  const {setAuth} = useContext(AuthContext);

  const emailRef = useRef();

  const errRef = useRef();

  const navigate = useNavigate();

  const [email , setEmail] = useState('')

  const [pwd, setPwd] = useState('')

  const [error, setError] = useState('')

  const [success ,setSuccess] = useState('')

  useEffect(() => {

     emailRef.current.focus();

  }, []);

  useEffect(() => {

   setError('');

  }, [email, pwd]);


  const handleSubmit = async (e) =>{

    e.preventDefault()

    try {
      const response = await axios.post(LOGIN_URL, 
        JSON.stringify({email, password: pwd}),
        {
          headers: {'Content-Type': 'application/json'},
          withCredentials: true
      })

      console.log(JSON.stringify(response?.data));

      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;

      setAuth({email, pwd ,roles, accessToken});

      setEmail('')

      setPwd('')
  
      setSuccess(true)

      navigate('/dashbord')

    } catch (error) {
      if(!error?.response){
        setError('No Server response');
       }else if (error.response?.status === 400){
        setError("Missing email or password");
       }else if (error.response?.status === 401){
        setError("Unauthorized")
       } else {
        setError('Login failed')
       }

       errRef.current.focus()
    }


  }
  return (
    <>

    {  success 

    ?
    <p className='cl2 center'>You are logged in GO to dashbord</p>

    :
    
    <div className='c center'>

        <div className='login cl2'>

          <h2>Connectez vous</h2>

          <span>Connectez-vous à votre espace administrateur</span>

          <form action="" method="POST" onSubmit={handleSubmit}>

            <p ref={errRef} className= {!error ? "cl2 mb20" : " err cl6 mb20"} aria-live="assertive">{error}</p>

              <label>Email</label>

              <input
              type="email"
              name='email'
              id='email'
              ref={emailRef}
              placeholder='Email'
              required
              // autoComplete='off'
              onChange={(e) => setEmail(e.target.value)}
              value={email}
                />

              <label>Mot de passe</label>

            <input 
            type="password"
            id='password'
            name='password' 
            placeholder='Mot de passe'
            value={pwd}
            required
            onChange={(e) => setPwd(e.target.value)}
            />

             <input type="submit" value={"SE CONNECTER"}  className="btn m" />
              
          </form>

        </div>
    </div>
    }
    </>
   
  )
}

export default Login
