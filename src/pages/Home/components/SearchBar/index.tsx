import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { UserContext } from '../../../../contexts/UserContext'
import { PublicationsCounter, SearchBarInput, SearchBarWrapper } from './styles'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const SearchQuerySchema = zod.object({
  query: zod.string(),
})

type SearchQueryType = zod.infer<typeof SearchQuerySchema>

export function SearchBar() {
  const { register, handleSubmit } = useForm<SearchQueryType>({
    resolver: zodResolver(SearchQuerySchema),
  })
  const { totalPosts, filterRepoIssues } = useContext(UserContext)

  function handleSearchQuerySubmit(data: SearchQueryType) {
    filterRepoIssues(data.query)
  }

  return (
    <SearchBarWrapper onSubmit={handleSubmit(handleSearchQuerySubmit)}>
      <PublicationsCounter>
        <strong>Publicações</strong>
        <span>
          {totalPosts} {totalPosts === 1 ? 'publicação' : 'publicações'}
        </span>
      </PublicationsCounter>
      <SearchBarInput placeholder="Buscar conteúdo" {...register('query')} />
    </SearchBarWrapper>
  )
}
