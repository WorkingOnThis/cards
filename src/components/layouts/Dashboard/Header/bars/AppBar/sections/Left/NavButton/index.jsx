import styled from 'styled-components'
import Icons from '../../../../../../../../Icons';

const Container = styled.button`

  margin-left: -10px;
  /* .mat-icon-button */
  padding: 0;
  min-width: 0;
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  line-height: 40px;
  border-radius: 50%;

  box-sizing: border-box;
  background: transparent;
  outline: none;
  border: none;

  & > span {
    display: flex;
    justify-content: center;

    & > svg {
      color: rgba(255,255,255,0.7);
      /* color: var(--theme-color-fg-secondary); */
      height: 31px;
      width: 28px;
      /* line-height: 24px; */
      /* font-size: 17px; */
    }
  }
`

const ShowNavButton = () => {

  const Icon = Icons['ReorderThree'];
  
  return (
    <Container>
      {/* TODO: extraer a un componente select */}
      <span>
        <Icon />
      </span>
    </Container>
  )
}

export default ShowNavButton;