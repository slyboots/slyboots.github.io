import React from "react";
import Link from "gatsby-link";

export interface HeroHeaderProps {
    title: string;
    subtitle: string;
}


export const HeroHeader = (props: any) =>
    <header className="hero">
        <div className="hero-body">
            <div className="container">
                <h1 className="title">{props.title}</h1>
                <h2 className="subtitle">{props.subtitle}</h2>
            </div>
        </div>
    </header>

export default HeroHeader
