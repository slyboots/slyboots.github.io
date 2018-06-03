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
    const hasBrandText = props.brandText ? true : false;
    const hasBrandImg = props.brandImg ? true : false;
    const hasEndItems = props.endItems ? true : false;
    const startLinks = props.startItems;

    return (
        <nav className={`navbar ${props.isDark ? "is-dark" : ""}`} role="navigation">
            <div className="navbar-brand">
                <Link to="/" className="navbar-item navbar-link">
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
                        startLinks.map((startitem: NavBarItemProps) =>
                            <NavBarItem url={startitem.url} text={startitem.text} classes={startitem.classes} />
                        )
                    }
                </div>
                <div className="navbar-end">
                    {
                        props.endItems ? props.endItems.map((enditem: NavBarItemProps) =>
                            <NavBarItem url={enditem.url} text={enditem.text} classes={enditem.classes} />
                        ) : null
                    }
                </div>
            </div>
        </nav>
    )
}
