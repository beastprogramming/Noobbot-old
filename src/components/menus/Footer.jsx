import React from 'react';
import FooterMenu from './FooterMenu';
import FooterNewsletter from '../cta/FooterNewsletter';

function Footer () {
    return (
        <>
        <footer>
        <div className="nb-bg-primary-bunty nb-text-primary-bunty">
            <FooterNewsletter />
            <FooterMenu />
        </div>
        </footer>
        </>
    )
}
export default Footer;