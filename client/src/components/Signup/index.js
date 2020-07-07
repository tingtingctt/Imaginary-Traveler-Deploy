import React, {useState} from "react";
// import "./style.css";
import {signup} from "../../utils/API"

export default ()=>{
const [input, setInput] = useState({
  email: "",
  password:""
})

  const handleSubmitClick = () => {
    signup(input).then(res=> console.log(res))
  }

    return (  
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
              <h2>Signup Form</h2>
                <form className="login">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input value={input.email} onChange={(e)=> setInput({...input,email:e.target.value})} type="email" className="form-control" id="email-input" placeholder="Email"/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input value={input.password} onChange={(e)=> setInput({...input, password:e.target.value})} type="password" className="form-control" id="password-input" placeholder="Password"/>
                  </div>
                  <button onClick={handleSubmitClick} type="submit" className="btn btn-default">Login</button>
                </form>
                <br />
                <p>Or sign up <a href="/signup">here</a></p>
          </div>
        </div>
      </div>
    );
  }



