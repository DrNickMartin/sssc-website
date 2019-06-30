import React from 'react'
import PropTypes from 'prop-types'

import sclogo from '../images/SSSC.svg'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            {/* <span className="icon"></span> */}
            <img className="sclogo" src={sclogo}></img>
        </div>
        <div className="content">
            <div className="inner">
                <h1>South Shields</h1>
                <h1>Sailing Club</h1>
                <p>
                    A friendly, family club for dinghy, catamaran, and windsurfers, situated at the mouth of the river Tyne.
                    We are run wholly by friendly volunteers of all ages, and backgrounds.
                </p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('join')}}>Join</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('results')}}>Results</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>About</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
