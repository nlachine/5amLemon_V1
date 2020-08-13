import React, { Component } from 'react';
import './navbar.scss';
import '../../../../node_modules/materialize-css/dist/css/materialize.css';
import '../../../../node_modules/materialize-css/dist/js/materialize';
import AnchorLink from 'react-anchor-link-smooth-scroll';

function changeCss() {
    var navElement = document.querySelector("nav");
    if (this.scrollY > 100) {
        navElement.style.boxShadow = "0px 1px 5px grey";
        navElement.style.height = "0px 0px 0px 0px";
    } else {
        navElement.style.boxShadow = "0px 0px 0px black";
        navElement.style.height = "20px 20px 20px 20px";
    }
}

window.addEventListener("scroll", changeCss, false);


const SmoothScroll = () => {
    return (
        <section>
            <div className="navbar-fixed">
                <nav className="white">
                    <div className="container">
                        <div className="nav-wrapper">
                            <AnchorLink href="#" className="brand-logo yellow-text">5amLemon</AnchorLink>
                            <AnchorLink href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></AnchorLink>
                            <ul id="nav-mobile" class="right hide-on-med-and-down">
                                <li><AnchorLink href="/home" class="teal-text text-darken-1">Home</AnchorLink></li>
                                <li><AnchorLink href="/occasion" class="teal-text text-darken-1">Occasion</AnchorLink></li>
                                <li><AnchorLink href="/search" class="teal-text text-darken-1">Search</AnchorLink></li>
                                <li><AnchorLink href="/contact" class="teal-text text-darken-1">Contact</AnchorLink></li>
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