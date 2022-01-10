import React from "react";
import EventCard from "../../components/Event/EventCard";
import EventNavbar from "../../components/Event/EventNavbar";
import Pagination from "../../components/Event/Pagination";
import TopEventCard from "../../components/Event/TopEventCard";

export default function LayoutEvents(props) {
  const { dataBlog, dataTop, page } = props;
  console.log(dataBlog);

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-9">
          <div className="container">
            <div className="row">
              <EventNavbar />
              {dataBlog.map((e) => (
                <div className="col-md-4 col-sm-6 my-3">
                  <EventCard
                    key={e.id}
                    id={e.id}
                    img={e.img}
                    title={e.judul}
                    content={e.content}
                    page={page}
                  />
                </div>
              ))}
              <div className="d-flex justify-content-center">
                <Pagination />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 d-md-block d-none">
          <h3>Trending</h3>
          {dataTop.map((e) => (
            <TopEventCard key={e.id} img={e.img} title={e.name} />
          ))}
        </div>
      </div>
    </div>
  );
}
