import { Link } from "react-router-dom";
function Login(){
    return(
        <>
        <div className="loginPage">
<div className=" bg-white p-3 border rounded-3 shadow ms-5 cont mb-2">
    <div className="pt-3 text-center "> 
<h1>Welcome Back</h1>
<p>Login to your Cravings account</p>
    </div>

<div className="">
    <form action="">

        <label htmlFor="email">Email</label> <br />
        <input type="email" placeholder="Enter your email" className="form-control " /> <br />
        <label htmlFor="passward">Passward</label> <br />
        <input type="password" placeholder="Enter your passward" className="form-control  " />
    </form>
    <div className=" d-flex ps-3 mt-3 ms-3 ">
        <input type="checkbox" /> 
        <div className="d-flex mt-3">  
            <span>Remember me</span>
        <div className="d-flex justify-content-end ms-5 ps-5">
            </div> 
<p  className="para"> Forgot Password?</p>
        </div>
        
       
    </div>
</div>
<button className="ms-5  text-center rounded-3 ">Login</button>
<p className="text-dark-text-dark-emphasis text-center mt-3">---------Don't have an account?---------</p>
<p className="text-center "><Link to="/register" className="para">Create an account</Link>
     </p>
</div>
        </div>
        </>
    )
}
export default Login;