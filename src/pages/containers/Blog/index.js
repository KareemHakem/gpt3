import React from "react";
import { BlogArticle } from "../../../components/BlogArticle";
import {
  blog01,
  blog02,
  blog03,
  blog04,
  blog05,
} from "../../../components/BlogArticle/import.js";
import "./style.css";

function Blog() {
  return (
    <div className="gpt3_blog section_padding" id="blog">
      <div className="gpt3_blog-header">
        <h1 className="gradient_text">
          A lot is happening, We are blogging about it.
        </h1>
      </div>
      <div className="gpt3_blog-container">
        <div className="gpt3_blog-container-groupA">
          <BlogArticle
            image={blog01}
            date="sep 26, 2021"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
        </div>
        <div className="gpt3_blog-container-groupB">
          <BlogArticle
            image={blog02}
            date="sep 26, 2021"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
          <BlogArticle
            image={blog03}
            date="sep 26, 2021"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
          <BlogArticle
            image={blog04}
            date="sep 26, 2021"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
          <BlogArticle
            image={blog05}
            date="sep 26, 2021"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
        </div>
      </div>
    </div>
  );
}

export default Blog;
