import React from "react";
import { Link } from "react-router-dom";

export default function BlogCard() {
  return (
    <div className="blog-card bg-light p-20">
      <div className="card-image">
        <img src="/images/blog-1.jpg" className="img-fluid w-100" alt="" />
      </div>
      <div className="blog-content">
        <p className="date">1 Dec, 2023</p>
        <h5 className="title">A Beautiful Sunday Morning Renissans</h5>
        <p className="desc">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          est, illum, praesentium ullam similique soluta eligendi
        </p>

        <Link className="button" to="/blog/:id">
          Read More
        </Link>
      </div>
    </div>
  );
}
