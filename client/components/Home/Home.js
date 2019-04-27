import React, { Component } from "react";
import SiteCarousel from "../SiteCarousel";
import ItemBrowser from "../ItemBrowser";

class Home extends Component {
  render() {
    return (
      <div>
        <SiteCarousel />
        <ItemBrowser />
      </div>
    );
  }
}

export default Home;
