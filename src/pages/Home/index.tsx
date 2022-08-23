import { AuthorDetails } from './components/AuthorDetails'
import { Publications } from './components/Publications'
import { SearchBar } from './components/SearchBar'
import { HomeWrapper } from './styles'

export function Home() {
  document.title = 'GitHub Blog | Home'
  return (
    <HomeWrapper>
      <AuthorDetails />
      <SearchBar />
      <Publications />
    </HomeWrapper>
  )
}
