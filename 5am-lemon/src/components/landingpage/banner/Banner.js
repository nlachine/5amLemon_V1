import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import '../../../../node_modules/materialize-css/dist/css/materialize.css';
import './Banner.css';

import ImgOne from '../../../images/Lemons1a.jpg';



export default class Banner extends Component {
    render() {
        return (
            <section className="slider valign-wrapper grey lighten-4" id="home">
                <ul className="slides">
                    <li>
                        <img src={ImgOne} alt="Occasion" />
                            <div className="container">
                                <div className="caption left-align">
                                    <h2 className="white-text">Pick your occasion</h2>
                                    <h4 className="light white-text hide-on-small-only">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fringilla non nisi at vestibulum.
                                    </h4>
                                    <AnchorLink href="/occasion" className="btn btn-large yellow hoverable waves-effect black-text">Pick An Occasion</AnchorLink>
                                </div>
                            </div>
                    </li>
                </ul>
            </section>
        )
    }
};