import React from "react";
import { blog, topBlog } from "../dummy-blog";
import LayoutBlog from "./Layout/LayoutBlog";

export default function Blog() {
  return <LayoutBlog dataBlog={blog} dataTop={topBlog} page="blog" />;
}
