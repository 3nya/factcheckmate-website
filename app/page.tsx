"use client";
import React, { useState } from "react";
import "./page.css";
import Authors from './components/authors';
import Header from './components/header';
import Highlight from "./components/highlight";
import LineBreak from "./components/linebreak";
import Table from "./components/table";
import {Tabulator, FormatModule, EditModule} from 'tabulator-tables';



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
      <Highlight text="example" additionaltext=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet velit dolor. Cras auctor sagittis augue in varius. Nullam a suscipit risus, interdum fringilla massa. Nullam leo dolor, facilisis quis dolor eu, sodales porta enim. Nulla at velit eros. Sed ut elit ut est cursus facilisis in sit amet tellus. In hac habitasse platea dictumst. Duis tellus erat, tincidunt at turpis id, sagittis dignissim erat. Sed varius nunc nec ligula condimentum commodo ut quis neque. Nulla commodo erat nibh, sed blandit odio hendrerit id. Integer mattis sed elit eu luctus.
"/>
      <div className="content">
        <h1 className="heading"> How It Works </h1>
        <div className="first-box">
          Language models hidden states reveals valuable information about their internal working mechanisms, and provide signals that can be used to 
          predict whether it is likely to <Highlight text = "halluncinate" additionaltext="A phenomenon where they produce nonfactual or even misleading outputs that often appear plausible"/> <i> before </i> it happens. 
          <LineBreak/>
          When a hallucination is detected, Fact Checkmate intervenes, by adjusting the LM's hidden states with a learned intervention model.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet velit dolor. Cras auctor sagittis augue in varius. Nullam a suscipit risus, interdum fringilla massa. Nullam leo dolor, facilisis quis dolor eu, sodales porta enim. Nulla at velit eros. Sed ut elit ut est cursus facilisis in sit amet tellus. In hac habitasse platea dictumst. Duis tellus erat, tincidunt at turpis id, sagittis dignissim erat. Sed varius nunc nec ligula condimentum commodo ut quis neque. Nulla commodo erat nibh, sed blandit odio hendrerit id. Integer mattis sed elit eu luctus.
        </div>
      </div>
      <div className="content">
        <h1 className="heading"> Results</h1>

      </div>
      <div className="content">
        <h1 className="heading"> Abstract </h1>
      </div>

    </div>
  );
}
