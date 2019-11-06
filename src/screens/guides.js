import React from "react";
import HomeComponent from "../components/HomeComponent";
import HeroComponent from "../components/HeroComponent";
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";
import GuidesComponent from "../components/GuidesComponent";

const Home = () => {
    return <>
        <HeroComponent/>
        <HeaderComponent/>
        <GuidesComponent/>
        <FooterComponent/>
    </>;
};

export default Home;
