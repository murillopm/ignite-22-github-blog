import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { useContext } from 'react'
import { UserContext } from '../../../../contexts/UserContext'
import {
  CardContentText,
  CardTitleWrapper,
  PublicationCard,
  PublicationsWrapper,
} from './styles'

export function Publications() {
  const { posts } = useContext(UserContext)

  return (
    <PublicationsWrapper>
      {posts &&
        posts.map((post) => (
          <PublicationCard to={`/posts/${post.number}`} key={post.number}>
            <CardTitleWrapper>
              <strong>{post.title}</strong>
              <span>
                {formatDistanceToNow(new Date(post.createdAt), {
                  addSuffix: true,
                  locale: ptBR,
                })}
              </span>
            </CardTitleWrapper>
            <CardContentText>{post.content}</CardContentText>
          </PublicationCard>
        ))}
    </PublicationsWrapper>
  )
}
