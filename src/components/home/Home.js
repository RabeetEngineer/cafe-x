import React from "react";
import { popularDishes } from "../../Data";
import DateTimePicker from "react-datetime-picker";
import "react-datetime-picker/dist/DateTimePicker.css";
import { useState, useEffect, useRef } from "react";
import "react-datetime-picker/dist/DateTimePicker.css";
import "react-calendar/dist/Calendar.css";
import "react-clock/dist/Clock.css";
import "./Home.css";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";

const Home = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const timeOptions = [
    "12:00 AM",
    "12:15 AM",
    "12:30 AM",
    "12:45 AM",
    "01:00 AM",
    "01:15 AM",
    "01:30 AM",
    "01:45 AM",
    "02:00 AM",
    "02:15 AM",
    "02:30 AM",
    "02:45 AM",
    "03:00 AM",
    "03:15 AM",
    "03:30 AM",
    "03:45 AM",
    "04:00 AM",
    "04:15 AM",
    "04:30 AM",
    "04:45 AM",
    "05:00 AM",
    "05:15 AM",
    "05:30 AM",
    "05:45 AM",
    "06:00 AM",
    "06:15 AM",
    "06:30 AM",
    "06:45 AM",
    "07:00 AM",
    "07:15 AM",
    "07:30 AM",
    "07:45 AM",
    "08:00 AM",
    "08:15 AM",
    "08:30 AM",
    "08:45 AM",
    "09:00 AM",
    "09:15 AM",
    "09:30 AM",
    "09:45 AM",
    "10:00 AM",
    "10:15 AM",
    "10:30 AM",
    "10:45 AM",
    "11:00 AM",
    "11:15 AM",
    "11:30 AM",
    "11:45 AM",
    "12:00 PM",
    "12:15 PM",
    "12:30 PM",
    "12:45 PM",
    "01:00 PM",
    "01:15 PM",
    "01:30 PM",
    "01:45 PM",
    "02:00 PM",
    "02:15 PM",
    "02:30 PM",
    "02:45 PM",
    "03:00 PM",
    "03:15 PM",
    "03:30 PM",
    "03:45 PM",
    "04:00 PM",
    "04:15 PM",
    "04:30 PM",
    "04:45 PM",
    "05:00 PM",
    "05:15 PM",
    "05:30 PM",
    "05:45 PM",
    "06:00 PM",
    "06:15 PM",
    "06:30 PM",
    "06:45 PM",
    "07:00 PM",
    "07:15 PM",
    "07:30 PM",
    "07:45 PM",
    "08:00 PM",
    "08:15 PM",
    "08:30 PM",
    "08:45 PM",
    "09:00 PM",
    "09:15 PM",
    "09:30 PM",
    "09:45 PM",
    "10:00 PM",
    "10:15 PM",
    "10:30 PM",
    "10:45 PM",
    "11:00 PM",
    "11:15 PM",
    "11:30 PM",
    "11:45 PM",
  ];

  const [selectedTime, setSelectedTime] = useState(""); // Initialize with an empty string

  // Function to handle time selection
  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
  };

  const [videoKey, setVideoKey] = useState(1);

  // Function to increment the key when the video should restart
  const restartVideo = () => {
    setVideoKey((prevKey) => prevKey + 1);
  };

  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      // Start the video when the component mounts
      videoRef.current.seekTo(0);
      const player = videoRef.current.getInternalPlayer();
      if (player) {
        player.play();
      }
    }
  }, []);
  return (
    <>
      <div className="container-fluid">
        {/*Main Hero Sections 

        <div class="row">
          <div class="col-12">
            <div class="image-container position-relative">
              <img
                src="/images/banners hero section.gif"
                class="img-fluid"
                alt="Responsive image"
              />
              <div class="text-overlay d-flex flex-column justify-content-center align-items-center">
                <h2 class="text-white mb-3">Cafe-X</h2>
                <p class="text-white">
                  A genuine fine-dining experience awaits.
                </p>
              </div>
            </div>
          </div>
        </div>

  */}

   {/*Carousels */}
   <div
   id="myCarousel"
   class="carousel slide mb-6"
   data-bs-ride="carousel"
 >
   <div class="carousel-indicators">
     <button
       type="button"
       data-bs-target="#myCarousel"
       data-bs-slide-to="0"
       class="active"
       aria-label="Slide 1"
       aria-current="true"
     ></button>
     <button
       type="button"
       data-bs-target="#myCarousel"
       data-bs-slide-to="1"
       aria-label="Slide 2"
       class=""
     ></button>
     <button
       type="button"
       data-bs-target="#myCarousel"
       data-bs-slide-to="2"
       aria-label="Slide 3"
       class=""
     ></button>
   </div>
   <div class="carousel-inner">
     <div class="carousel-item active" data-bs-interval="2000">
       <img
         src="/images/banner-4.jpg"
         alt=""
         style={{ width: "100%" }}
       />
       <div class="container">
         <div class="carousel-caption text-start">
           <h4>A genuine fine-dining experience awaits..</h4>
         </div>
       </div>
     </div>
     <div class="carousel-item " data-bs-interval="3000">
       <img
         src="/images/banner-2.jpeg"
         alt=""
         style={{ width: "100%" }}
       />
       <div class="carousel-caption text-start">
         <h1>Prestigeous DINING.</h1>
         <p>
           <a class="btn btn-lg btn-dark" href="#">
             Order Now
           </a>
         </p>
       </div>
     </div>
     <div class="carousel-item image-container" data-bs-interval="2000">
       <img
         src="/images/banner-3.jpeg"
         alt=""
         style={{ width: "100%" }}
       />
       <div class="container">
         <div class="carousel-caption tex-center">
           <h1>Flavors for Royalty.</h1>
           <p>
             Some representative placeholder content for the third slide
             of this carousel.
           </p>
         
         </div>
       </div>
     </div>
   </div>
   <button
     class="carousel-control-prev"
     type="button"
     data-bs-target="#myCarousel"
     data-bs-slide="prev"
   >
     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
     <span class="visually-hidden">Previous</span>
   </button>
   <button
     class="carousel-control-next"
     type="button"
     data-bs-target="#myCarousel"
     data-bs-slide="next"
   >
     <span class="carousel-control-next-icon" aria-hidden="true"></span>
     <span class="visually-hidden">Next</span>
   </button>
 </div>

        {/*Top Dishes */}
        <div className="container">
          <h1 className="text-center mt-5 mb-3">POPULAR DISHES</h1>
          <div className="row">
            {popularDishes.map((popularDish) => (
              <div className="col-lg-4 col-md-4 col-sm-12 text-center">
                <Link className="anchor-null" to={`/${popularDish.id}`}>
                  <img src={popularDish.img} alt="" />

                  <h4 className="mt-3">{popularDish.title}</h4>
                  <h6>Rs. {popularDish.price}</h6>
                </Link>
              </div>
            ))}
          </div>
          <div className="row mt-5 mb-5">
            <div className="col-12 text-center">
              <Link to={"/menu"}>
                <button className="btn btn-dark">All Products</button>
              </Link>
            </div>
          </div>
        </div>

        {/*Book Your Table */}
        <div class="container my-5">
          <div class="row justify-content-center ">
            <div class="col-lg-9">
              <h1 class="mb-3 text-center mb-5">Book Your Table</h1>
              <form className="">
                <div class="row g-3 ">
                  <div class="col-md-6">
                    <label for="your-name" class="form-label ">
                      Your Name
                    </label>
                    <input
                      type="text"
                      class="form-control "
                      id="your-name"
                      name="your-name"
                      required
                    />
                  </div>
                  <div class="col-md-6">
                    <label for="your-surname" class="form-label">
                      Your Email
                    </label>
                    <input
                      type="email"
                      class="form-control "
                      id="email"
                      name="email"
                      required
                    />
                  </div>
                  <div class="col-md-6">
                    <label for="your-email" class="form-label">
                      Your Contact
                    </label>
                    <input
                      type="tel"
                      pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                      class="form-control "
                      id="your-email"
                      name="your-email"
                      required
                    />
                  </div>
                  <div class=" col-md-6">
                    <label for="inputBranch" className="form-label">
                      Branch
                    </label>
                    <select id="inputBranch" class="form-select ">
                      <option selected>Gulberg</option>
                      <option>Johar Town</option>
                      <option>Raiwand</option>
                    </select>
                  </div>
                  <div className="col-6">
                    <label htmlFor="your-message" className="form-label">
                      Date
                    </label>

                    <div className="input-group">
                      <DateTimePicker
                        onChange={setSelectedDate}
                        value={selectedDate}
                        format="dd-MM-y"
                        className="date-picker  form-control" // Apply the custom CSS class
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <label htmlFor="your-message" className="form-label">
                      Time
                    </label>
                    <div className="input-group">
                      <select
                        className="form-select"
                        value={selectedTime}
                        onChange={handleTimeChange}
                      >
                        <option value="">Select a time</option>
                        {timeOptions.map((time, index) => (
                          <option key={index} value={time}>
                            {time}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div class=" col-md-6">
                    <label for="inputBranch" className="form-label">
                      No of Guests
                    </label>
                    <select id="inputBranch" class="form-select ">
                      <option selected>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>6</option>
                    </select>
                  </div>
                  <div class="col-12">
                    <div class="row">
                      <div class="col-md-6">
                        <button
                          type="submit"
                          class="btn btn-dark mt-3 w-50 fw-bold"
                        >
                          Book Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <hr className="mt-5 mb-5" />

        <footer>
          <div className="container"></div>
        </footer>
      </div>
    </>
  );
};

export default Home;
