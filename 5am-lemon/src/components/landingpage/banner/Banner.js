import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import '../../../../node_modules/materialize-css/dist/css/materialize.css';
import './Banner.scss';

import ImgOne from '../../../images/Wavy_1080-3.png';
//import ImgOne from '../../../images/Lemons1.jpg';



export default class Banner extends Component {
    render() {
        return (
            <div className="banner">
                <div className="container">
                    <img src={ImgOne} alt="Occasion" />
                    <div className="caption left-align">
                        <h2 className="teal-text text-darken-1">Pick your occasion</h2>
                        <h4 className="light teal-text text-darken-1 hide-on-small-only">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fringilla non nisi at vestibulum.
                    </h4>
                        <AnchorLink href="/occasion" className="btn btn-large yellow hoverable waves-effect black-text">Pick An Occasion</AnchorLink>
                    </div>
                </div>
            </div>
        )
    }
};