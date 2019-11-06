import React from "react";
import HomeComponent from "../components/HomeComponent";
import HeroComponent from "../components/HeroComponent";
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";

const Home = () => {
    return <>
        <HeroComponent/>
        <HeaderComponent/>
        <HomeComponent/>
        <FooterComponent/>
    </>;
};

export default Home;
