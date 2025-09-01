import React from "react";
import Page1 from "./Pages/Page1";
import Header from "./components/Header";
import Page2 from "./Pages/Page2";
import Page3 from "./Pages/Page3";
import Page4 from "./Pages/Page4";
import Page5 from "./Pages/Page5";
import Page6 from "./Pages/Page6";
import Page7 from "./Pages/Page7";
import Page8 from "./Pages/Page8";
import Page9 from "./Pages/Page9";
import LocomotiveScroll from "locomotive-scroll";
import Page10 from "./Pages/Page10";
import Page11 from "./Pages/Page11";

import Pg12 from "./Pages/Pg12";
import Page13 from "./Pages/Page13";
import Page14 from "./Pages/Page14";
import Page15 from "./Pages/Page15";
import Banner from "./components/Banner";

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <>
      <div data-scroll-container className="  overflow-hidden  ">
        <Header />
        <Banner />

        <Page1 />
        <Page2 />
        <Page3 />
        <Page4 />
        <Page5 />
        <Page6 />
        <Page7 />
        <Page8 />
        <Page9 />
        <Page10 />
        <Page11 />
        <Pg12 />
        <Page13 />
        <Page14 />
        <Page15 />
      </div>
    </>
  );
};

export default App;
