import React from "react";
import Link from "gatsby-link";

import Container from '../components/container';
import Footer from '../components/footer';
import NavBar from '../components/nav-bar';

// import main stylesheet
import './index.scss';

export default ({ children }: any) => {
  const ghProfileName = "slyboots";
  const ghProfileUrl = "https://github.com/slyboots/";

  const navlinks = [
    { url: "/about/", text: "About" },
    { url: "/projects/", text: "Projects" }
  ];
  return (
    <div style={{ display: "flex", minHeight: "calc(100vh - 52px)", flexDirection: "column" }}>
      <NavBar startItems={navlinks} isDark={true}> </NavBar>
      <main style={{ flex: 1 }}>
        <Container>
          {children()}
        </Container>
      </main>
      <Footer
        profileUrl={ghProfileUrl}
        profileText={ghProfileName}
        content={(<em>"I may be a turkey dog, but at least I'm not a cow turtle!"<br /> ~Dakota Wisdom Lorance (2018)</em>)}>
      </Footer>
    </div>
  )
}
