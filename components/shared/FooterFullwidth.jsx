import React from 'react';
import FooterMenu from './modules/FooterMenu';
import FooterContact from './modules/FooterContact';
import FooterCopyright from './modules/FooterCopyright';

const FooterFullwidth = () => (
    <footer className="ps-footer">
        <div className="ps-container">
            <FooterMenu/>
            <FooterContact/>
            <FooterCopyright />
        </div>
    </footer>
);

export default FooterFullwidth;
