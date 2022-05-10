import React from 'react'
import Navbar from '../components/Navbar'
import Hero from "../assets/notes-hero.svg"
import "./styles.css"
import Footer from '../components/Footer'
import {useAuth} from "../contexts/authContext"
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Link } from 'react-router-dom'

function Signup() {
    const { signup, setSignup, signupInputHandler, signupHandler, guestUser } =
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
        <h2>Signup</h2>
        <form action="submit" className="login-form" 
        onSubmit={signupHandler}
        >
             <label htmlFor="email" className='label-form'>
                username
              
        <input className='ipt username' 
            type="username"
            placeholder="johndoe"
            name="username"
            value={signup.input.username || ""}
            onChange={signupInputHandler}
            required
        />
          </label>
            <label htmlFor="email" className='label-form'>
                email
              
        <input className='ipt username' 
            type="email"
            placeholder="johndoe@skribblr.com"
            name="email"
            value={signup.input.email || ""}
            onChange={signupInputHandler}
            required
        />
          </label>
        <label htmlFor="password" className='label-form'>
                 password
                 
        <div className="pwd-div">
           {/* password */}
        <input  className='ipt pwd' 
           type={`${signup.hide.pwd ? "password" : "text"}`}
           placeholder="Password"
           name="password"
           value={signup.input.password || ""}
           onChange={signupInputHandler}
           required
       / >
         

         {(signup.hide.pwd)?<VisibilityIcon
         className='hide-icon'
         onClick={() =>
          setSignup({
            ...signup,
            hide: { pwd: !signup.hide.pwd },
          })
        }   
        />:<VisibilityOffIcon
        className='hide-icon'
        onClick={() =>
         setSignup({
           ...signup,
           hide: { pwd: !signup.hide.pwd },
         })
       }
       />}   </div>
        </label>

        <label htmlFor="confirmPwd" className='label-form'>
                 confirm password
                 
        <div className="pwd-div">
           {/* confirm pwd */}
        <input  className='ipt pwd' 
           type={`${signup.hide.confirmPwd ? "password" : "text"}`}
           placeholder="Confirm Password"
           name="confirmPwd"
           value={signup.input.confirmPwd || ""}
           onChange={signupInputHandler}
           required
       / >
         

         {(signup.hide.confirmPwd)?<VisibilityIcon
         className='hide-icon'
         onClick={() =>
          setSignup({
            ...signup,
            hide: { confirmPwd: !signup.hide.confirmPwd },
          })
        }   
        />:<VisibilityOffIcon
        className='hide-icon'
        onClick={() =>
         setSignup({
           ...signup,
           hide: { confirmPwd: !signup.hide.confirmPwd },
         })
       }
       />}   </div>
        </label>
        {!signup.pwdMatch ? (
                       <span class="inp-valid login-input-theme">Passwords do not match.</span>
                  ) : null}

        <button type='submit' className='login-btn'>Register</button>
      
        </form>
 
      </div>
  </div>
  <Footer/>

  </div>
)
  
}

export default Signup