function ContactUs() {
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
            <label htmlFor="emailId">Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
           <label htmlFor="PhoneNo">Email</label>
            <input
              type="tel"
              name="phone"
              className="form-control"
              value={phone}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <label htmlFor="details">Details</label>
            <textarea name="textarea" ></textarea>
            <div className="float-end">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
    
}
export default ContactUs;