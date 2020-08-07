import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../../../node_modules/materialize-css/dist/css/materialize.css';
import './Banner.css';

import ImgOne from '../../../images/Lemons1a.jpg';
import ImgTwo from '../../../images/Lemons2a.jpg';
import ImgThree from '../../../images/Lemons3a.jpg';



export default class Banner extends Component {
    render() {
        return (
            <section className="slider valign-wrapper grey lighten-4" id="home">
                <ul className="slides">
                    <li>
                        <img src={ImgOne} alt="Occasion" />
                        <div className="caption center-align">
                            <h2 className="white-text">Pick your occasion</h2>
                            <h5 className="light white-text hide-on-small-only">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fringilla non nisi at vestibulum.
                            </h5>
                            <Link to="!#" className="btn-floating btn-large yellow hoverable waves-effect"><i class="material-icons black-text">keyboard_arrow_down</i></Link>
                        </div>
                    </li>
                    <li>
                        <img src={ImgTwo} alt="Pattern" />
                        <div className="caption center-align">
                            <h2 className="white-text">Pick your pattern</h2>
                            <h5 className="light white-text hide-on-small-only">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fringilla non nisi at vestibulum.
                            </h5>
                            <Link to="!#" className="btn btn-large yellow hoverable waves-effect black-text">Get Started</Link>
                        </div>
                    </li>
                    <li>
                        <img src={ImgThree} alt="Gift" />
                        <div className="caption center-align">
                            <h2 className="white-text">Select your gift</h2>
                            <h5 className="light white-text hide-on-small-only">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fringilla non nisi at vestibulum.
                            </h5>
                            <Link to="!#" className="btn btn-large yellow hoverable waves-effect black-text">Get Started</Link>
                        </div>
                    </li>
                </ul>
            </section>
        )
    }
};