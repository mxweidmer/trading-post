import React from 'react'

function NavBar (){
    return (
        <nav>
        <div className="nav-wrapper cyan darken-3">
            <a href="/" className="brand-logo center">The Trading Post</a>
            <ul id="nav-mobile" className="left hide-on-med-and-down">
                <li><a href="/"><img src={require('../../logo_trans.gif')} style={{'margin-bottom':'-10px', 'margin-right': '7px'}}></img>Home</a></li>
                <li><a href="/trading-post/item">Item Page</a></li>
            </ul>

            <ul className="right hide-on-med-and-down">
                <li><a className="waves-effect waves-light btn">Sign in<i
                            className="material-icons right">account_circle</i></a></li>
                <li><a className="waves-effect waves-light btn">Sign up<i
                            className="material-icons right">account_circle</i></a></li>

            </ul>
        </div>
    </nav>
    )
}

export default NavBar;