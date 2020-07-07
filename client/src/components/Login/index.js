import React, {useState} from "react";
// import "./style.css";
import {login, signup} from "../../utils/API";


export default ()=>{
  const [input, setInput] = useState({
    email: "",
    password: ""
  })
  const [isLogin, setIsLogin] = useState(1)
  const [showLogin, setShowLogin] = useState(0)

  const handleSubmitClick = async (e) => {
    e.preventDefault()
    const {data} = isLogin ? await login(input) : await signup(input);
    if(data?.email){
      window.location.replace('/books')}
  }
    return (  
    <div>
      <p onClick={()=>setShowLogin(1)} style={{position: "fixed", top: "1em", right: "1em", color:"black", zIndex: 3}}>Login</p>

      {showLogin? (
        <div className="container">
          <div className="row" style={{position: "fixed", top: "30%", left: "38%", width: "400px", backgroundColor: "hsla(60, 20%, 99%, 0.8)"}}>
            <div className="col-md-12" >
                <h2>{isLogin ? "Login Form" : "Sign Up Form"}</h2>
                <form className="login">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input value={input.email} onChange={(e)=> setInput({...input,email:e.target.value})} type="email" className="form-control" id="email-input" placeholder="Email"/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input value={input.password} onChange={(e)=> setInput({...input, password:e.target.value})} type="password" className="form-control" id="password-input" placeholder="Password"/>
                  </div>
                  <button onClick={handleSubmitClick} type="submit" className="btn btn-default">{isLogin? "Login": "Sign Up"}</button>
                </form>
                <br />
                <p>Or {isLogin ? "sign up " : "log in "}<a onClick={()=> setIsLogin(!isLogin)} href="#">here</a></p>
            </div>
          </div>
        </div>
      ): (<></>)}
    </div>
    );
  }
