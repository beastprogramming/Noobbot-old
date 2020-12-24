import React from 'react';
import {Link} from 'react-router-dom';

function FeatureWithIconOne(){
    return(
        <>
            <section className="nb-py-8">
            <div className="nb-container nb-p-4">
                <div className="nb-grid nb-grid-cols-1">
                    <div className="pl-4">
                        <h2 className="nb-text-2xl md:nb-text-3xl lg:nb-text-4xl nb-text-primary-bunty nb-font-bold italic">Why choose Noobbot to help you get started with hosting?</h2>
                    </div>
                </div>
                <div className="nb-grid nb-grid-cols-1 md:nb-grid-cols-2 lg:nb-grid-cols-4 nb-my-8">
                    <div className="nb-p-4">
                        <i className=" nb-mb-2 la-3x las la-cog nb-text-primary-blue" title="Super Easy to Use"></i>
                        <h1 className="nb-text-xl nb-font-bold nb-mb-2">Super Easy to Use</h1>
                        <h2 className="nb-text-sm nb-tracking-wider">Our control panel is extremely user-friendly. Getting your website live is as simple as a click away.</h2>
                    </div>

                    <div className="nb-p-4">
                        <i className=" nb-mb-2 la-3x las la-tachometer-alt nb-text-primary-red" title="One of the Worlds best uptime."></i>
                        <h1 className="nb-text-xl nb-font-bold nb-mb-2">99.9% Uptime</h1>
                        <h2 className="nb-text-sm nb-tracking-wider">The availability of your website is our top priority. We stand by that fact with our uptime guarantee!</h2>
                    </div>

                    <div className="nb-p-4">
                        <i className=" nb-mb-2 la-3x las la-hand-holding-usd nb-text-primary-bunty" title="Guarantee Money Back If You don't love us."></i>
                        <h1 className="nb-text-xl nb-font-bold nb-mb-2">Money-back Guarantee</h1>
                        <h2 className="nb-text-sm nb-tracking-wider">Try us and love us, or get a refund within 100 days of signing up. Your satisfaction is our top priority.</h2>
                    </div>

                    <div className="nb-p-4">
                        <i className=" nb-mb-2 la-3x las la-trophy nb-text-primary-green" title="Built for Success"></i>
                        <h1 className="nb-text-xl nb-font-bold nb-mb-2">Built for Success</h1>
                        <h2 className="nb-text-sm nb-tracking-wider">Get all websites + marketing tools in one place. Boost your website’s global reach easily.</h2>
                    </div>

                    <div className="nb-p-4">
                        <i className=" nb-mb-2 la-3x las la-rocket nb-text-primary-blue" title="Speed Really Maters!"></i>
                        <h1 className="nb-text-xl nb-font-bold nb-mb-2">Speed Really Maters!</h1>
                        <h2 className="nb-text-sm nb-tracking-wider">We use cloud and computing cutting edge technologies that we know and understand to boost your website speed with up to 30 times.</h2>
                    </div>

                    <div className="nb-p-4">
                        <i className=" nb-mb-2 la-3x lab la-weebly nb-text-primary-red" title="Create a website in minutes"></i>
                        <h1 className="nb-text-xl nb-font-bold nb-mb-2">Create website in minutes</h1>
                        <h2 className="nb-text-sm nb-tracking-wider">No expensive designers or programmers required with our website builder!</h2>
                    </div>

                    <div className="nb-p-4">
                        <i className=" nb-mb-2 la-3x las la-user-tie nb-text-primary-bunty" title="Independently owned and operated"></i>
                        <h1 className="nb-text-xl nb-font-bold nb-mb-2">Independently owned</h1>
                        <h2 className="nb-text-sm nb-tracking-wider">We are committed to our customers, not chasing a stock price.</h2>
                    </div>

                    <div className="nb-p-4">
                        <i className=" nb-mb-2 la-3x las la-lock nb-text-primary-green" title="Committed to security"></i>
                        <h1 className="nb-text-xl nb-font-bold nb-mb-2">Committed to security</h1>
                        <h2 className="nb-text-sm nb-tracking-wider">We take security seriously. Our servers have enhanced security features, firewalls, and intrusion detection.</h2>
                    </div>

                </div>
            </div>
        </section>
        </>
    )
}

export default FeatureWithIconOne;