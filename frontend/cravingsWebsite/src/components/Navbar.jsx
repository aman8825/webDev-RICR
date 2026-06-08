import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="d-flex navbar">
      <div className="ms-3">
        <Link to="/">
      
        <img
          src="https://cravings.ricr.in/assets/transparentLogoLight-De2Z7I01.png"
          alt=""
        />
          </Link>
      </div>

      <div className="d-flex gap-3 me-5 text-light fw-bold">
        <Link to="/login" className="text-light text-decoration-none">
          Login
        </Link>

        <Link
          to="/register"
          className="reg rounded-2 text-decoration-none"
        >
          Register
        </Link>
      </div>
    </div>
  );
}

export default Navbar;