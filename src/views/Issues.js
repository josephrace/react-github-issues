import React, { Component } from 'react';
import Container from '../components/Container';
import IssueList from '../components/IssueList';

class Issues extends Component {
  state = {
    owner: 'webpack',
    repo: 'webpack-cli',
  };

  render() {
    const { owner, repo } = this.state;

    return (
      <Container>
        <h1>
          {owner}/{repo} Issues
        </h1>
        <IssueList owner={owner} repo={repo} />
      </Container>
    );
  }
}

export default Issues;
