import React from 'react';
import {Link} from 'react-router-dom';
function ProductFeatureImage(props){
    return(
        <>
            <div className="nb-container nb-mb-32">
                <div className="nb-grid nb-grid-cols-1 lg:nb-grid-cols-3 nb-gap-4">
                    <div className="nb-order-1 nb-col-span-2">
<<<<<<< HEAD
                        <h2 className="nb-text-1xl md:nb-text-2xl lg:nb-text-3xl nb-font-medium nb-text-primary-bunty nb-mb-4">{props.title}</h2>
                        
                        <h4 className="nb-text-lg nb-font-semibold nb-mb-2">{props.description.title}</h4>
                        <p className="nb-text-lg  nb-leading-relaxed nb-text-justify nb-mb-4">{props.description.detail}</p>
                        <Link to={props.path} className="nb-transition nb-duration-100 nb-ease-in-out nb-text-lg nb-font-semibold nb-text-primary-blue  nb-border-b-0 hover:nb-border-b-2 hover:nb-border-primary-red">View Linux KVM VPS <i className="las la-arrow-right nb-ml-1"></i></Link>
=======
                        <h2 className="nb-text-2xl md:nb-text-3xl lg:nb-text-4xl nb-font-medium nb-text-primary-bunty nb-mb-4">Linux KVM VPS</h2>
                        <h4 className="nb-text-lg nb-font-semibold nb-mb-2">Your private virtual server</h4>
                        <p className="nb-text-lg  nb-leading-relaxed nb-text-justify nb-mb-4">If traditional shared hosting isn't enough for you, choose a VPS server. As part of Cloud
                            VPS, you will receive specific server resources: the power of even several processor cores (up to
                            8vCore),
                            up to 16 GB of RAM and up to 150 GB on NVMe SSD disks. As standard, you will have root access to the
                            Linux
                            shell, which will allow you to manage the server configuration, install your own applications and
                            libraries,
                            and administer user accounts.</p>
                            <h4 className="nb-text-lg nb-font-semibold nb-mb-2">Tailored to your needs</h4>
                        <p className="nb-text-lg  nb-leading-relaxed nb-text-justify nb-mb-4">Is your project growing fast? If necessary, you can easily change your VPS package in the administration panel - just a few clicks.</p>
                            <Link to="#" className="nb-transition nb-duration-100 nb-ease-in-out nb-text-lg nb-font-semibold nb-text-primary-blue  nb-border-b-0 hover:nb-border-b-2 hover:nb-border-primary-red">View Linux KVM VPS <i className="las la-arrow-right nb-ml-1"></i></Link>
>>>>>>> 525aea0445d5cb5918eddf87b2f8c49346d14973

                    </div>
                    <div className="nb-order-2 nb-col-span-1">
                        <img className="nb-w-full" src={props.image} alt={props.title} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductFeatureImage;