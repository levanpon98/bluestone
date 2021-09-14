import React, { Component } from 'react';
import { Link } from 'react-scroll';
import { notification } from 'antd';

class NavigationDefault extends Component {
    constructor(props) {
        super(props);
    }

    handleFeatureWillUpdate(e) {
        e.preventDefault();
        notification.open({
            message: 'Opp! Something went wrong.',
            description: 'This feature has been updated later!',
            duration: 500,
        });
    }

    render() {
        return (
            <ul className="menu">
                <li>
                    <Link to="home" spy={true} smooth={true} duration={500} offset={-100}>
                        <a >
                            Home
                        </a>
                    </Link>
                </li>
                <li>
                    <Link to="services" spy={true} smooth={true} duration={500} offset={-100}>
                        <a >
                            Services
                        </a>
                    </Link>
                </li>
                <li>
                    <Link to="about-us" spy={true} smooth={true} duration={500} offset={-100}>
                        <a  >
                            About Us
                        </a>
                    </Link>
                </li>
            </ul>
        );
    }
}

export default NavigationDefault;
