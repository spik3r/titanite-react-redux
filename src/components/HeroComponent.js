import React from 'react';

const HeroComponent = () => {
    return <div className="hero">
            <div className="hero w-100"> {/* <!--relative-->*/}
                <div className="background-image w-100"></div> {/* <!--absolute-->*/}
                <div className="hero-content"> {/* <!--absolute-->*/}
                    <h1 id="site-title"><span className="titanite-text">Titanite</span>
                    <br/>
                    <span className="studios-text">Studios</span></h1>
                <h3>Trading Tips, Indicators & Strategies</h3>
            </div>

        </div>

        <div className="hero-bar w-100"></div>
    </div>;
}
export default HeroComponent;