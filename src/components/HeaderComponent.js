import React from 'react';

const HeaderComponent = () => {
    return <header className="w-100 sans-serif">
        <div className="header-container">
            <img src={require('../assets/img/logo.svg')} alt="Logo" id="site-logo"/>
            <nav>
                <li><a href="#/">Home</a></li>
                <li><a href="#/indicators">Indicators</a></li>
                <li><a href="#/guides">Guides</a></li>
                <li><a href="#/support-us">Support Us</a></li>
                <li><a href="#/contact">Contact us</a></li>
            </nav>
        </div>
    </header>;
}
export default HeaderComponent;