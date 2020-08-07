import React, { Component } from 'react';
import '../../../../node_modules/materialize-css/dist/css/materialize.css';

export default class Footer extends Component {
    render() {
        return (
            <div>
                <footer class="page-footer yellow">
                    <div class="container">
                        <div class="row center">
                            <div class="col s12 center offset-s2">
                                <h6 class="col s2 grey-text text-darken-4">
                                    Link One
                                </h6>
                                <h6 class="col s2 grey-text text-darken-4">
                                    Link Two
                                </h6>
                                <h6 class="col s2 grey-text text-darken-4">
                                    Link Three
                                </h6>
                                <h6 class="col s2 grey-text text-darken-4">
                                    Link Four
                                </h6>
                            </div>
                        </div>
                    </div>
                    <div class="footer-copyright">
                        <div class="container black-text center">
                            © 2014 Copyright Text
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}