import React from "react";
import { Link } from "react-router-dom";
import EventCard from "../components/Event/EventCard";
import { events } from "../dummy-event";
import MapContainer from "../components/MapContainer";
import "../assets/css/landingpage.css";
import logo1 from "./../assets/img/mitra1.svg";
import logo2 from "./../assets/img/mitra2.svg";
import logo3 from "./../assets/img/mitra3.svg";
import logo4 from "./../assets/img/mitra4.svg";
import logo5 from "./../assets/img/mitra5.svg";
import logo6 from "./../assets/img/mitra6.svg";

export default function Home() {
  return (
    //<div className="container-xxl mx-auto p-0  position-relative header-2-2">
    

    <div className="container-xxl mx-auto p-0  position-relative header-2-2">
        <nav className="navbar navbar-expand-lg navbar-light">
        <a href="#">
          <img style={{marginRight:10}}
            src="http://api.elements.buildwithangga.com/storage/files/2/assets/Header/Header2/Header-2-5.png" alt="" />
        </a>
        <button className="navbar-toggler border-0" type="button" data-bs-toggle="modal" data-bs-target="#targetModal-item">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="modal-item modal fade" id="targetModal-item" tabindex="-1" role="dialog"
          aria-labelledby="targetModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content bg-white border-0">
              <div className="modal-header border-0" style={{padding: 2, paddingBottom: 0}}>
                <a className="modal-title" id="targetModalLabel">
                  <img style={{marginTop: 0.5}}
                    src="http://api.elements.buildwithangga.com/storage/files/2/assets/Header/Header2/Header-2-5.png"
                    alt="" />
                </a>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body" style={{padding: 2, paddingTop: 0, paddingBottom: 0}}>
                <ul className="navbar-nav responsive me-auto mt-2 mt-lg-0">
                  <li className="nav-item active">
                    <a className="nav-link" href="#">Beranda</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Event</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Leaderboard</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Blog</a>
                  </li>
                </ul>
              </div>
              <div className="modal-footer border-0 gap-3" style={{padding: 2, paddingTop: 0.75}}>
                <button className="btn btn-fill text-white">Dashboard</button>
              </div>
            </div>
          </div>
        </div>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo">
          <ul className="navbar-nav me-auto mt-2 mt-lg-0">
          <li className="nav-item active">
                    <a className="nav-link" href="#">Beranda</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Event</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Leaderboard</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Blog</a>
                  </li>
          </ul>
          <div className="gap-3">
            <button className="btn btn-fill text-white">Try Now</button>
          </div>
        </div>
      </nav>
      {/* hero */}
      <div className="mx-auto d-flex flex-lg-row flex-column hero">
        <div
          className="left-column d-flex flex-lg-grow-1 flex-column align-items-lg-start text-lg-start align-items-center text-center">
          <p className="text-caption"> </p>
          <h6 className="title-text-big">
            Ayo kelola sampah sisa makanan kamu agar menjadi lebih bermanfaat
          </h6>
            <div className="d-flex flex-sm-row flex-column align-items-center mx-lg-0 mx-auto justify-content-center gap-3">
            <button className="btn d-inline-flex mb-md-0 btn-try text-white">
              Pelajari selengkapnya
            </button>
          </div>
        </div>
        <div className="right-column text-center d-flex justify-content-center pe-0">
          <img id="img-fluid" className="h-75 mw-100"
            src="https://cdn.pixabay.com/photo/2020/01/31/07/47/cartoon-4807369_960_720.jpg"
            alt="" />
        </div>
      </div>
      
      {/* content 1 */}
      <div className="content-2-2 container-xxl mx-auto p-0 position-relative">
      <div className="text-center title-text">
        <h1 className="text-title">3 Manfaat bergabung bersama kami</h1>
        <p className="text-caption" style={{marginLeft: 3, marginRight: 3}}>
          Berikut manfaat setelah ada ikut berpartisipasi bersama kami
        </p>
      </div>

      <div className="grid-padding text-center">
        <div className="row">
          <div className="col-lg-4 column">
            <div className="icon">
              <img src="http://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content2/Content-2-5.png"
                alt="" />
            </div>
            <h3 className="icon-title">Mengurangi Sampah</h3>
            <p className="icon-caption">
              Dengan berpartisipasi anda<br />
              membantu mengurangi sampah disekitar anda
            </p>
          </div>
          <div className="col-lg-4 column">
            <div className="icon">
              <img src="http://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content2/Content-2-6.png"
                alt="" />
            </div>
            <h3 className="icon-title">Menjadi Manfaat</h3>
            <p className="icon-caption">
              Sampah yang anda berikan<br />
              akan diolah menjadi hal bermanfaat
            </p>
          </div>
          <div className="col-lg-4 column">
            <div className="icon">
              <img src="http://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content2/Content-2-7.png"
                alt="" />
            </div>
            <h3 className="icon-title">No Global Warming</h3>
            <p className="icon-caption">
              Setelah anda berpartisipasi<br />
              anda telah membantu dunia melawan pemanasan global
            </p>
          </div>
        </div>
      </div>
      
      <div className="card-block">
        <div className="card">
          <div className="d-flex flex-lg-row flex-column align-items-center">
            <div className="me-lg-3">
              <img
                src="http://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content2/Content-2-1%20(1).png"
                alt="" />
            </div>
            <div className="flex-grow-1 text-lg-start text-center card-text">
              <h3 className="card-title">
                Mari bergabung bersama partisipan lainnya
              </h3>
              <p className="card-caption">
                Ratusan partisipan telah bergabung dan menerima manfaat
                ayo bergabung sekarang!<br className="d-none d-lg-block" />
              </p>
            </div>
            <div className="card-btn-space">
              <button className="btn btn-card text-white">Drop Point</button>
              <button className="btn btn-outline">Hubungi Kami</button>
            </div>
          </div>
        </div>
      </div>
    </div>

      {/* content 2 */}
      <div className="content-3-7 overflow-hidden container-xxl mx-auto position-relative">
      <div className="container mx-auto">
        <div className="d-flex flex-column text-center w-100" style={{marginBottom: 2.25}}>
          <h2 className="title-text">Kampanye lingkungan terdekat</h2>
          <p className="caption-text mx-auto">
            Beberapa kampanye lingkungan yang tersedia<br />
            Kamu bisa mengajukan kegiatan kampanye melalui admin di drop point
          </p>
        </div>
        <div className="d-flex flex-wrap">
          <div className="mx-auto card-item position-relative">
            <div className="card-item-outline bg-white d-flex flex-column position-relative overflow-hidden h-100">
              <h2 className="price-title">Startup</h2>
              <h2 className="price-value d-flex align-items-center">
                <span>$29</span>
                <span className="price-duration">/Month</span>
              </h2>
              <p className="price-caption">
                Suitable for those of you<br />
                who are beginners
              </p>
              <div className="price-list">
                <p className="d-flex align-items-center check">
                  <span className="span-icon d-inline-flex align-items-center justify-content-center flex-shrink-0">
                    <img className="img-fluid"
                      src="http://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content3/Content-3-4.png"
                      alt="" /> </span>Chat Support
                </p>
                <p className="d-flex align-items-center check">
                  <span className="span-icon d-inline-flex align-items-center justify-content-center flex-shrink-0">
                    <img className="img-fluid"
                      src="http://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content3/Content-3-4.png"
                      alt="" /> </span>Optimize Projects
                </p>
                <p className="d-flex align-items-center no-check">
                  <span className="span-icon d-inline-flex align-items-center justify-content-center flex-shrink-0">
                    <img className="img-fluid"
                      src="http://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content3/Content-3-3.png"
                      alt="" /> </span>300+ Unique Project
                </p>
                <p className="d-flex align-items-center no-check">
                  <span className="span-icon d-inline-flex align-items-center justify-content-center flex-shrink-0">
                    <img className="img-fluid"
                      src="http://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content3/Content-3-3.png"
                      alt="" /> </span>Own Analytics Platform
                </p>
                <p className="d-flex align-items-center no-check">
                  <span className="span-icon d-inline-flex align-items-center justify-content-center flex-shrink-0">
                    <img className="img-fluid"
                      src="http://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content3/Content-3-3.png"
                      alt="" /> </span>Unlimited User
                </p>
              </div>
              <button className="btn btn-outline d-flex justify-content-center align-items-center w-100">
                Choose Plan
              </button>
            </div>
          </div>
          <div className="mx-auto card-item position-relative">
            <div className="card-item-outline bg-white d-flex flex-column position-relative overflow-hidden h-100">
              <h2 className="price-title">Steady</h2>
              <h2 className="price-value d-flex align-items-center">
                <span>$49</span>
                <span className="price-duration">/Month</span>
              </h2>
              <p className="price-caption">
                Suitable for those of you<br />
                who want to grow
              </p>
              <div className="price-list">
                <p className="d-flex align-items-center check">
                  <span className="span-icon d-inline-flex align-items-center justify-content-center flex-shrink-0">
                    <img className="img-fluid"
                      src="http://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content3/Content-3-4.png"
                      alt="" /> </span>Chat Support
                </p>
                <p className="d-flex align-items-center check">
                  <span className="span-icon d-inline-flex align-items-center justify-content-center flex-shrink-0">
                    <img className="img-fluid"
                      src="http://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content3/Content-3-4.png"
                      alt="" /> </span>Optimize Projects
                </p>
                <p className="d-flex align-items-center check">
                  <span className="span-icon d-inline-flex align-items-center justify-content-center flex-shrink-0">
                    <img className="img-fluid"
                      src="http://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content3/Content-3-4.png"
                      alt="" /> </span>300+ Unique Project
                </p>
                <p className="d-flex align-items-center no-check">
                  <span className="span-icon d-inline-flex align-items-center justify-content-center flex-shrink-0">
                    <img className="img-fluid"
                      src="http://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content3/Content-3-3.png"
                      alt="" /> </span>Own Analytics Platform
                </p>
                <p className="d-flex align-items-center no-check">
                  <span className="span-icon d-inline-flex align-items-center justify-content-center flex-shrink-0">
                    <img className="img-fluid"
                      src="http://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content3/Content-3-3.png"
                      alt="" /> </span>Unlimited User
                </p>
              </div>
              <button className="btn btn-outline d-flex justify-content-center align-items-center w-100">
                Choose Plan
              </button>
            </div>
          </div>
          <div className="mx-auto card-item position-relative">
            <div className="card-item-outline d-flex flex-column position-relative overflow-hidden h-100">
              <h2 className="price-title text-white">Enterprise</h2>
              <h2 className="price-value d-flex align-items-center text-white">
                <span>$99</span>
                <span className="price-duration" >/Month</span>
              </h2>
              <p className="price-caption" >
                Suitable to make your<br />
                company grow rapidly
              </p>
              <div className="price-list">
                <p className="d-flex align-items-center check text-white">
                  <span className="span-icon d-inline-flex align-items-center justify-content-center flex-shrink-0">
                    <img className="img-fluid"
                      src="http://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content3/Content-3-6.png"
                      alt="" /> </span>Chat Support
                </p>
                <p className="d-flex align-items-center check text-white">
                  <span className="span-icon d-inline-flex align-items-center justify-content-center flex-shrink-0">
                    <img className="img-fluid"
                      src="http://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content3/Content-3-6.png"
                      alt="" /> </span>Optimize Projects
                </p>
                <p className="d-flex align-items-center check text-white">
                  <span className="span-icon d-inline-flex align-items-center justify-content-center flex-shrink-0">
                    <img className="img-fluid"
                      src="http://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content3/Content-3-6.png"
                      alt="" /> </span>300+ Unique Project
                </p>
                <p className="d-flex align-items-center check text-white">
                  <span className="span-icon d-inline-flex align-items-center justify-content-center flex-shrink-0">
                    <img className="img-fluid"
                      src="http://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content3/Content-3-6.png"
                      alt="" /> </span>Own Analytics Platform
                </p>
                <p className="d-flex align-items-center check text-white">
                  <span className="span-icon d-inline-flex align-items-center justify-content-center flex-shrink-0">
                    <img className="img-fluid"
                      src="http://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content3/Content-3-6.png"
                      alt="" /> </span>Unlimited User
                </p>
              </div>
              <button className="btn btn-fill text-white d-flex justify-content-center align-items-center w-100">
                Choose Plan
              </button>
            </div>
          </div>
        </div>
        </div>
      </div>
      


    </div>
    );
  }
    
    

    //</div>

    
    // <div classNameName="container my-5 text-start">
    //   <div classNameName="row">
    //     <div classNameName="col-md-6 my-3 home-styles">
    //       <h1>
    //         Mari kelola sampah sisa makanan anda menjadi hal yang lebih
    //         bermanfaat kepada orang banyak
    //       </h1>
    //       <Link classNameName="btn btn-primary my-3" to="/blog/3">
    //         Pelajari Lebih Lanjut
    //       </Link>
    //     </div>
    //     <div classNameName="col-md-6 my-3">
    //       <img
    //         classNameName="img-fluid"
    //         src="http://assets.kompasiana.com/items/album/2020/09/06/hidup-dan-perbuatan-capturehighered-com-5f5478c9d541df19580b22f2.jpg?t=o&v=770"
    //         alt="uy"
    //       ></img>
    //     </div>
    //     <div classNameName="text-center my-3 home-style">
    //       <h1>Bagaimana Selanjutnya?</h1>
    //       <p>
    //         Siti Nurbaya, selaku Menteri Lingkungan Hidup dan Kehutanan Republik
    //         Indonesia mencantumkan bahwa Peraturan Menteri no. 14 Tahun 2021
    //         tentang Pengelolaan Sampah pada Bank Sampah pada 25 Juni 2021 adalah
    //         untuk menyempurnakan Peraturan Menteri LHK No. 13 Tahun 2012
    //         mengenai Pedoman Pelaksanaan Reduce, Reuse, dan Recycle Melalui Bank
    //         Sampah. Permen no. 14 Tahun 2021 ini memasukkan fungsi bank sampah
    //         sebagai media edukasi, perubahan perilaku, dan menekankan pada
    //         implementasi circular economy. Pada permen ini juga disertakan skema
    //         pendanaan untuk pemberdayaan Bank Sampah baik oleh pemerintah pusat,
    //         daerah, maupun swasta yang belum ada di Permen sebelumnya.
    //       </p>
    //     </div>
    //   </div>
    //   <div classNameName="text-center home-style">
    //     <h1>Kampenye Lingkungan Terdekat</h1>
    //     <div classNameName="container">
    //       <div classNameName="row">
    //         {events.slice(3).map((e) => (
    //           <div classNameName="col-md-4 my-3">
    //             <EventCard
    //               key={e.id}
    //               id={e.id}
    //               img={e.img}
    //               title={e.name}
    //               content={e.content}
    //             />
    //           </div>
    //         ))}
    //       </div>
    //       <Link classNameName="btn btn-primary my-3" to="/event">
    //         See More
    //       </Link>
    //     </div>
    //   </div>
    //   <div classNameName="text-center my-5 home-style">
    //     <h1>Mitra Kami</h1>
    //     <div classNameName="container">
    //       <div classNameName="row justify-content-center">
    //         <div classNameName="col my-3">
    //           <img src={logo1} />
    //         </div>
    //         <div classNameName="col my-3">
    //           <img src={logo2} />
    //         </div>
    //         <div classNameName="col my-3">
    //           <img src={logo3} />
    //         </div>
    //         <div classNameName="col my-3">
    //           <img src={logo4} />
    //         </div>
    //         <div classNameName="col my-3">
    //           <img src={logo5} />
    //         </div>
    //         <div classNameName="col my-3">
    //           <img src={logo6} />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div>
    //     <div classNameName="my-3 maps home-style">
    //       <h1>Drop Point Sampah</h1>
    //       <MapContainer />
    //     </div>
    //   </div>
    // </div>
//   );
// }
