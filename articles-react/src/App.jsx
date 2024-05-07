
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import ArticlesList from "./components/ArticlesList";
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import NewArticle from "./components/NewArticle.jsx";
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
        <Footer />
      </Router>
    </div>
      <ArticlesList />
    </div>
  );
}

export default App;
