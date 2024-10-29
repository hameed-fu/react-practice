import React, { useEffect, useState } from "react";

function Login() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  let [user, setUser] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("userMail", email);
    
    setEmail("");
    setPassword("");
    setUser(email);
  };

  useEffect(() => {
    let userMail = localStorage.getItem("userMail");
    console.log(userMail)
    setUser(userMail);
  }, [user]);


  const logOut = () => {
    localStorage.removeItem('userMail')
    console.log('Logged out')
    setUser("");
     
  }

  //   if(login == true){
  //     return <h1>Welcome</h1>
  //   }else{
  //     return <h1>Go to login</h1>
  //   }

  console.log("user mail", user);
  return (
    <div className="container">
      <h1>
        
        {user ? <div>Welcome, <button className="btn btn-danger" onClick={logOut}>Logout</button></div> : "Please login"}</h1>
      {user ? (
        "Welcome"
      ) : (
        <div className="card mt-4" style={{ width: "500px" }}>
          <div className="card-header">Login</div>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="mt-2">
                <label htmlFor="">Email</label>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Eneter you email"
                  className="form-control"
                />
              </div>
              <div className="mt-4">
                <label htmlFor="">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Eneter you password"
                  className="form-control"
                />
              </div>

              <div className="mt-3">
                <button className="btn btn-primary" type="submit">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
