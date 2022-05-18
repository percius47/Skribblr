import React from 'react'
import Navbar from '../components/Navbar'
import Hero from "../assets/notes-hero.svg"
import "./styles.css"
import Footer from '../components/Footer'
import {useAuth} from "../contexts/authContext"
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Link, NavLink } from 'react-router-dom'

function Login() {
  const { login, setLogin, loginInputHandler, loginHandler, guestUser } =
    useAuth();
  return (
    <div>
      <Navbar/>
      <div className="home-parent">
        <div className="notes-hero">

            <img src={Hero} className="notes-hero-img" alt="hero"/>
            <p className="hero-subtitle">
                Keep your out of the world notes handy with <span>Skribblr</span>.
            </p>
        </div>
        <div className="login">
          <h2>Login</h2>
          <form action="submit" className="login-form" 
          onSubmit={loginHandler}
          >
          <input className='ipt username' 
              type="email"
              placeholder="johndoe@skribblr.com"
              name="email"
              value={login.input.email || ""}
              onChange={loginInputHandler}
              required
          />
          <div className="pwd-div">
          <input  className='ipt pwd' 
             type={`${login.hide.pwd ? "password" : "text"}`}
             placeholder="Password"
             name="password"
             value={login.input.password || ""}
             onChange={loginInputHandler}
             required
         / >

           {(login.hide.pwd)?<VisibilityIcon
           className='hide-icon'
           onClick={() =>
            setLogin({
              ...login,
              hide: { pwd: !login.hide.pwd },
            })
          }
          />:<VisibilityOffIcon
          className='hide-icon'
          onClick={() =>
           setLogin({
             ...login,
             hide: { pwd: !login.hide.pwd },
           })
         }
         />} 
        
         
          </div>

          
          <button type='submit' className='login-btn'>Login</button>
          <button type='submit' className='login-btn-secondary '
           onClick={() => setLogin({ ...login, input: guestUser })}
          >Guest Login</button>
          </form>
          <p className='signup-link-p'>New to Skribblr? <span className='signup-link'><Link to="/signup" >Sign Up!</Link></span></p>
        </div>
    </div>
    <Footer/>

    </div>
  )
}

export default Login