import React from 'react';
import Link from 'gatsby-link';

export interface NavBarItemProps {
    text: string;
    classes?: string;
    url: string;
}

export interface NavBarProps {
    brandText?: string;
    brandImg?: string;
    startItems: NavBarItemProps[];
    endItems?: NavBarItemProps[];
    isDark?: boolean;
}

export const NavBarItem = (props: NavBarItemProps) => {
    return (
        <Link to={props.url} className={`navbar-item ${props.classes}`} >
            {props.text}
        </Link>
    )
}

export const NavBar = (props: NavBarProps) => {
    return (
        <nav className={`navbar is-fixed-top ${props.isDark ? "is-dark" : ""}`} role="navigation">
            <div className="container">
                <div className="navbar-brand">
                    <Link to="/" className="navbar-item">
                        {
                            props.brandText ? (props.brandText) :
                                (props.brandImg ? <img src={props.brandImg} /> :
                                    'Home')
                        }
                    </Link>
                </div>
                <div className="navbar-menu">
                    <div className="navbar-start">
                        {
                            props.startItems ? props.startItems.map((startitem: NavBarItemProps) =>
                                <NavBarItem key={`start-${startitem.text}`} url={startitem.url} text={startitem.text} classes={startitem.classes} />
                            ) : null
                        }
                    </div>
                    <div className="navbar-end">
                        {
                            props.endItems ? props.endItems.map((enditem: NavBarItemProps) =>
                                <NavBarItem key={`end-${enditem.text}`} url={enditem.url} text={enditem.text} classes={enditem.classes} />
                            ) : null
                        }
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
