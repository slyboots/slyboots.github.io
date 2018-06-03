import React from 'react';
import Container from '../components/container';

const styles = require('../styles/projects.module.css');
console.log(styles);

interface RepoQueryResultEdge {
  node: {
    url: string;
    name: string;
    description: string;
    isPrivate: boolean;
    isArchived: boolean;
    isFork: boolean;
    updatedAt: string;
  }
}
interface RepoQueryResult {
  data: {
    githubViewer: {
      name: string;
      bio: string;
      avatarUrl: string;
      repositories: {
        totalCount: number;
        edges: RepoQueryResultEdge[]
      }
    }
  }
}
interface ProjectProps {
  url: string;
  name: string;
  description: string;
  isPrivate: boolean;
  isArchived: boolean;
  isFork: boolean;
  updatedAt: string;
  avatar: string;
  styles: any;
}

const Project = (props: ProjectProps) =>
  <div className={styles.project}>
    <img src={props.avatar} className={styles.avatar} alt="" width="64px" />
    <div className={styles.details}>
      <h2 className={styles.name}>
        {
          props.isPrivate ?
            props.name :
            (<a href={props.url} target="_blank">{props.name}</a>)
        }
      </h2>
      <p className={styles.description}>
        {props.description}
      </p>
    </div>
    <div className={styles.tags}>
      <span className={styles.tag}>{props.isArchived ? `Archived` : `Active`}</span>
      {props.isFork && <span className={styles.tag}>Fork</span>}
    </div>
    <div className={styles.tags}>
      <small>{props.updatedAt}</small>
    </div>
  </div >

export default ({ data }: RepoQueryResult) =>
  <Container>
    <h1>
      Projects
    </h1>
    <blockquote>{data.githubViewer.bio}</blockquote>
    {
      data.githubViewer.repositories.edges.map((repoInfo: RepoQueryResultEdge, index: number) =>
        <Project
          key={index}
          avatar={data.githubViewer.avatarUrl}
          description={repoInfo.node.description}
          isArchived={repoInfo.node.isArchived}
          isFork={repoInfo.node.isFork}
          isPrivate={repoInfo.node.isPrivate}
          name={repoInfo.node.name}
          updatedAt={repoInfo.node.updatedAt}
          url={repoInfo.node.url}
          styles={styles}
        ></Project>
      )
    }
  </Container >

export const query = graphql`
  query RepoQuery {
    githubViewer {
      name
      bio
      avatarUrl
      repositories {
        totalCount
        edges {
          node {
            url
            name
            description
            isArchived
            isFork
            updatedAt
          }
        }
      }
    }
  }`
