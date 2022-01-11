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
        <div className="col-md-6 my-3 home-styles">
          <h1>
            Mari kelola sampah sisa makanan anda menjadi hal yang lebih
            bermanfaat kepada orang banyak
          </h1>
          <Link className="btn btn-primary my-3" to="/blog/3">
            Pelajari Lebih Lanjut
          </Link>
        </div>
        <div className="col-md-6 my-3">
          <img
            className="img-fluid"
            src="http://assets.kompasiana.com/items/album/2020/09/06/hidup-dan-perbuatan-capturehighered-com-5f5478c9d541df19580b22f2.jpg?t=o&v=770"
            alt="uy"
          ></img>
        </div>
        <div className="col-md-6 my-3 home-style">
          <h1>Bagaimana Selanjutnya?</h1>
          <p>
            Siti Nurbaya, selaku Menteri Lingkungan Hidup dan Kehutanan Republik
            Indonesia mencantumkan bahwa Peraturan Menteri no. 14 Tahun 2021
            tentang Pengelolaan Sampah pada Bank Sampah pada 25 Juni 2021 adalah
            untuk menyempurnakan Peraturan Menteri LHK No. 13 Tahun 2012
            mengenai Pedoman Pelaksanaan Reduce, Reuse, dan Recycle Melalui Bank
            Sampah. Permen no. 14 Tahun 2021 ini memasukkan fungsi bank sampah
            sebagai media edukasi, perubahan perilaku, dan menekankan pada
            implementasi circular economy. Pada permen ini juga disertakan skema
            pendanaan untuk pemberdayaan Bank Sampah baik oleh pemerintah pusat,
            daerah, maupun swasta yang belum ada di Permen sebelumnya.
          </p>
        </div>
        <div className="col-md-6 my-3 maps home-style">
          <h1>Drop Point Sampah</h1>
          <MapContainer />
        </div>
      </div>
      <div className="text-center home-style">
        <h1>Kampenye Lingkungan Terdekat</h1>
        <div className="container">
          <div className="row">
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
        <h1>Mitra Kami</h1>
        <div className="container">
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
    </div>
  );
}
