import React from 'react';
import Link from 'gatsby-link';

interface FooterProps {
    profileUrl: string;
    profileText: string;
    content: any;
    email: string;
}

export const Footer = (props: FooterProps) => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="content has-text-centered">
                    <p>
                        {props.content}
                    </p>
                    <p>
                        <strong>Website</strong> by <a href={props.profileUrl}>{props.profileText}</a>.
                        The source code is licensed <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.
                    </p>
                    <p>
                        <strong>Email</strong><a href={`mailto:${props.email}`}>{props.email}</a>
                    </p>
                </div>
            </div>
        </footer>
    )
}
