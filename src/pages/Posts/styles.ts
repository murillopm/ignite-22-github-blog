import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const PostsWrapper = styled.div`
  width: 100%;
  max-width: 864px;
  margin: -88px auto 10rem;
`

export const PostInfo = styled.div`
  padding: 32px;
  background-color: ${(props) => props.theme['base-profile']};
  border-radius: 10px;
`

export const ControlBar = styled.div`
  display: flex;
  justify-content: space-between;
`

export const GoBackLink = styled(Link)`
  text-decoration: none;
  display: flex;
  gap: 8px;
  align-items: center;
  color: ${(props) => props.theme.blue};
  font-weight: bold;
  font-size: 0.75rem;
  line-height: 160%;
  text-transform: uppercase;

  svg {
    height: 12px;
    width: 12px;
  }
`

export const GoToGitHubLink = styled.a`
  margin-top: -1px;
  margin-right: -1px;
  display: flex;
  gap: 8px;
  align-items: center;
  font-weight: bold;
  font-size: 0.75rem;
  line-height: 160%;
  text-transform: uppercase;
  text-decoration: none;
  color: ${(props) => props.theme.blue};
  border: 1px solid ${(props) => props.theme['base-profile']};

  svg {
    height: 12px;
    width: 12px;
  }

  :hover {
    border-bottom-color: ${(props) => props.theme.blue};
  }
`

export const PostTitle = styled.h1`
  margin-top: 20px;
  font-weight: bold;
  line-height: 130%;
  font-size: 1.5rem;
  color: ${(props) => props.theme['base-title']};
`

export const PostDetails = styled.div`
  margin-top: 8px;
  display: flex;
  gap: 32px;

  span {
    display: flex;
    align-items: center;
    text-decoration: none;
    line-height: 160%;
    gap: 8px;
    color: ${(props) => props.theme['base-span']};

    svg {
      height: 18px;
      width: 18px;
      color: ${(props) => props.theme['base-label']};
    }
  }
`

export const PostContent = styled.main`
  padding: 40px 32px;
  line-height: 160%;
  color: ${(props) => props.theme['base-text']};
  text-align: justify;

  p,
  h3 {
    margin-bottom: 10px;
  }

  a {
    color: ${(props) => props.theme.blue};
  }

  pre {
    margin-top: 20px;
    padding: 16px;
    border-radius: 2px;
    font-family: 'Fira Code', monospace;
    background-color: ${(props) => props.theme['base-post']};
  }
`
