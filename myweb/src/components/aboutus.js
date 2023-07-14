const About = () => {
    return (
      <>
        <div className="container">
          <img
            src="https://www.traveltoindia.org/images/banner/about-us.jpg"
            class="img-fluid"
            alt="..."
          ></img>
          <h1 style={{fontFamily:"cursive",color:"Orange",textAlign:"center"}}>About Us</h1>
          <div id="accordion">
            <div className="card">
              <div
                className="card-header"
                id="headingOne"
                style={{ backgroundColor: "#FFA500" }}
              >
                <h5 >Travel India</h5>
              </div>
              <div
                id="collapseOne"
                className="collapse show"
                aria-labelledby="headingOne"
                data-parent="#accordion"
              >
                <div className="card-body">
                  <p style={{fontFamily:"sans-serif",lineHeight:"2",fontSize:"18px"}}>
                    Travel To India is one of the leading tour operators in India
                    offering domestic and inbound tour services with
                    transportation. With more than a decade of expertise in travel
                    industry, we are committed to offer best assistance and
                    experience to our visitors. Founded in 2011, we have created
                    thousands of travel experiences with well-crafted India
                    Holiday Tour Packages for different groups arriving India to
                    explore its culture and uniqueness. The company with its
                    professionally managed trip plans and itineraries specializes
                    primarily in organizing Adventure tour, Cultural tour,
                    Pilgrimage tour in India, Hill station tour, Romantic tour &
                    Wildlife adventure tour through a wide spread network of
                    services and facilities across India.<br></br> We offer 24 X 7 hours
                    services that include travel planning, customized holiday
                    packages, itinerary design, hotel bookings and transport
                    facilities as per your demand and budget. For personalized
                    family holidays, you can book from our extensive car fleet
                    while for a small group, we offer Tempo Traveller Rental Delhi
                    to give you premium service of Airport Pick up and drop, city
                    tour or outstation trips. For Corporate tour or seminars, hire
                    a bus on rent. We feel proud to announce our most luxurious
                    road trip services with Luxury van and campervans which are
                    modified to offer homely feeling while travelling.
                  </p>
                </div>
              </div>
            </div>
            <div className="card">
              <div
                className="card-header"
                id="headingTwo"
                style={{ backgroundColor: "#FFA500" }}
              >
                <h5 className="mb-0">Adress</h5>
              </div>
              <div className="card-body">
                <ul>
                  <li>123 Main Street</li>
                  <li>City, State ZIP</li>
                </ul>
              </div>
            </div>
            <div className="card">
              <div
                className="card-header"
                id="headingFour"
                style={{ backgroundColor: "#FFA500" }}
              >
                <h5 className="mb-0">Contact Details</h5>
              </div>
              <div className="card-body">
                <li>Phone:+91 8563258966</li>
                <li>E-Mail:travel.india@gmail.com</li>
              </div>
            </div>
          </div>
        </div>
        <footer class="bg-light pb-5">
          <div class="container text-center">
            <div>
              <div>Contact US</div>
              <div>Phone:+91 8563258966</div>
              <div>E-Mail:travel.india@gmail.com</div>
            </div>
            <p class="font-italic text-muted mb-0">
              &copy; Copyrights Travel_Inida.com All rights reserved.
            </p>
          </div>
        </footer>
      </>
    );
  };
  
  export default About;
  