import React from 'react';
import Link from 'gatsby-link';

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
        <h1 className="title is-1">Dakota</h1>
        <h2 className="subtitle is-3">Like the states.</h2>
        <p className="content">
          Nothing fancy here. Just a simple site for hosting my projects and ideas.
        </p>
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
