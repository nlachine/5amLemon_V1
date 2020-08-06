import React, { Component } from 'react';
import '../../../../node_modules/materialize-css/dist/css/materialize.css';
import '../../../../node_modules/materialize-css/dist/js/materialize';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const SmoothScroll = () => {
    return (
        <section>
            <div className="navbar-fixed">
                <nav className="white">
                    <div className="container">
                        <div className="nav-wrapper">
                            <AnchorLink href="#" className="brand-logo black-text">5amLemon</AnchorLink>
                            <AnchorLink href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></AnchorLink>
                            <ul id="nav-mobile" class="right hide-on-med-and-down">
                                <li><AnchorLink href="/home" class="black-text">Home</AnchorLink></li>
                                <li><AnchorLink href="/occasion" class="black-text">Occasion</AnchorLink></li>
                                <li><AnchorLink href="/search" class="black-text">Search</AnchorLink></li>
                                <li><AnchorLink href="/contact" class="black-text">Contact</AnchorLink></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <ul class="sidenav" id="mobile-demo">
                <li><AnchorLink href="#home">Home</AnchorLink></li>
                <li><AnchorLink href="#occasion" class="black-text">Occasion</AnchorLink></li>
                <li><AnchorLink href="#search">Search</AnchorLink></li>
                <li><AnchorLink href="#contact">Contact</AnchorLink></li>
            </ul>
        </section>
    )
}


export default class Navbar extends Component {
    render() {
        return (
            <div>
                <SmoothScroll />
            </div>
        )
    }
}