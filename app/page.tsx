"use client";
import React, { useState } from "react";
import "./page.css";
import Authors from './components/authors';
import Header from './components/header';


export default function Home() {
  const handleClick = () => {
    // implementation details
  };

  return (
    <div>
      <div className="app items-center justify-items-center gap-16 sm:p-20">
          <h1 className="title"> Fact Checkmate: Preemptively Detecting and Mitigating Hallucinations in LMs </h1>
          <Authors/>
          <button type="button" onClick={handleClick} className="link-button"> arxiv </button>
          <button type="button" onClick={handleClick} className="link-button"> github </button>
      </div>
      <Header />
      <div className="content">
        <h1 className="heading"> How it works </h1>
        <p className="first-box">
          hellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohello
        </p>
      </div>
      <div className="">
        <h1> Results</h1>
      </div>
    </div>
  );
}
