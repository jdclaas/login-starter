import React, { Component } from 'react'
import './Header.css'

class Header extends Component {
    componentWillUnmount() {
        window.clearTimeout(this.timeout)
    }
    render() {
        return (
            <div>
                This is the Header!
            </div>
        )
    }
}

export default Header