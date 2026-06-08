function Footer() {
  return (
    <>
      <div className="footer p-3">
  
            <div className="text-center "> --- Your favorite food delivery platform connecting customers with
          restaurants and riders. ---</div>
         
      
        <div className=" d-flex gap-5 m-5 justify-content-between ">
          <div className="logo">
            <img
              src="https://cravings.ricr.in/assets/circleLogo-DpCri5UD.png"
              alt=""
            />
          </div>
          <div>
            <h5>Quick Links</h5>
            <p>Home</p>
            <p>About</p>
            <p>Order Now</p>
          </div>
          <div>
            <h5>For Restaurants</h5>
            <p>Partner With Us</p>
            <p>Restaurant Dashboard</p>
          </div>
          <div>
            <h5>For Riders</h5>
            <p>Become a Rider</p>
            <p>Rider Dashboard</p>
          </div>
          <div>
            <h5>For Riders</h5>
            <p>Submit Feedback</p>
            <p>Help Center</p>
            <p>Contact Us</p>
          </div>
           
        </div>
        <hr  />
        
        <div className="d-flex justify-content-between m-5">
            <div>  <p>© 2026 Cravings. All rights reserved.</p></div>
            <div className="d-flex gap-3">
                <p>Privacy Policy </p>
                <p>Terms of Service</p>
                <p>Site Map</p>
            </div>
        </div>
      
        <p></p>
      </div>
    </>
  );
}
export default Footer;
