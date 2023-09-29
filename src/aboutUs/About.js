import React, { useState } from "react";
import "./About.css";
import ReactPlayer from "react-player";

const About = () => {
  const [videoKey, setVideoKey] = useState(0);

  // Function to increment the key when the video should restart
  const restartVideo = () => {
    setVideoKey((prevKey) => prevKey + 1);
  };

  const StoryCard = ({ date, title, description }) => (
    <div className="story-card">
      <div className="card-header">
        <div className="card-date">{date}</div>
      </div>
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );

  return (
    <>
      <div className="container-fluid">
        <div className="hero-section">
          {/* Carousels */}
          <div
            id="myCarousel"
            className="carousel slide mb-6"
            data-bs-ride="carousel"
            onSlide={restartVideo}
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#myCarousel"
                data-bs-slide-to="0"
                className="active"
                aria-label="Slide 1"
                aria-current="true"
              ></button>
              <button
                type="button"
                data-bs-target="#myCarousel"
                data-bs-slide-to="1"
                aria-label="Slide 2"
                className=""
              ></button>
              <button
                type="button"
                data-bs-target="#myCarousel"
                data-bs-slide-to="2"
                aria-label="Slide 3"
                className=""
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="4000">
                {/* Use ReactPlayer to render the video */}
                <ReactPlayer
                  style={{
                    width: "100%",
                    height: "300px",
                    filter: "brightness(100%)",
                  }}
                  key={videoKey}
                  url="/images/menu/Hero-video.mp4"
                  controls
                  width="100%"
                  playing
                  loop
                />
              </div>

              <div className="carousel-item" data-bs-interval="6000">
                <img
                  src="/images/menu/Hero-pic.gif"
                  alt=""
                  style={{ width: "100%", height: "400px" }}
                />
                <div className="carousel-caption text-start">
                  <h1>Prestigeous DINING.</h1>
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="2000">
                <img
                  src="/images/banner-3.jpeg"
                  alt=""
                  style={{ width: "100%", height: "400px" }}
                />
                <div className="container">
                  <div className="carousel-caption text-end">
                    <h1>Flavors for Royalty.</h1>
                    <p>
                      Some representative placeholder content for the third
                      slide of this carousel.
                    </p>
                    <p>
                      <a className="btn btn-lg btn-dark" href="#">
                        Browse Menu
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        {/* Our Journey Section */}
        <div className="container">
          <div className="about-us">
            <section className="story-section">
              <div className="section-title">
                <h2 className="section-heading mt-5">Our Journey</h2>
                <p className="section-subtitle">
                  Discover the story of our restaurant
                </p>
              </div>

              <div className="timeline">
                <StoryCard
                  date="2005"
                  title="Inception"
                  description="It all began in 2005 when our founder, John Smith, had a vision to create a culinary experience that would delight the senses. With a passion for fine dining and a dream to bring people together through exceptional food, he opened the doors to our restaurant."
                />

                <StoryCard
                  date="2010"
                  title="Growth and Expansion"
                  description="Over the years, we've grown and expanded, continually striving for culinary excellence. Our commitment to sourcing the finest ingredients and creating innovative dishes has earned us a reputation as a destination for food lovers."
                />

                <StoryCard
                  date="2018"
                  title="Awards and Recognition"
                  description="In 2018, our dedication to quality was recognized with several prestigious awards. We received the 'Best Fine Dining Restaurant' award from Food & Wine Magazine and the 'Chef's Choice' award from the Culinary Excellence Association."
                />
              </div>
            </section>
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="container">
          <div className="section-title">
            <h2 className="section-heading mt-5">Testimonials</h2>
            <p className="section-subtitle">What our Client Says</p>
          </div>
          <section className="testimonial-section">
            <div className="testimonial-card">
              <img
                className="testimonial-image"
                src="/images/rabeet-pic.jpg"
                alt="Testimonial 1"
              />
              <div className="testimonial-content">
                <p className="testimonial-text">
                  "WOW!!! What an outstanding dinner you prepared at the Cafe-X
                  on Friday evening!!! The food, service, ambience and more was
                  all superb!!! On behalf of us all, fight on!
                </p>
                <p className="testimonial-author">- Hafiz Rabeet</p>
              </div>
            </div>

            <div className="testimonial-card">
              <img
                className="testimonial-image"
                src="/images/testimonial.png"
                alt="Testimonial 2"
              />
              <div className="testimonial-content">
                <p className="testimonial-text">
                  "As expected, the food was delicious and our servers were so
                  friendly and helpful – we loved them! It was a delightful
                  experience all round.."
                </p>
                <p className="testimonial-author">- Jane Smith</p>
              </div>
            </div>

            {/* Add more testimonial cards as needed */}
          </section>
        </div>
      </div>
    </>
  );
};

export default About;
