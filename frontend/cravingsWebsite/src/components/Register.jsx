import { Link } from "react-router-dom";
function Register()  {
    return(
        <>
       <div className="loginPage">
<div className=" bg-white p-3 border rounded-3 shadow ms-5 cont float-end me-5">
    <div className="pt-3 text-center "> 
<h1>Create Account</h1>
<p>Join us as a Customer, Restaurant, or Rider</p>
    </div>

<div className="">
    <form action="">
Register as: <br />
<div className=" d-flex gap-3 ms-4 mt-2 mb-2">
<input type="radio" /> Customer
<input type="radio" />Restaurant
<input type="radio" />Rider
</div>
<input type="text" placeholder="Enter your full name"className="form-control  " /><br />
        
        <input type="email" placeholder="Enter your email" className="form-control " /> <br />
        <input type="tel"  placeholder="Enter your phone number" className="form-control  "/><br />
        <input type="password" placeholder="Enter your passward" className="form-control  " /> <br />
        <input type="password" placeholder="Confirm your passward" className="form-control  " />
    </form>
    <div className=" d-flex ps-3 mt-3 ms-3 ">
        <input type="checkbox" /> 
        <div className="d-flex mt-">  
            <span>
I agree to the terms and conditions.</span>
        <div className="d-flex justify-content-end ms-5 ps-5">
            </div> 

        </div>
        
       
    </div>
</div>
<button className="ms-5 mt-3 text-center rounded-3 ">Register</button>

<p className="text-center  mt-2">Already registered? <span className="para"><Link to="/login" className="para"> Login here</Link>
    </span></p>
</div>
        </div>
        </>
    )
}
export default Register;