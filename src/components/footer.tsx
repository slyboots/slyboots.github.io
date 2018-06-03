import React from 'react';
import Link from 'gatsby-link';

export interface FooterProps {
    profileUrl: string;
    profileText: string;
    content: any;
}

export const Footer = (props: FooterProps) => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="content has-text-centered">
                    <p>
                        {props.content}
                    </p>
                    <small>
                        <strong>Website</strong> by <a href={props.profileUrl}>{props.profileText}</a>. License: <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.
                    </small>
                </div>
            </div>
        </footer>
    )
}

export default Footer
