import React from 'react';
import { Link } from 'react-router-dom';

function NavBar(props) {

    let showSignIn = true
    let showSignOut = false
    if (props.isLoggedIn) {
        showSignIn = false
        showSignOut = true
    }

    const logout = () => {
        sessionStorage.removeItem("UserId");
    }

    return (
        <nav>
            <div className="nav-wrapper cyan darken-3">
                <Link to="/trading-post"><span className="brand-logo center">The Trading Post</span></Link>
                <ul id="nav-mobile" className="left hide-on-med-and-down">
                    <li><a href="/trading-post"><img src={require('../../logo_trans.gif')} style={{ 'margin-bottom': '-10px', 'margin-right': '7px' }}></img>Home</a></li>
                    {sessionStorage.getItem("UserId") ? <li><a href={"/trading-post/profile/" + sessionStorage.getItem("UserId")} >Profile</a></li> : console.log("not logged in")}
                </ul>

                <ul className="right hide-on-med-and-down">
                    {/* {showSignIn && (<li><a className="waves-effect waves-light btn" href="/trading-post/signin">Sign In<i
                        className="material-icons right">account_circle</i></a></li>)} */}
                        <li><Link to="/trading-post/signin">Sign In</Link></li>
                    {showSignOut && (<li><a className="waves-effect waves-light btn" onClick={logout}>Sign Out<i
                        className="material-icons right">account_circle</i></a></li>)}

                    {/* <li><a className="waves-effect waves-light btn" href="/trading-post/signup">Sign up<i
                        className="material-icons right">account_circle</i></a></li> */}
                        <Link to="/trading-post/signup">Sign Up</Link>
                </ul>
            </div>
        </nav>
    )
}


export default NavBar;