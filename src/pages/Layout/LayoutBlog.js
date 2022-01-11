import React from "react";
import BlogCard from "../../components/Blog/BlogCard";
import BlogNavbar from "../../components/Blog/BlogNavbar";
import Pagination from "../../components/Blog/Pagination";
import TopBlogCard from "../../components/Blog/TopBlogCard";
import axios from "axios";
import { useState, useEffect } from "react";

export default function LayooutBlog(props) {
  // console.log(dataBlog);
  const [blogs, setBlogs, page] = useState([]);

  useEffect(() => {
    getBlogs();
  }, []);

  const getBlogs = async () => {
    const res = await axios.get("https://be-nawaste.herokuapp.com/blog");
    setBlogs(res.data.result);
    console.log("debug", res.data);
  };

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-9">
          <div className="container">
            <div className="row">
              <BlogNavbar />
              {(blogs ?? []).map((e) => (
                <div className="col-md-4 col-sm-6 my-3" key={e.id} value={e.id}>
                  <BlogCard
                    id={e.id}
                    img={e.thumbnail}
                    title={e.title}
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
          {(blogs ?? []).map((e) => (
            <TopBlogCard key={e.id} img={e.thumbnail} title={e.title} />
          ))}
        </div>
      </div>
    </div>
  );
}
