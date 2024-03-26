import { useState } from 'react';
import httpClient from "./httpClient";

function Signup(){
    const [givenName, setGivenName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signup = async () => {
        try {
            const resp = await httpClient.post("//localhost:8080/signup", {
            givenName,
            email,
            password,
        });
            window.location.href = "/";
        }
        catch (e) {
            if (e.response.status === 401) {
                alert("invalid credentials")
            }
        }        
    };


    return(
        <>
            <form method="POST">
                <h3>Sign Up</h3>
                <div className="form-group">
                    <label htmlFor="email">Email</label><br/>
                    <input 
                        type="email" 
                        className="form-control" 
                        id="email" 
                        name="email" 
                        placeholder="Enter Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    ></input>
                </div>
            </form>
            <form method="POST">
                <div className="form-group">
                    <label htmlFor="givenName">Given Name</label><br/>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="givenName" 
                        name="givenName" 
                        placeholder="Enter Given Name"
                        value={givenName}
                        onChange={(e) => setGivenName(e.target.value)}
                    ></input>
                </div>
            </form>
            <form method="POST">
                <div className="form-group">
                    <label htmlFor="password">Password</label><br/>
                    <input 
                        type="password" 
                        className="form-control" 
                        id="password" 
                        name="password" 
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    ></input>
                </div>
            </form>
            <br/>
            <button 
                    type="submit" 
                    className="btnPrimary" 
                    onClick={() => signup()}
            >Signup</button>
            {/* <form method="POST">
                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password</label><br/>
                    <input type="password" className="form-control" id="confirmPassword" name="confirmPassword" placeholder="Confirm Password"></input>
                </div>
                <br/>
                <button type="submit" className="btnPrimary" onClick={() => signup()}>Signup</button>
            </form> */}
        </>
    );
}

export default Signup;