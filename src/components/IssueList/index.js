import React, { Component } from 'react';
import { Box } from 'reflexbox';
import IssueOpenIcon from 'react-icons/lib/go/issue-opened';
import CloseIcon from 'react-icons/lib/go/x';
import Dropdown from '../Dropdown';
import Issue from '../Issue';
import { getIssues } from '../../lib/github';
import { getUniqueAuthors, getUniqueLabels } from '../../lib/helpers';
import './style.css';

class IssueList extends Component {
  state = {
    issues: [],
    loading: true,
    error: false,
    filters: {},
  };

  componentDidMount() {
    this.fetchIssues();
  }

  handleFilter = (key, value) => {
    const { filters } = this.state;
    const newFilters = { ...filters, [key]: value };

    this.setState({
      ...this.state,
      filters: newFilters,
      loading: true,
    });

    this.fetchIssues(newFilters);
  };

  handleClearFilters = () => {
    this.setState({
      ...this.state,
      filters: {},
      loading: true,
    });

    this.fetchIssues({});
  };

  fetchIssues = async (filters = {}) => {
    const { owner, repo } = this.props;

    try {
      const response = await getIssues(owner, repo, filters);

      this.setState({
        ...this.state,
        issues: response,
        loading: false,
      });
    } catch (e) {
      this.setState({
        ...this.state,
        loading: false,
        error: e.message,
      });
    }
  };

  render() {
    const { issues, loading, error, filters } = this.state;
    const authors = getUniqueAuthors(issues);
    const labels = getUniqueLabels(issues);
    const hasFilters = Object.keys(filters).length > 0;

    if (loading) return <p>Fetching issues...</p>;

    if (error) return <p>Error: {error}</p>;

    return (
      <Box className="issue-list">
        {hasFilters && (
          <Box
            flex
            align="center"
            className="issue-list__clear-filters"
            onClick={this.handleClearFilters}
          >
            <CloseIcon /> Clear filters
          </Box>
        )}
        <Box flex justify="space-between" p={2} className="issue-list-header">
          <Box flex align="center">
            <IssueOpenIcon width={16} height={16} />
            <Box pl={2}>
              <strong>{issues.length} Open</strong>
            </Box>
          </Box>
          <Box flex>
            <Box mx={1}>
              <Dropdown
                label="Author"
                header="Filter by author"
                items={authors}
                selected={filters.creator}
                onSelect={value => this.handleFilter('creator', value)}
              />
            </Box>
            <Box mx={1}>
              <Dropdown
                label="Labels"
                header="Filter by label"
                items={labels}
                selected={filters.label}
                onSelect={value => this.handleFilter('labels', value)}
              />
            </Box>
          </Box>
        </Box>
        {issues.map(issue => <Issue key={issue.id} issue={issue} />)}
      </Box>
    );
  }
}

export default IssueList;
