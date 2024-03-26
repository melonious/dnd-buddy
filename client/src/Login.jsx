import { useState } from "react";
import httpClient from "./httpClient";

function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const loginUser = async () => {
        console.log(email, password);

        try {
            const resp = await httpClient.post("//localhost:8080/login", {
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
                <h3>Log In</h3>
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
            <button type="submit" className="btnPrimary" onClick={() => loginUser()}>Login</button>
        </>
    );
}

export default Login