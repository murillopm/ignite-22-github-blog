import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Publications } from './components/Publications'
import { SearchBar } from './components/SearchBar'
import {
  AuthorCard,
  AuthorContactDetails,
  AuthorData,
  AuthorDataWrapper,
  AuthorDescription,
  HomeWrapper,
} from './styles'

export function Home() {
  return (
    <HomeWrapper>
      <AuthorCard>
        <img src="https://github.com/murillopm.png" alt="" />
        <AuthorDataWrapper>
          <AuthorData>
            <strong>Murillo Mesquita</strong>
            <a href="#">
              GitHub
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </AuthorData>
          <AuthorDescription>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </AuthorDescription>
          <AuthorContactDetails>
            <span>
              <FontAwesomeIcon icon={faGithub} />
              <span>murillopm</span>
            </span>
            <span>
              <FontAwesomeIcon icon={faBuilding} />
              <span>Rocketseat</span>
            </span>
            <span>
              <FontAwesomeIcon icon={faUserGroup} />
              <span>32 seguidores</span>
            </span>
          </AuthorContactDetails>
        </AuthorDataWrapper>
      </AuthorCard>

      <SearchBar />

      <Publications />
    </HomeWrapper>
  )
}
