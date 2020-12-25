import React from 'react';
import FooterMenu from './FooterMenu';
import FooterNewsletter from '../cta/FooterNewsletter';
import FooterBottom from '../menus/FooterBottom';

function Footer () {
    return (
        <>
        <footer>
        <div className="nb-bg-primary-bunty nb-text-primary-bunty">
            <FooterNewsletter />
            <FooterMenu />
            <FooterBottom />
        </div>
        </footer>
        </>
    )
}
export default Footer;