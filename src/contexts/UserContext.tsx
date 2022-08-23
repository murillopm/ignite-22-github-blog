/* eslint-disable camelcase */

import { createContext, ReactNode, useEffect, useState } from 'react'
import { gitHubSearchApi, gitHubUsersApi } from '../services/api'

type GitHubUser = {
  login: string
  name: string
  bio: string
  company: string
  followers: string
}

type GitHubIssue = {
  url: string
  number: number
  title: string
  user: {
    login: string
  }
  comments: number
  createdAt: string
  content: string
}

type GitHubIssueResponse = {
  url: string
  number: number
  title: string
  user: {
    login: string
  }
  comments: number
  created_at: string
  body: string
}

interface UserContextProviderProps {
  children: ReactNode
}

interface GitHubSearchApiResponse {
  total_count: number
  items: GitHubIssueResponse[]
}

interface UserContextData {
  user: GitHubUser | undefined
  posts: GitHubIssue[] | undefined
  totalPosts: number
  filterRepoIssues: (query?: string) => void
}

const username = import.meta.env.VITE_GITHUB_USERNAME
const repo = import.meta.env.VITE_GITHUB_REPO

export const UserContext = createContext({} as UserContextData)

export function UserContextProvider({ children }: UserContextProviderProps) {
  const [user, setUser] = useState<GitHubUser | undefined>(undefined)
  const [posts, setPosts] = useState<GitHubIssue[] | undefined>(undefined)
  const [totalPosts, setTotalPosts] = useState(0)
  const [hasAnyFilterActive, setHasAnyFilterActive] = useState(false)

  async function getUserData() {
    const { data } = await gitHubUsersApi.get<GitHubUser>('')
    const { login, name, bio, company, followers } = data
    setUser({
      login,
      name,
      bio,
      company,
      followers,
    })
  }

  async function fetchRepoIssues(query?: string) {
    const { data } = await gitHubSearchApi.get<GitHubSearchApiResponse>('', {
      params: { q: `repo:${username}/${repo}` },
    })

    const issuesList: GitHubIssue[] = data.items.map((issue) => {
      const { comments, body, created_at, number, title, url, user } = issue

      return {
        url,
        number,
        comments,
        title,
        user,
        content: body,
        createdAt: created_at,
      }
    })

    setPosts(issuesList)
    setTotalPosts(data.total_count)
  }

  async function filterRepoIssues(query?: string) {
    if (!hasAnyFilterActive && query === '') {
      return
    }

    const q =
      query && query !== ''
        ? `${query} repo:${username}/${repo}`
        : `repo:${username}/${repo}`
    const { data } = await gitHubSearchApi.get<GitHubSearchApiResponse>('', {
      params: { q },
    })

    const issuesList: GitHubIssue[] = data.items.map((issue) => {
      const { comments, body, created_at, number, title, url, user } = issue

      return {
        url,
        number,
        comments,
        title,
        user,
        content: body,
        createdAt: created_at,
      }
    })

    setPosts(issuesList)
    setTotalPosts(data.total_count)

    if (query && query !== '') {
      setHasAnyFilterActive(true)
    } else {
      setHasAnyFilterActive(false)
    }
  }

  useEffect(() => {
    getUserData()
    fetchRepoIssues()
  }, [])

  return (
    <UserContext.Provider value={{ user, posts, totalPosts, filterRepoIssues }}>
      {children}
    </UserContext.Provider>
  )
}
