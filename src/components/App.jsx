import React from "react";
import blogData from "../data/blog";
import About from "./About";
import ArticleList from "./ArticleList";
import Header from "./Header";

console.log(blogData);

function App({}) {
  const posts = [
    {
      id: 1,
      title: "First Post",
      date: "April 29, 2026",
      preview: "This is my first post"
    }
  ]
  return (
     <div>
      <Header name="My Blog" />
      <About about="A blog about React." />
      <ArticleList posts={posts} />
    </div>
  );
}

export default App;
