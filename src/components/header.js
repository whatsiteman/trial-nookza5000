import { Link } from "gatsby"
import React, { useState, useRef } from 'react';
import logo from '../images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Header = ({ path, site }) => {
  const [collapse, setCollapse] = useState(true);

  const sMain = useRef(null)
  const sAbout = useRef(null)
  const executeScroll = (ref) => ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' })

  return (
    <header id="header">
      <div className="" id="header-wrap">
        <div className="container clearfix">
          <div id="primary-menu-trigger" onClick={() => setCollapse(!collapse)} onKeyDown={() => setCollapse(!collapse)} role="button" tabIndex="-1">
            <FontAwesomeIcon icon={faBars} />
          </div>
          <div className="row clearfix">
            <div className="col-lg-5 col-12">
              <div id="logo">
                <Link className="brand-logo" to="/">
                  <img src={logo} alt={site.siteMetadata.title} />
                </Link>
              </div>
            </div>
            <div className="col-lg-7 col-12">
              <nav id="primary-menu">
                <ul className={`one-page-menu  ${collapse ? '' : 'd-block'}`}>
                  <li className={path === "home" ? "current" : ""}>
                    <button onClick={() => executeScroll(sMain)}>
                      หน้าแรก
                    </button>
                  </li>
                  <li className={path === "feature" ? "current" : ""}>
                    <button onClick={() => executeScroll(sMain)}>
                      เกี่ยวกับเรา
                    </button>
                  </li>
                  <li className={path === "template" ? "current" : ""}>
                    <button onClick={() => executeScroll(sMain)}>
                      บริการ
                    </button>
                  </li>
                  <li className={path === "supportus" ? "current" : ""}>
                    <button onClick={() => executeScroll(sMain)}>
                      ติดต่อเรา
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  )

}

Header.defaultProps = {
  stickyHeader: true,
  path: ""
}

export default Header;