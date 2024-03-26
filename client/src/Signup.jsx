

function Signup(){

    return(
        <>
            <form method="POST">
                <h3>Sign Up</h3>
                <div className="form-group">
                    <label htmlFor="email">Email</label><br/>
                    <input type="email" className="form-control" id="email" name="email" placeholder="Enter Email"></input>
                </div>
            </form>
            <form method="POST">
                <div className="form-group">
                    <label htmlFor="firstName">First Name</label><br/>
                    <input type="text" className="form-control" id="firstName" name="firstName" placeholder="Enter First Name"></input>
                </div>
            </form>
            <form method="POST">
                <div className="form-group">
                    <label htmlFor="password">Password</label><br/>
                    <input type="password" className="form-control" id="password" name="password" placeholder="Enter Password"></input>
                </div>
            </form>
            <form method="POST">
                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password</label><br/>
                    <input type="password" className="form-control" id="confirmPassword" name="confirmPassword" placeholder="Confirm Password"></input>
                </div>
                <br/>
                <button type="submit" className="btnPrimary">Signup</button>
            </form>
        </>
    );
}

export default Signup;