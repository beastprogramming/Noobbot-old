import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

function FooterMenu () {
	const [menuItems, setMenuItems] = useState([]);

useEffect(() => {
fetch(`./footermenu.json`)
	.then((response) => response.json())
	.then(setMenuItems);
}, [menuItems]);
    return (
        <>
        <div className="nb-px-4 md:nb-px-8 lg:nb-px-12 nb-pt-8 nb-pb-4 nb-text-white ">
        	<div className="nb-grid nb-grid-cols-1 sm:nb-grid-cols-2 lg:nb-grid-cols-6 nb-gap-4">
						{menuItems.map((menuItem) => {
						return (
						<div key={menuItem.text}>
							<p className="nb-uppercase nb-text-sm nb-tracking-widest nb-pb-2 lg:nb-pb-4 nb-font-bold nb-text-white">{menuItem.name}</p>
							<ul className="">
							{menuItem.children.map((menuDetail) => (
								<li className="nb-text-md nb-font-medium nb-capitalize hover:nb-text-gray-400" key={menuDetail.text}><Link to={menuDetail.href} title={menuDetail.title} target={menuDetail.target}>{menuDetail.text}</Link></li>
							))}
							</ul>
						</div>
						)})}
						<div className="">
							<p className="nb-uppercase nb-text-xs nb-tracking-widest nb-pb-2 lg:nb-pb-4 nb-font-bold nb-text-white">Scanned & Secured By</p>

							<div className="nb-grid nb-grid-cols-1 lg:nb-grid-cols-2 nb-gap-2 ">
								<div className="">
								<Link to="https://www.sitelock.com/verify.php?site=noobbot.com"><img
									className="img-responsive" alt="SiteLock" title="SiteLock"
									src="//shield.sitelock.com/shield/noobbot.com" /></Link>
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