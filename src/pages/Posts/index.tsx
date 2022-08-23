import { useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import {
  ControlBar,
  GoBackLink,
  GoToGitHubLink,
  PostContent,
  PostDetails,
  PostInfo,
  PostsWrapper,
  PostTitle,
} from './styles'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { useEffect, useState } from 'react'
import { gitHubIssuesApi } from '../../services/api'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import ReactMarkdown from 'react-markdown'

interface GitHubPostData {
  htmlUrl: string
  userLogin: string
  title: string
  createdAt: string
  comments: number
  content: string
}

export function Posts() {
  const [post, setPost] = useState<GitHubPostData | undefined>(undefined)
  const { id } = useParams<{ id: string }>()

  async function fetchIssueData(id: string) {
    const { data } = await gitHubIssuesApi.get(`/${id}`)
    setPost({
      htmlUrl: data.html_url,
      userLogin: data.user.login,
      title: data.title,
      createdAt: data.created_at,
      comments: data.comments,
      content: data.body,
    })
    document.title = 'GitHub Blog | ' + data.title
  }

  useEffect(() => {
    if (id) {
      fetchIssueData(id)
    }
  }, [id])

  if (!post) {
    return null
  }

  return (
    <PostsWrapper>
      <PostInfo>
        <ControlBar>
          <GoBackLink to="/">
            <FontAwesomeIcon icon={faChevronLeft} />
            Voltar
          </GoBackLink>
          <GoToGitHubLink href={post.htmlUrl} target="_blank" rel="noreferrer">
            Ver no GitHub
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </GoToGitHubLink>
        </ControlBar>
        <PostTitle>JavaScript data types and data structures</PostTitle>
        <PostDetails>
          <span>
            <FontAwesomeIcon icon={faGithub} />
            {post.userLogin}
          </span>
          <span>
            <FontAwesomeIcon icon={faCalendarDay} />
            {formatDistanceToNow(new Date(post.createdAt), {
              addSuffix: true,
              locale: ptBR,
            })}
          </span>
          <span>
            <FontAwesomeIcon icon={faComment} />
            {post.comments} {post.comments === 1 ? 'comentário' : 'comentários'}
          </span>
        </PostDetails>
      </PostInfo>
      <PostContent>
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </PostContent>
    </PostsWrapper>
  )
}
