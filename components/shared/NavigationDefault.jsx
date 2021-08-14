import React, { Component } from 'react';
import Link from 'next/link';
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
                    <Link href="#">
                        <a >
                            Home
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="#">
                        <a >
                            Services
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="#">
                        <a >
                            About Us
                        </a>
                    </Link>
                </li>
            </ul>
        );
    }
}

export default NavigationDefault;
