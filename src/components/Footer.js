import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <p className="copyright">&copy; South Shields Sailing Club. Made with <span>&#9829;</span> by <a href="https://github.com/DrNickMartin">Nick Martin</a>. Based a <a href="https://html5up.net">HTML5 UP</a> template.</p>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
