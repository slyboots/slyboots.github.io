import React from 'react';
import { Container } from '../components';


interface RepoQueryResultEdge {
  node: {
    id: string;
    url: string;
    homepageUrl: string;
    name: string;
    description: string;
    isArchived: boolean;
    isFork: boolean;
    createdAt: string;
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
  homepageUrl: string;
  name: string;
  description: string;
  isArchived: boolean;
  isFork: boolean;
  createdAt: string;
  avatar: string;
  primaryLanguage: any;
}

const Project = (props: ProjectProps) =>
  <tr>
    <th>{props.homepageUrl == null ? props.name : (<a href={props.homepageUrl}>{props.name}</a>)}</th>
    <th><a href={props.url}><span className="icon is-medium has-text-black"><i className="fab fa-github-square fa-2x"></i></span></a></th>
    <td>{props.description}</td>
    <td>
      {
        props.primaryLanguage ? (<span className="tag is-dark has-text-primary">{props.primaryLanguage.name}</span>) : null
      }
    </td>
    <td>
      {
        props.isFork ? (<span className="icon"><i className="fas fa-code-branch"></i></span>) : null
      }
    </td>
    <td>
      {
        props.isArchived ? (<span className="icon"><i className="fas fa-archive"></i></span>) : null
      }
    </td>
    {/* <td>{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(Date.parse(props.createdAt))}</td> */}
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
              <th><abbr title="Repository">Repo</abbr></th>
              <th>Description</th>
              <th><abbr title="Language">Lang</abbr></th>
              <th><abbr title="Forked">F</abbr></th>
              <th><abbr title="Archived">A</abbr></th>
              {/* <th>Last Updated</th> */}
            </tr>
          </thead>
          <tfoot>
            <tr>
              <th><abbr title="Project">Project</abbr></th>
              <th><abbr title="Repository">Repo</abbr></th>
              <th>Description</th>
              <th><abbr title="Language">Lang</abbr></th>
              <th><abbr title="Forked">F</abbr></th>
              <th><abbr title="Archived">A</abbr></th>
              {/* <th>Last Updated</th> */}
            </tr>
          </tfoot>
          <tbody>
            {
              data.githubViewer.repositories.edges.map((repoInfo: RepoQueryResultEdge) =>
                <Project
                  key={repoInfo.node.id}
                  avatar={data.githubViewer.avatarUrl}
                  description={repoInfo.node.description}
                  isArchived={repoInfo.node.isArchived}
                  isFork={repoInfo.node.isFork}
                  name={repoInfo.node.name}
                  createdAt={repoInfo.node.createdAt}
                  url={repoInfo.node.url}
                  homepageUrl={repoInfo.node.homepageUrl}
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
            id
            url
            name
            description
            isArchived
            isFork
            createdAt
            homepageUrl
            primaryLanguage {
              name
            }
          }
        }
      }
    }
  }`
