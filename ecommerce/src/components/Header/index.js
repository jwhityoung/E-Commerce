import React from 'react';
import { connect } from 'react-redux';
import './styles.scss';
import { Link } from 'react-router-dom';
import { auth } from './../../firebase/utils';
import userReducer from '../../redux/user/user.reducer';
// import Logo from './../../assets/logo.png'

const Header = props => {
    const { currentUser } = props;
    return (
        <header className="header">
            <div className="wrap">
                <div className="logo">
                    <Link to="/">
                        {/* <img src={Logo} alt="logo"></img> */}
                    </Link>
                </div>
                <div className="register">
                    {currentUser && (
                        <ul>
                            <li>
                                <span onClick={() => auth.signOut()}>
                                    Logout
           </span>
                            </li>
                        </ul>
                    )}
                    {!currentUser && (

                        <ul>
                            <li>
                                <Link to="/registration">
                                    Register
       </Link>
                            </li>
                            <li>
                                <Link to="/login">
                                    Login
       </Link>
                            </li>
                        </ul>
                    )}

                </div>
            </div>
        </header>
    );
};

Header.defaultProps = {
    currentUser: null
}

const mapStateToProps = ({ user }) => ({
currentUser: user.currentUser
});

export default connect(mapStateToProps, null)(Header);
