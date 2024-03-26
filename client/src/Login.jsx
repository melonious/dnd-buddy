

function Login(){

    return(
        <>
            <form method="POST">
                <h3>Log In</h3>
                <div className="form-group">
                    <label htmlFor="email">Email</label><br/>
                    <input type="email" className="form-control" id="email" name="email" placeholder="Enter Email"></input>
                </div>
            </form>
            <form method="POST">
                <div className="form-group">
                    <label htmlFor="password">Password</label><br/>
                    <input type="password" className="form-control" id="password" name="password" placeholder="Enter Password"></input>
                </div>
            </form>
            <br/>
            <button type="submit" className="btnPrimary">Login</button>
        </>
    );
}

export default Login