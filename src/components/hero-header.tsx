import React from "react";
import Link from "gatsby-link";

interface HeroHeaderProps {
    title: string;
    subtitle: string;
}


const HeroHeader = (props: any) =>
    <header className="hero">
        <div className="hero-body">
            <div className="container">
                <h1 className="title">{props.title}</h1>
                <h2 className="subtitle">{props.subtitle}</h2>
            </div>
        </div>
    </header>
