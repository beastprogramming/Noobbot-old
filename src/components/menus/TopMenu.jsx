import React, { useState } from "react";
import { Link } from "react-router-dom";

function TopMenu() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const handleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <>
      <div className="nb-top-nav nb-flex nb-justify-between nb-items-center nb-border-b nb-border-gray-200">
          <Link to="/" className="logo nb-px-2 lg:nb-px-8 nb-py-2 flex">
            {/* <img
              className="nb-h-8"
              src="/images/logoColored.svg"
              alt="Noobbot Logo"
            /> */}
            
          </Link>
          <ul className="nb-capitalize nb-text-lg nb-font-medium nb-text-gray-900 lg:nb-px-2 nb-pl-2 nb-pr-1 nb-flex nb-items-center">
            <li className="nb-border-r nb-pr-1 lg:nb-pr-2">
              <Link to="#" title="Search">
                <i className="la la-search la-2x"></i>
              </Link>
            </li>
            <li className="nb-flex nbitems-center nb-border-r nbpr-1 lg:nb-pr-2">
              <Link
                to="#"
                title="Login or Sign up"
                className="nb-ml-1 lg:nb-ml-3 nb-flex nb-items-center"
              >
                <i className="las la-user la-2x"></i>
                <span className="nb-hidden lg:nb-block">Sign In / Sign up</span>
              </Link>
            </li>
            <li className="">
              <Link to="#" title="Cart" className="nb-ml-1 lg:nb-ml-3">
                <i className="nb-relative las la-shopping-cart la-2x">
                  <span className="nb-absolute nb-top-0 nb-right-0 nb-text-sm">
                    0
                  </span>
                </i>
              </Link>
            </li>
            <div
              className="noobbot-mobile-menu nb-ml-8 xl:nb-hidden nb-cursor-pointer"
              onClick={handleMobileMenu}
            >
              <i
                className={
                  mobileMenu ? "las la-2x la-times" : "las la-2x la-bars"
                }
              ></i>
            </div>
          </ul>
      </div>
    </>
  );
}

export default TopMenu;
