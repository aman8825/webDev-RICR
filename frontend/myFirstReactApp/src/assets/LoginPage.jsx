// import { useState } from "react";

// function LoginPage() {
//   const [userName, setUserName] = useState("");
//   const [city, setCity] = useState("");

//   return (
//     <>
//       <input
//         type="text"
//         name="userName"
//         onChange={(e) => setUserName(e.target.value)}
//       />

//       <hr />
//       <br />
//       <br />
//       <br />
//       <hr />
//       <div>my uSer Name is {userName}</div>
//       <div>My City is {city}</div>

//       <hr />
//       <br />
//       <br />
//       <br />
//       <hr />

//       <input
//         type="text"
//         name="city"
//         onChange={(e) => setCity(e.target.value)}
//       />
//     </>
//   );
// }

// export default LoginPage;
import { useState } from "react";

function LoginPage() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("userName :", userName);
    console.log("password :", password);
  };
  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="border p-3 w-50 mt-5 bg-light shadow rounded">
          <h1 className="text-center">Welcome Back!!!</h1>
          <br />
          <form onSubmit={handleSubmit}>
            <label htmlFor="userName">Username</label>
            <input
              type="text"
              name="userName"
              className="form-control"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <br />
            <label htmlFor="password">Password</label>
            <input
              type="text"
              name="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <div className="float-end">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginPage;