import React from "react";
import Header from "../../components/Header";
import Title from "../../components/Title";
import Directions from "../../components/Directions";
import Clue from "../../components/Clue";
import Dice from "../../components/Dice";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
function CemeteryPart1() {
  return (
    <div>
      <Header />
      <Title location="Cemetery" />
      <Directions directions="Story in the cemetery...." />
      <Clue clue="the content of the clue from props in forest" />
      <button>
        <Link to="/cemetery-2">To the Cemetery</Link>
      </button>
      <Dice />
      <Footer />
    </div>
  );
}

export default CemeteryPart1;
