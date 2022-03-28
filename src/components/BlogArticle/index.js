import React from "react";
import "./style.css";

export function BlogArticle({ image, date, title }) {
  return (
    <div className="gpt3_blog-container-article">
      <div className="gpt3_blog-container-article-image">
        <img src={image} alt="blog_image" />
      </div>
      <div className="gpt3_blog-container-article-content">
        <div>
          <p>{date}</p>
          <h3> {title} </h3>
        </div>
        <p> Read Full Article </p>
      </div>
    </div>
  );
}
