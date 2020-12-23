import React from 'react';

function FooterBottom() {
    return (
        <>
        <div className="nb-px-4 md:nb-px-8 lg:nb-px-12 nb-text-white">
            <div className="nb-border-t nb-border-opacity-25 nb-border-white">
                <div className="nb-grid nb-grid-cols-1 md:nb-grid-cols-3 nb-gap-4 nb-py-2 ">
                <div className="">
                    <ul className="nb-flex nb-item-center">
                    <li className="nb-text-sm nb-text-white hover:nb-text-white nb-pr-2 nb-border-r" hover:nb-text-opacity-75=""><a href="#">Privacy
                        Policy</a> </li>
                    <li className="nb-text-sm nb-text-white hover:nb-text-white hover:nb-text-opacity-75 nb-pl-2"><a href="#">Legal
                        Agreements</a></li>
                    </ul>
                </div>
                <div className="">
                    <ul className="nb-flex nb-item-center">
                    <li className=" nb-text-2xl nb-text-white hover:nb-text-white nb-mr-2"><a href="#"><i className="lab la-facebook"></i></a>
                    </li>
                    <li className=" nb-text-2xl nb-text-white hover:nb-text-white nb-mr-2"><a href="#"><i className="lab la-instagram"></i></a>
                    </li>
                    <li className=" nb-text-2xl nb-text-white hover:nb-text-white nb-mr-2"><a href="#"><i className="lab la-youtube"></i></a>
                    </li>
                    <li className=" nb-text-2xl nb-text-white hover:nb-text-white nb-mr-2"><a href="#"><i className="lab la-patreon"></i></a>
                    </li>
                    </ul>
                </div>
                <div className="">
                    <div className="nb-flex nb-items-center md:justify-end">
                    <p className="nb-text-sm nb-text-white">Made with ❤ in Mumbai &copy; 2020 Noobbot</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default FooterBottom;