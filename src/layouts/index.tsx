import React from "react";
import Link from "gatsby-link";

interface ListLinkProps {
  to: string;
  children: any;
}

interface FooterLinkProps {
  to: string;
  id?: string;
  children?: any;
}

const ListLink = (props: ListLinkProps) =>
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>
      {props.children}
    </Link>
  </li>

const FooterLink = (props: FooterLinkProps) =>
  <li style={{ display: `inline-block`, marginRight: `.5rem` }} id={props.id}>
    <Link to={props.to}>
      {props.children}
    </Link>
  </li>


const SimpleFooter = (props: any) =>
  <footer style={{ height: `6rem`, width: `100%`, backgroundColor: `#16161D` }}>
    <div style={{ margin: `0 auto`, width: `80%`, backgroundColor: `#FFFFFF` }}>
      <ul style={{ listStyle: `none`, margin: `auto`, padding: `.5rem` }}>
        <FooterLink to={`mailto:dakota@likethestates.com`} id={`email`}>Email Me!</FooterLink>
        <FooterLink to={`https://github.com/slyboots/`} id={`github`}>Github</FooterLink>
        <div>{props.children}</div>
      </ul>
    </div>
  </footer>

export default ({ children }: any) => (
  <div style={{ height: `100%`, margin: `0 auto`, maxWidth: 800, padding: 0 }}>
    <header style={{ marginBottom: `1.5rem` }}>
      <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
        <h3 style={{ display: `inline` }}>MySweetSite</h3>
      </Link>
      <ul style={{ listStyle: `none`, float: `right` }}>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
      </ul>
    </header>
    <div style={{ minHeight: `100%`, marginBottom: `-6rem` }}>
      {children()}
      <div id={`push`} style={{ height: `6rem` }}></div>
    </div>
    <SimpleFooter><em>"I may be a turkey dog, but at least I'm not a cow turtle!"<br /> ~Dakota Wisdom Lorance (2018)</em></SimpleFooter>
  </div >
);
