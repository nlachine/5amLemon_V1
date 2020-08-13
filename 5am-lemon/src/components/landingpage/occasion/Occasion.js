import React, { Component } from 'react';
import './Occasion.scss';

import BabyIcon1 from '../../../icons/1_Baby.png';
import BabyIcon2 from '../../../icons/1_Baby 2.png';
import BirthdayIcon from '../../../icons/1_Bday.png';
import BirthdayIcon2 from '../../../icons/1_Bday 2.png';
import CheersIcon1 from '../../../icons/1_Cheers.png';
import CheersIcon2 from '../../../icons/1_Cheers 2.png';
import GiftIcon1 from '../../../icons/1_Gift.png';
import GiftIcon2 from '../../../icons/1_Gift 2.png';
import GradIcon1 from '../../../icons/1_Grad-11.png';
import GradIcon2 from '../../../icons/1_Grad-12.png';
import FriendshipIcon1 from '../../../icons/1_Friendship-09.png';
import FriendshipIcon2 from '../../../icons/1_Friendship-10.png';


export default class Occasion extends Component {
    render() {
        return (
            <div className="occasion">
                <section id="occasion" className="section section-icons teal lighten-4 center scrollspy">
                    <div className="container">
                        {/*---Title---*/}
                        <h4 className="center teal-text text-darken-1">Occasions</h4>

                        <div className="row">
                            {/*---Occasion 1---*/}
                            <div className="col s6 m3">
                                <div className="card-panel hoverable">
                                    <img className="customIcon" src={BirthdayIcon} alt="birthday1"></img>
                                    <h5 className="flow-text center-align">Birthday</h5>
                                </div>
                            </div>

                            {/*---Occasion 2---*/}
                            <div className="col s6 m3">
                                <div className="card-panel hoverable">
                                    <img className="customIcon" src={BirthdayIcon2} alt="birthday2"></img>
                                    <h5 className="flow-text center-align">Corporate</h5>
                                </div>
                            </div>

                            {/*---Occasion 3---*/}
                            <div className="col s6 m3">
                                <div className="card-panel hoverable">
                                <img className="customIcon" src={FriendshipIcon1} alt="friendship1"></img>
                                    <h5 className="flow-text center-align">Just Because</h5>
                                </div>
                            </div>

                            {/*---Occasion 4---*/}
                            <div className="col s6 m3">
                                <div className="card-panel hoverable">
                                <img className="customIcon" src={CheersIcon1} alt="cheers1"></img>
                                    <h5 className="flow-text center-align">Thank You</h5>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {/*---Occasion 1---*/}
                            <div className="col s6 m3">
                                <div className="card-panel hoverable">
                                <img className="customIcon" src={GradIcon1} alt="grad1"></img>
                                    <h5 className="flow-text center-align">Graduation</h5>
                                </div>
                            </div>

                            {/*---Occasion 2---*/}
                            <div className="col s6 m3">
                                <div className="card-panel hoverable">
                                <img className="customIcon" src={CheersIcon2} alt="cheers2"></img>
                                    <h5 className="flow-text center-align">Congratulations</h5>
                                </div>
                            </div>

                            {/*---Occasion 3---*/}
                            <div className="col s6 m3">
                                <div className="card-panel hoverable">
                                <img className="customIcon" src={GiftIcon1} alt="birthday"></img>
                                    <h5 className="flow-text center-align">Get Well</h5>
                                </div>
                            </div>

                            {/*---Occasion 4---*/}
                            <div className="col s6 m3">
                                <div className="card-panel hoverable">
                                <img className="customIcon" src={BabyIcon2} alt="birthday"></img>
                                    <h5 className="flow-text center-align">New Born</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
