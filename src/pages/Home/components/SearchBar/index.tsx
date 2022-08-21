import { PublicationsCounter, SearchBarInput, SearchBarWrapper } from './styles'

export function SearchBar() {
  return (
    <SearchBarWrapper>
      <PublicationsCounter>
        <strong>Publicações</strong>
        <span>6 publicações</span>
      </PublicationsCounter>
      <SearchBarInput placeholder="Buscar conteúdo" />
    </SearchBarWrapper>
  )
}
