import React from "react";
import { useParams } from "react-router";
import parse from "html-react-parser";
import EventCard from "../components/Event/EventCard";
import axios from "axios";
import { useState, useEffect } from "react";

export default function BlogDetail() {
  const { id } = useParams();
  const [aktifBlog, setAktifBlog] = useState({});
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    getBlog();
    getBlogs();
  }, []);

  const getBlog = async () => {
    const res = await axios.get("https://be-nawaste.herokuapp.com/blog/" + id);
    setAktifBlog(res.data.result);
    console.log("debug", res.data);
  };

  const getBlogs = async () => {
    const res = await axios.get("https://be-nawaste.herokuapp.com/blog");
    setBlogs((res.data.result || []).slice(0, 2));
    console.log("debug", res.data);
  };
  return (
    <div className="container my-5">
      <h1 className="text-center">{aktifBlog.title}</h1>
      <h2 className="text-center">{aktifBlog.description}</h2>
      <img className="img-fluid" src={aktifBlog.thumbnail} alt="some" />
      <div className="text-start">{parse(aktifBlog.content || "")}</div>
      <div className="d-flex justify-content-between">
        <div className="text-uppercase">
          By
          <span className="fw-bold"> {aktifBlog.userId} </span>
        </div>
        <div>
          <span className="fw-bold"> {aktifBlog.tanggal}</span>
        </div>
      </div>
      <div className="row">
        {(blogs || []).map((e, index) => {
          return (
            <div key={index} className="col-md-4 col-sm-6 my-3">
              <EventCard
                key={e.id}
                id={e.id}
                img={e.thumbnail}
                title={e.judul}
                content={e.content}
                page="blog"
              />
            </div>
          );
        })}
        ;
      </div>
    </div>
  );
}
