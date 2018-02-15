import axios from 'axios';

const github = axios.create({
  baseURL: 'https://api.github.com/',
});

github.interceptors.response.use(
  response => response.data,
  error => Promise.reject(error.response.data)
);

export const getIssues = async (owner, repo, params = {}) =>
  await github.get(`repos/${owner}/${repo}/issues`, { params });
