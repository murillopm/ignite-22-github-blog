import styled from 'styled-components'

export const SearchBarWrapper = styled.form`
  width: 100%;
  margin-top: 72px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const PublicationsCounter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  strong {
    font-size: 1.125rem;
    font-weight: bold;
    line-height: 160%;
    color: ${(props) => props.theme['base-subtitle']};
  }

  span {
    font-size: 0.875rem;
    line-height: 160%;
    color: ${(props) => props.theme['base-span']};
  }
`

export const SearchBarInput = styled.input`
  margin: 0;
  padding: 12px 16px;
  height: 50px;
  border-radius: 6px;
  border: 1px solid ${(props) => props.theme['base-border']};
  background-color: ${(props) => props.theme['base-input']};
  color: ${(props) => props.theme['base-text']};
  caret-color: ${(props) => props.theme['base-text']};

  :focus {
    border-color: ${(props) => props.theme.blue};
  }

  ::placeholder {
    color: ${(props) => props.theme['base-label']};
  }
`
