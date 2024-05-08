
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import ArticlesList from "./components/ArticlesList";
import Navbar from "./components/Navbar.js";
import NewArticle from "./components/NewArticleForm.js";
import FullArticle from "./views/FullArticle.js";

function App() {
  return (
    <div className="App">
      <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<ArticlesList />}></Route>
          <Route path="/articles/new" element={<NewArticle />} />
          <Route path="/articles/:id" element={<FullArticle />} />
        </Routes>
      </Router>
    </div>
      
    </div>
  );
}

export default App;
