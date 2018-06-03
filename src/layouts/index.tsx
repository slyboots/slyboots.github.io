import React from "react";
import Link from "gatsby-link";

import { NavBar, NavBarItemProps, Footer } from '../components';

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
    <a href={props.to}>
      {props.children}
    </a>
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

export default ({ children }: any) => {
  const ghProfileName = "slyboots";
  const ghProfileUrl = "https://github.com/slyboots/";
  const email = "dlorwisdom@gmail.com";

  const navlinks: NavBarItemProps[] = [
    { url: "/about/", text: "About" },
    { url: "/contact/", text: "Contact" }
  ];
  return (
    <div className="container">
      <NavBar startItems={navlinks} isDark={true}> </NavBar>
      <section className="section">
        <div className="container">
          {children()}
        </div>
      </section>
      <Footer
        email={email}
        profileUrl={ghProfileUrl}
        profileText={ghProfileName}
        content={(<em>"I may be a turkey dog, but at least I'm not a cow turtle!"<br /> ~Dakota Wisdom Lorance (2018)</em>)}>
      </Footer>
    </div >
  )
}
