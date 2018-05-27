import * as React from 'react';
import Link from 'gatsby-link';
import styled from "styled-components";

// Please note that you can use https://github.com/dotansimha/graphql-code-generator
// to generate all types from graphQL schema
interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        title: string
      }
    }
  }
}

export default class extends React.Component<IndexPageProps, {}> {
  constructor(props: IndexPageProps, context: any) {
    super(props, context)
  }
  public render() {
    return (
      <div>
        <h1>Dakota, like the states.</h1>
        <p>
          Welcome to your new <strong>{this.props.data.site.siteMetadata.title}</strong> site.
        </p>
        <p>Now go build something great.
          <br />
          <Link to="/page-2/">Go to page 2</Link>
        </p>
        <p>Or look at random images.
          <br />
          <Link to="/random-page/">Random Image</Link>
        </p>
        <p>And don't forget the counter.
          <br />
          <Link to="/counter/">1,2,3...</Link>
        </p>
        <div style={{ margin: '3rem auto', maxWidth: 600 }}>
          <h1>Richard Hamming on Luck</h1>
          <div>
            <p>
              From Richard Hamming’s classic and must-read talk, “<a href="http://www.cs.virginia.edu/~robins/YouAndYourResearch.html">You and Your Research</a>”.
            </p>
            <blockquote>
              <p>
                There is indeed an element of luck, and no, there isn’t. The prepared
                mind sooner or later finds something important and does it. So yes, it is luck.{" "}
                <em>The particular thing you do is luck, but that you do something is not.</em>
              </p>
            </blockquote>
          </div>
          <p>Posted April 09, 2011</p>
        </div>
      </div>
    )
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

// const Container = styled.div`
//   margin: 3rem auto;
//   max-width: 600px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
// `;

// const UserWrapper = styled.div`
//   display: flex;
//   align-items: center;
//   margin: 0 auto 12px auto;
//   &:last-child {
//     margin-bottom: 0;
//   }
// `;

// const Avatar = styled.img`
//   flex: 0 0 96px;
//   width: 96px;
//   height: 96px;
//   margin: 0;
// `;

// const Description = styled.div`
//   flex: 1;
//   margin-left: 18px;
//   padding: 12px;
// `;

// const Username = styled.h2`
//   margin: 0 0 12px 0;
//   padding: 0;
// `;

// const Excerpt = styled.p`
//   margin: 0;
// `;

// interface UserProps {
//   avatar?: string;
//   username?: string;
//   excerpt?: string;

// }

// const User: React.StatelessComponent<UserProps> = props => (
//   <UserWrapper>
//     <Avatar src={props.avatar} alt="" />
//     <Description>
//       <Username>{props.username}</Username>
//       <Excerpt>{props.excerpt}</Excerpt>
//     </Description>
//     <Link to="/page-2/">Go to page 2</Link>
//   </UserWrapper>
// );

// export default () => (
//   <Container>
//     <h1>About Styled Components</h1>
//     <p>Styled Components is cool</p>
//     <User
//       username="Jane Doe"
//       avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
//       excerpt="I'm Jane Doe. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
//     />
//     <User
//       username="Bob Smith"
//       avatar="https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg"
//       excerpt="I'm Bob smith, a vertically aligned type of guy. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
//     />
//   </Container>
// );
