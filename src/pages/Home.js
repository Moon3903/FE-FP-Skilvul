import React from "react";
import { Link } from "react-router-dom";
import EventCard from "../components/Event/EventCard";
import { events } from "../dummy-event";
import MapContainer from "../components/MapContainer";
import "../assets/css/style.css";
import logo1 from "./../assets/img/mitra1.svg";
import logo2 from "./../assets/img/mitra2.svg";
import logo3 from "./../assets/img/mitra3.svg";
import logo4 from "./../assets/img/mitra4.svg";
import logo5 from "./../assets/img/mitra5.svg";
import logo6 from "./../assets/img/mitra6.svg";

export default function Home() {
  return (
    <div className="container my-5 text-start"> 
      <div className="row">
        <div className="col-md-6 my-3 home-styles" data-aos="fade-down" data-aos-duration="1000">
          <h1>
            Mari kelola sampah sisa makanan anda menjadi hal yang lebih
            bermanfaat kepada orang banyak  
          </h1>
          <Link className="btn btn-primary my-3" to="/blog/3">
            Pelajari Lebih Lanjut
          </Link>
        </div>
        <div className="col-md-6 my-3" data-aos="fade-down" data-aos-duration="2000">
          <img
            className="img-fluid"
            src="http://assets.kompasiana.com/items/album/2020/09/06/hidup-dan-perbuatan-capturehighered-com-5f5478c9d541df19580b22f2.jpg?t=o&v=770"
            alt="uy"
          ></img>
        </div>
        <div className="container mx-auto text-center w-75 my-3 home-style">
          <img src="https://images.unsplash.com/photo-1587132137056-bfbf0166836e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" className="w-50" data-aos="fade-down" data-aos-duration="1000"/>
          <h1 data-aos="fade-down" data-aos-duration="1000">Tahukah anda?</h1>
          <p data-aos="fade-down" data-aos-duration="1000">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
      <div className="text-center home-style">
        <h1 data-aos="fade-down" data-aos-duration="1000">Kampanye Lingkungan Terdekat</h1>
        <div className="container" data-aos="fade-down" data-aos-duration="1000">
          <div className="row" >
            {events.slice(3).map((e) => (
              <div className="col-md-4 my-3">
                <EventCard
                  key={e.id}
                  id={e.id}
                  img={e.img}
                  title={e.name}
                  content={e.content}
                />
              </div>
            ))}
          </div>
          <Link className="btn btn-primary my-3" to="/event">
            See More
          </Link>
        </div>
      </div>
      <div className="text-center my-5 home-style">
        <h1 data-aos="fade-down" data-aos-duration="1000">Mitra Kami</h1>
        <div className="container" data-aos="fade-down" data-aos-duration="1000">
          <div className="row justify-content-center">
            <div className="col my-3">
              <img src={logo1} />
            </div>
            <div className="col my-3">
              <img src={logo2} />
            </div>
            <div className="col my-3">
              <img src={logo3} />
            </div>
            <div className="col my-3">
              <img src={logo4} />
            </div>
            <div className="col my-3">
              <img src={logo5} />
            </div>
            <div className="col my-3">
              <img src={logo6} />
            </div>
          </div>
        </div>
      </div>
      <div>
      <div className="my-3 maps home-style text-center" data-aos="fade-down" data-aos-duration="1000">
          <h1 className="mb-5">Drop Point Sampah</h1>
          <MapContainer />
        </div>
      </div>
    </div>
  );
}