import React from 'react';
import { Container } from '../components';

// const styles = require('../styles/projects.module.css');
// console.log(styles);

interface RepoQueryResultEdge {
  node: {
    url: string;
    name: string;
    description: string;
    isArchived: boolean;
    isFork: boolean;
    updatedAt: string;
    primaryLanguage: {
      name: string;
    }
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
  isArchived: boolean;
  isFork: boolean;
  updatedAt: string;
  avatar: string;
  primaryLanguage: any;
}

const Project = (props: ProjectProps) =>
  <tr>
    <th><a href={props.url}>{props.name}</a></th>
    <td>{props.description}</td>
    <td>
      {
        props.primaryLanguage ? (<span className="tag is-info">{props.primaryLanguage.name}</span>) : null
      }
    </td>
    <td>
      {
        props.isFork ? (<span className="icon"><i className="fas fa-check"></i></span>) : null
      }
    </td>
    <td>
      {
        props.isArchived ? (<span className="icon"><i className="fas fa-check"></i></span>) : null
      }
    </td>
    <td>{props.updatedAt}</td>
  </tr>

export default ({ data }: RepoQueryResult) => {
  return (
    <div>
      <h1 className="title is-1">Projects</h1>
      <h2 className="subtitle is-3">{data.githubViewer.bio}</h2>
      <Container>
        <h3 className="title is-3">Active Projects: {data.githubViewer.repositories.totalCount}</h3>
        <table className="table">
          <thead>
            <tr>
              <th><abbr title="Project">Project</abbr></th>
              <th>Description</th>
              <th><abbr title="Language">Lang</abbr></th>
              <th><abbr title="Forked">F</abbr></th>
              <th><abbr title="Archived">A</abbr></th>
              <th>Last Updated</th>
            </tr>
          </thead>
          <tfoot>
            <tr>
              <th><abbr title="Project">Project</abbr></th>
              <th>Description</th>
              <th><abbr title="Language">Lang</abbr></th>
              <th><abbr title="Forked">F</abbr></th>
              <th><abbr title="Archived">A</abbr></th>
              <th>Last Updated</th>
            </tr>
          </tfoot>
          <tbody>
            {
              data.githubViewer.repositories.edges.map((repoInfo: RepoQueryResultEdge, index: number) =>
                <Project
                  key={index}
                  avatar={data.githubViewer.avatarUrl}
                  description={repoInfo.node.description}
                  isArchived={repoInfo.node.isArchived}
                  isFork={repoInfo.node.isFork}
                  name={repoInfo.node.name}
                  updatedAt={repoInfo.node.updatedAt}
                  url={repoInfo.node.url}
                  primaryLanguage={repoInfo.node.primaryLanguage}
                ></Project>)
            }
          </tbody>
        </table>
      </Container>
    </div>
  )
}


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
            primaryLanguage {
              name
            }
          }
        }
      }
    }
  }`
