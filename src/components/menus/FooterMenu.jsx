import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

function FooterMenu () {
	const [footerMenuItems, setFooterMenuItems] = useState([]);

useEffect(() => {
fetch(`./footermenu.json`)
	.then((response) => response.json())
	.then(setFooterMenuItems);
}, []);
    return (
        <>
        <div className="nb-px-4 md:nb-px-8 lg:nb-px-12 nb-pt-8 nb-pb-4 nb-text-white ">
        	<div className="nb-grid nb-grid-cols-1 sm:nb-grid-cols-2 lg:nb-grid-cols-6 nb-gap-4">
						{footerMenuItems.map((footerMenuItem) => {
						return (
						<div key={footerMenuItem.name}>
							<p className="nb-uppercase nb-text-sm nb-tracking-widest nb-pb-2 lg:nb-pb-4 nb-font-bold nb-text-white">{footerMenuItem.name}</p>
							<ul className="">
							{footerMenuItem.children.map((footerMenuDetail) => {
								return (
									<Link to={footerMenuDetail.href} key={footerMenuDetail.text} title={footerMenuDetail.title} target={footerMenuDetail.target} className=" hover:nb-text-light-blue">
									<li className="nb-text-md nb-font-medium nb-capitalize">{footerMenuDetail.text}</li>
									</Link>
								)})}
							
							</ul>
						</div>
						)})}
						<div className="">
							<p className="nb-uppercase nb-text-sm nb-tracking-widest nb-pb-2 lg:nb-pb-4 nb-font-bold nb-text-white">Scanned & Secured By</p>

							<div className="nb-grid nb-grid-cols-1 lg:nb-grid-cols-2 nb-gap-2 ">
								<div className="">
								<Link to="https://www.sitelock.com/verify.php?site=noobbot.com"><img
									className="img-responsive" alt="SiteLock" title="SiteLock"
									src="https://shield.sitelock.com/shield/noobbot.com" /></Link>
								</div>
								<div className="">

								</div>
							</div>
						</div>
      		</div>
      	</div>
        </>
    )
}
export default FooterMenu;