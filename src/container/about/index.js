import React from 'react';
import { useState } from 'react';

const About = () => {

  const [num, setNum] = useState(0);
  const [logedin, setLogedin] = useState(false);

  const Increment = () => {
    setNum(num + 1);
    console.log(num);
  }

  const Login = () => {
    console.log("login");
    setLogedin(true);
  }

  const Logout = () => {
    console.log("logout");
    setLogedin(false);
  }


    return (
        <div className="about">
          <h1>about</h1>
          <p>This is my about section</p>

          <button className='increment' onClick={Increment}>+</button>
          <br/><br/> 
          <div>
           {logedin ? (<button className='Logout' onClick={Logout}>logout</button>) : (<button className='Login' onClick={Login}>login</button>)}
          </div>
          <div>
            {logedin ? <>Wellcom to the page</> : <>login to the page</>}
          </div>
        </div>
    )
}

export default About;