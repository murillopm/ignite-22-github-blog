import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const PublicationsWrapper = styled.ul`
  margin-top: 48px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;

  a {
    text-decoration: none;
  }
`

export const PublicationCard = styled(Link)`
  width: 100%;
  height: 260px;
  padding: 30px;
  border-radius: 10px;
  background-color: ${(props) => props.theme['base-post']};
  border: 2px solid ${(props) => props.theme['base-post']};

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;

  :hover {
    border: 2px solid ${(props) => props.theme['base-label']};
  }

  :focus {
    border: 2px solid ${(props) => props.theme['base-label']};
  }
`

export const CardTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;

  strong {
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-title']};
    line-height: 160%;
    max-width: 283px;
  }

  span {
    margin-top: 5px;
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-span']};
    line-height: 160%;
  }
`

export const CardContentText = styled.p`
  color: ${(props) => props.theme['base-text']};
  line-height: 160%;

  display: -webkit-box;
  max-height: 112px;
  overflow: hidden;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
`
