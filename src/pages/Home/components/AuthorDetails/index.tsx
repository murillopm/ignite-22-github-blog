import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext } from 'react'
import { UserContext } from '../../../../contexts/UserContext'
import {
  AuthorCard,
  AuthorContactDetails,
  AuthorData,
  AuthorDataWrapper,
  AuthorDescription,
} from './styles'

export function AuthorDetails() {
  const { user } = useContext(UserContext)

  return (
    <AuthorCard>
      {user && (
        <>
          <img src={`https://github.com/${user.login}.png`} alt="" />
          <AuthorDataWrapper>
            <AuthorData>
              <strong>{user.name}</strong>
              <a
                href={`https://github.com/${user.login}`}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>
            </AuthorData>
            <AuthorDescription>{user.bio}</AuthorDescription>
            <AuthorContactDetails>
              <span>
                <FontAwesomeIcon icon={faGithub} />
                <span>{user.login}</span>
              </span>
              {user.company && (
                <span>
                  <FontAwesomeIcon icon={faBuilding} />
                  <span>{user.company}</span>
                </span>
              )}
              <span>
                <FontAwesomeIcon icon={faUserGroup} />
                <span>
                  {user.followers}{' '}
                  {Number(user.followers) === 1 ? 'seguidor' : 'seguidores'}
                </span>
              </span>
            </AuthorContactDetails>
          </AuthorDataWrapper>
        </>
      )}
    </AuthorCard>
  )
}
