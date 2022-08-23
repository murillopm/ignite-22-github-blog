import styled from 'styled-components'

export const AuthorCard = styled.section`
  width: 100%;
  padding: 2rem 2rem 2rem 2.5rem;
  background-color: ${(props) => props.theme['base-profile']};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  img {
    width: 148px;
    height: 100%;
    border-radius: 8px;
  }
`

export const AuthorDataWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const AuthorData = styled.div`
  display: flex;
  justify-content: space-between;

  strong {
    line-height: 130%;
    font-weight: bold;
    color: ${(props) => props.theme['base-title']};
    font-size: 1.5rem;
  }

  a {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 0.75rem;
    font-weight: bold;
    line-height: 160%;
    text-decoration: none;
    text-transform: uppercase;
    cursor: pointer;
    color: ${(props) => props.theme.blue};
    border: 1px solid ${(props) => props.theme['base-profile']};

    svg {
      height: 12px;
      width: 12px;
    }

    :hover {
      border-bottom: 1px solid ${(props) => props.theme.blue};
    }
  }
`

export const AuthorDescription = styled.p`
  margin-top: 8px;
  color: ${(props) => props.theme['base-text']};
  line-height: 160%;
`

export const AuthorContactDetails = styled.div`
  margin-top: 24px;
  display: flex;
  gap: 24px;

  span {
    display: flex;
    align-items: center;
    text-decoration: none;
    gap: 8px;
    color: ${(props) => props.theme['base-subtitle']};

    svg {
      height: 18px;
      width: 18px;
      color: ${(props) => props.theme['base-label']};
    }
  }
`
