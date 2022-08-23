import axios from 'axios'

const username = import.meta.env.VITE_GITHUB_USERNAME
const repo = import.meta.env.VITE_GITHUB_REPO

export const gitHubUsersApi = axios.create({
  baseURL: `https://api.github.com/users/${username}`,
})

export const gitHubSearchApi = axios.create({
  baseURL: 'https://api.github.com/search/issues',
})

export const gitHubIssuesApi = axios.create({
  baseURL: `https://api.github.com/repos/${username}/${repo}/issues`,
})
