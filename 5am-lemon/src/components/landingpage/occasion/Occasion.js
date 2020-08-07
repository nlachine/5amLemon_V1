import React, { Component } from 'react';

export default class Occasion extends Component {
    render() {
        return (
            <div>
                <section id="occasion" className="section section-icons grey lighten-4 center scrollspy">
                    <div className="container">
                        {/*---Title---*/}
                        <h4 className="center">Occasions</h4>

                        <div className="row">
                            {/*---Occasion 1---*/}
                            <div className="col s6 m3">
                                <div className="card-panel hoverable">
                                    <i className="material-icons large yellow-text">cake</i>
                                    <h5 className="flow-text center-align">Birthday</h5>
                                </div>
                            </div>

                            {/*---Occasion 2---*/}
                            <div className="col s6 m3">
                                <div className="card-panel hoverable">
                                    <i className="material-icons large yellow-text">business</i>
                                    <h5 className="flow-text center-align">Corporate</h5>
                                </div>
                            </div>

                            {/*---Occasion 3---*/}
                            <div className="col s6 m3">
                                <div className="card-panel hoverable">
                                    <i className="material-icons large yellow-text">favorite</i>
                                    <h5 className="flow-text center-align">Just Because</h5>
                                </div>
                            </div>

                            {/*---Occasion 4---*/}
                            <div className="col s6 m3">
                                <div className="card-panel hoverable">
                                    <i className="material-icons large yellow-text">thumb_up</i>
                                    <h5 className="flow-text center-align">Thank You</h5>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {/*---Occasion 1---*/}
                            <div className="col s6 m3">
                                <div className="card-panel hoverable">
                                    <i className="material-icons large yellow-text">school</i>
                                    <h5 className="flow-text center-align">Graduation</h5>
                                </div>
                            </div>

                            {/*---Occasion 2---*/}
                            <div className="col s6 m3">
                                <div className="card-panel hoverable">
                                    <i className="material-icons large yellow-text">emoji_events</i>
                                    <h5 className="flow-text center-align">Congratulations</h5>
                                </div>
                            </div>

                            {/*---Occasion 3---*/}
                            <div className="col s6 m3">
                                <div className="card-panel hoverable">
                                    <i className="material-icons large yellow-text">sick</i>
                                    <h5 className="flow-text center-align">Get Well</h5>
                                </div>
                            </div>

                            {/*---Occasion 4---*/}
                            <div className="col s6 m3">
                                <div className="card-panel hoverable">
                                    <i className="material-icons large yellow-text">child_friendly</i>
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
