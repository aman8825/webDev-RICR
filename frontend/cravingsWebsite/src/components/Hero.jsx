import { Link } from "react-router-dom";
function Hero() {
    return(
        <>
        <div className="bg-danger hero text-light text-center">
            <div className="pt-5 ">
                <h1 className=" "> Your Favorite Food, <br />
Delivered Fast</h1>
<p>
    Order from thousands of restaurants and get it delivered to your doorstep
</p>
            </div>
            <div className="mt-4 d-flex gap-3 justify-content-center">
                <Link to="/register"><button className=" rounded-2 btn1">Sign Up</button></Link>
                <Link to="/login">  <button className=" rounded-2 btn2  ">Login</button>
                </Link>
              
            </div>
            <div className="d-flex align-content-center justify-content-center mt-4">
                <input type="text" className="form-control bg-light  " placeholder="🔍Search resturents or dishes..."/>
            </div>
        </div>
        </>
    )
}
export default Hero;