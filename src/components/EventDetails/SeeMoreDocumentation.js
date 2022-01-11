import { useParams } from "react-router";
import React, { useEffect, useState } from "react";
import CardImageGallery from ".././CardImageGallery";
import { GET_LIST_POST } from "../../services/JsonPlaceholderService";

export default function SeeMoreDocumentation() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    let mounted = true;
    GET_LIST_POST().then((items) => {
      if (mounted) {
        setPost(items);
      }
    });
    return () => (mounted = false);
  }, []);

  const { id } = useParams();
  return (
    <>
      <div className="jumbotron">
        <h2>All Documentation in Event {id}</h2>
      </div>
      <div className="row g-3">
        {post.map((u) => (
          <CardImageGallery />
        ))}
      </div>
    </>
  );
}
