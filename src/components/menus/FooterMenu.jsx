import React from 'react';
import {Link} from 'react-router-dom';

function FooterMenu () {
    return (
        <>
        <div className="nb-px-4 md:nb-px-8 lg:nb-px-12 nb-pt-8 nb-pb-4 nb-text-white ">
        	<div className="nb-grid nb-grid-cols-1 sm:nb-grid-cols-2 lg:nb-grid-cols-6 nb-gap-4">
        
						<div className="">
							<p className="nb-uppercase nb-text-xs nb-tracking-widest nb-pb-2 lg:nb-pb-4 nb-font-bold nb-text-white">Company</p>
							<ul className="">
								<li className="nb-text-sm nb-font-bold nb-capitalize hover:nb-text-white hover:nb-text-opacity-75"><Link to="#">About</Link></li>
								<li className="nb-text-sm nb-font-bold nb-capitalize hover:nb-text-white hover:nb-text-opacity-75"><Link to="#">Our Team</Link>
								</li>
								<li className="nb-text-sm nb-font-bold nb-capitalize hover:nb-text-white hover:nb-text-opacity-75"><Link to="#">Resources</Link>
								</li>
								<li className="nb-text-sm nb-font-bold nb-capitalize hover:nb-text-white hover:nb-text-opacity-75"><Link to="#">Stories</Link></li>
								<li className="nb-text-sm nb-font-bold nb-capitalize hover:nb-text-white hover:nb-text-opacity-75"><Link to="#">Media Kit</Link>
								</li>
								<li className="nb-text-sm nb-font-bold nb-capitalize hover:nb-text-white hover:nb-text-opacity-75"><Link to="#">Legal</Link></li>
							</ul>
						</div>
						
						<div className="">
							<p className="nb-uppercase nb-text-xs nb-tracking-widest nb-pb-2 lg:nb-pb-4 nb-font-bold nb-text-white">INFRASTRUCTURE</p>
							<ul className="">
								<li className="nb-text-sm nb-font-bold nb-capitalize hover:nb-text-white hover:nb-text-opacity-75"><Link to="#">Datacenter
										Details</Link></li>
								<li className="nb-text-sm nb-font-bold nb-capitalize hover:nb-text-white hover:nb-text-opacity-75"><Link to="#">Hosting
										Security</Link></li>
								<li className="nb-text-sm nb-font-bold nb-capitalize hover:nb-text-white hover:nb-text-opacity-75"><Link to="#">24 x 7 Servers
										Monitoring</Link></li>
								<li className="nb-text-sm nb-font-bold nb-capitalize hover:nb-text-white hover:nb-text-opacity-75"><Link to="#">Backup and
										Recovery</Link></li>
							</ul>
						</div>
						
						<div className="">
							<p className="nb-uppercase nb-text-xs nb-tracking-widest nb-pb-2 lg:nb-pb-4 nb-font-bold nb-text-white">Support</p>
							<ul className="">
								<li className="nb-text-sm nb-font-bold nb-capitalize hover:nb-text-white hover:nb-text-opacity-75"><Link
		to            href="#">Knowledgebase</Link></li>
								<li className="nb-text-sm nb-font-bold nb-capitalize hover:nb-text-white hover:nb-text-opacity-75"><Link to="#">Video
										Tutorials</Link></li>
								<li className="nb-text-sm nb-font-bold nb-capitalize hover:nb-text-white hover:nb-text-opacity-75"><Link to="#">Live Chat
										Support</Link></li>
								<li className="nb-text-sm nb-font-bold nb-capitalize hover:nb-text-white hover:nb-text-opacity-75"><Link to="#">Noobbot Blog</Link>
								</li>
								<li className="nb-text-sm nb-font-bold nb-capitalize hover:nb-text-white hover:nb-text-opacity-75"><Link to="#">Contact Us </Link>
								</li>
								<li className="nb-text-sm nb-font-bold nb-capitalize hover:nb-text-white hover:nb-text-opacity-75"><Link to="#">Report Abuse
									</Link></li>
							</ul>
						</div>
						
						<div className="">
							<p className="nb-uppercase nb-text-xs nb-tracking-widest nb-pb-2 lg:nb-pb-4 nb-font-bold nb-text-white">Quick Links</p>
							<ul className="">
								<li className="nb-text-sm nb-font-bold nb-capitalize hover:nb-text-white hover:nb-text-opacity-75"><Link to="#">My Account</Link>
								</li>
								<li className="nb-text-sm nb-font-bold nb-capitalize hover:nb-text-white hover:nb-text-opacity-75"><Link to="#">Create
										Account</Link></li>
								<li className="nb-text-sm nb-font-bold nb-capitalize hover:nb-text-white hover:nb-text-opacity-75"><Link to="#">Offers</Link></li>
							</ul>
						</div>
						
						<div className="">
							<p className="nb-uppercase nb-text-xs nb-tracking-widest nb-pb-2 lg:nb-pb-4 nb-font-bold nb-text-white">Solutions</p>
							<ul className="">
								<li className="nb-text-sm nb-font-bold nb-capitalize hover:nb-text-white hover:nb-text-opacity-75"><Link to="#">Domains</Link></li>
								<li className="nb-text-sm nb-font-bold nb-capitalize hover:nb-text-white hover:nb-text-opacity-75"><Link to="#">Hosting</Link></li>
								<li className="nb-text-sm nb-font-bold nb-capitalize hover:nb-text-white hover:nb-text-opacity-75"><Link to="#">Websites</Link>
								</li>
								<li className="nb-text-sm nb-font-bold nb-capitalize hover:nb-text-white hover:nb-text-opacity-75"><Link to="#">Cloud</Link></li>
								<li className="nb-text-sm nb-font-bold nb-capitalize hover:nb-text-white hover:nb-text-opacity-75"><Link to="#">Emails</Link></li>
								<li className="nb-text-sm nb-font-bold nb-capitalize hover:nb-text-white hover:nb-text-opacity-75"><Link to="#">Security</Link>
								</li>
							</ul>
						</div>
						
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