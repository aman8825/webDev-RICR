import { Link } from "react-router-dom";

function Header() {
  return (
    <>
     <div className="bg-primary-subtle p-2 d-flex justify-content-between align-items-center">
        <div className="text-primary fs-4 fw-bold">My Company</div>
        <div className="d-flex gap-4">
        <Link to={"/"}>Home</Link>
      {/* <span>Home</span>
      <span>About</span>
      <span>Products</span>
      <span>ContactUs</span> */}

        </div>
        <div className="d-flex gap-4">
          <button className="btn btn-outline-primary">login</button>
          <button className="btn bg-primary" >Register</button>
        </div>

      </div>
    </>
  );
}
export default Header;
