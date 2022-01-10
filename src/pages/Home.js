import React from "react";
import { Link } from "react-router-dom";
import EventCard from "../components/Event/EventCard";
import { events } from "../dummy-event";
import MapContainer from "../components/MapContainer";
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
        <div className="col-md-6 my-3">
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
            src="https://i.picsum.photos/id/1084/536/354.jpg?grayscale&hmac=Ux7nzg19e1q35mlUVZjhCLxqkR30cC-CarVg-nlIf60"
            alt="uy"
          ></img>
        </div>
        <div className="col-md-6 my-3">
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
        <div className="col-md-6 my-3 maps">
          <h1>Drop Point Sampah</h1>
          <MapContainer />
        </div>
      </div>
      <div className="text-center">
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
      <div className="text-center my-5">
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
