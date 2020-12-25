import React from 'react';
import {Link} from 'react-router-dom';

function ProductWithImage() {
    return(
        <>
            <section className="nb-py-4">
                <div className="nb-container nb-my-16">
                    <div className="nb-text-left nb-my-12">
                        <h2 className="nb-text-2xl md:nb-text-3xl lg:nb-text-4xl nb-font-bold nb-text-primary-bunty nb-tracking-wide nb-leading-tight nb-mb-2">Every Web Professional Needs Different Solution!</h2>
                        <h3 className="nb-text-xl md:nb-text-2xl lg:nb-text-3xl nb-font-semibold nb-text-primary-blue nb-tracking-wider nb-mb-2">Don't worry, we have covered it all for you.</h3>
                        <h4 className="nb-text-lg md:nb-text-xl lg:nb-text-2xl nb-font-base nb-text-primary-red nb-tracking-wider">Choose from an array of options curated for Web Designers & Developers</h4>
                    </div>
                        <div className="nb-grid nb-grid-cols-1 md:nb-grid-cols-2 lg:nb-grid-cols-4 nb-gap-4">
                            <Link to="" title="" className="nb-border-2 nb-p-2 nb-rouded nb-border-primary-blue">
                                <div className="nb-h-12 nb-flex nb-justify-start nb-mb-4">
                                <img src="https://india.resellerclub.com/front/images/system/home/hp_wordpress.png" alt="WordPress" />
                                </div>
                                <h4 className="nb-text-xl nb-font-medium">Plans built for security, speed and scalability.</h4>
                            </Link>
                            <Link to="" title="" className="nb-border-2 nb-p-2 nb-rouded nb-border-primary-red">
                                <div className="nb-h-12 nb-flex nb-justify-start nb-mb-4">
                                <img src="https://india.resellerclub.com/front/images/system/home/hp_comodo.png" alt="Comodo" />
                                </div>
                                <h4 className="nb-text-xl nb-font-medium">SSL Certificates with 256 AES Encryption</h4>
                            </Link>
                            <Link to="" title="" className="nb-border-2 nb-p-2 nb-rouded  nb-border-primary-bunty">
                                <div className="nb-h-12 nb-flex nb-justify-start nb-mb-4">
                                <img src="https://india.resellerclub.com/front/images/system/home/hp_sitelock.png" alt="SiteLock" />
                                </div>
                                <h4 className="nb-text-xl nb-font-medium">Secure your data using the best encryption services.</h4>
                            </Link>
                            <Link to="" title="" className="nb-border-2 nb-p-2 nb-rouded  nb-border-primary-green">
                                <div className="nb-h-12 nb-flex nb-justify-start nb-mb-4">
                                <img src="https://india.resellerclub.com/front/images/system/home/hp_codeguard.png" alt="CodeGuard" />
                                </div>
                                <h4 className="nb-text-xl nb-font-medium">Backup your sites in real time.</h4>
                            </Link>
                            <Link to="" title="" className="nb-border-2 nb-p-2 nb-rouded nb-border-primary-blue">
                                <div className="nb-h-12 nb-flex nb-justify-start nb-mb-4">
                                <img src="https://india.resellerclub.com/front/images/system/home/hp_weebly.png" alt="Weebly" />
                                </div>
                                <h4 className="nb-text-xl nb-font-medium">Super easy builder for creating stunning websites.</h4>
                            </Link>
                            <Link to="" title="" className="nb-border-2 nb-p-2 nb-rouded nb-border-primary-red">
                                <div className="nb-h-12 nb-flex nb-justify-start nb-mb-4">
                                <img src="https://india.resellerclub.com/front/images/system/home/hp_themes.png" alt="Themes" />
                                </div>
                                <h4 className="nb-text-xl nb-font-medium">Wordpress, Joomla, Prestashop & HTML Templates</h4>
                            </Link>
                            <Link to="" title="" className="nb-border-2 nb-p-2 nb-rouded  nb-border-primary-bunty">
                                <div className="nb-h-12 nb-flex nb-justify-start nb-mb-4">
                                <img src="https://india.resellerclub.com/front/images/system/home/hp_ox.png" alt="OX" />
                                </div>
                                <h4 className="nb-text-xl nb-font-medium">Enterprise email services for your business.</h4>
                            </Link>
                            <Link to="" title="" className="nb-border-2 nb-p-2 nb-rouded  nb-border-primary-green">
                                <div className="nb-h-12 nb-flex nb-justify-start nb-mb-4">
                                <img src="https://india.resellerclub.com/front/images/system/home/hp_gsuite.png" alt="Google Workspace" />
                                </div>
                                <h4 className="nb-text-xl nb-font-medium">Professional Mail, Documents & Presentations from Google</h4>
                            </Link>
                            <Link to="" title="" className="nb-border-2 nb-p-2 nb-rouded nb-border-primary-blue">
                                <div className="nb-h-12 nb-flex nb-justify-start nb-mb-4">
                                <img src="https://cdnassets.com/ui/supersite/themes/EliteGreen/images/kvm-vps-os-sprite.png" className="h-10" alt="KVM VPS OS" />
                                </div>
                                <h4 className="nb-text-xl nb-font-medium">Get complete nb-flexibility to choose the operating system that works for you.</h4>
                            </Link>
                            <Link to="" title="" className="nb-border-2 nb-p-2 nb-rouded nb-border-primary-red">
                                <div className="nb-h-12 nb-flex nb-justify-start nb-mb-4">
                                <img src="https://india.resellerclub.com/front/images/system/home/hp_whm.png" alt="WHM" />
                                </div>
                                <h4 className="nb-text-xl nb-font-medium">Reseller Hosting platform and web hosting plans.</h4>
                            </Link>
                        </div>
                </div>
            </section>
        </>
    )
}

export default ProductWithImage;