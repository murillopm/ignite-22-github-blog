import styled from 'styled-components'

export const LayoutWrapper = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  background-color: ${(props) => props.theme['base-background']};
  display: flex;
  flex-direction: column;
`

interface LayoutHeaderProps {
  bgImage: string
}

export const LayoutHeader = styled.header<LayoutHeaderProps>`
  width: 100%;
  height: 18.5rem;
  background-image: ${(props) => `url(${props.bgImage})`};

  display: flex;
  justify-content: center;

  img {
    height: 98px;
    width: 148px;
    margin-top: 4rem;
  }
`
