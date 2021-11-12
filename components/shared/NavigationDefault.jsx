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
                    <Link href="#" to="home" spy={true} smooth={true} duration={500} offset={-100}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link  href="#" to="services" spy={true} smooth={true} duration={500} offset={-100}>

                        Services

                    </Link>
                </li>
                <li>
                    <Link  href="#" to="about-us" spy={true} smooth={true} duration={500} offset={-100}>

                        About Us

                    </Link>
                </li>
            </ul>
        );
    }
}

export default NavigationDefault;
