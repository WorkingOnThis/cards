import styled from 'styled-components'
import Icons from '../../../../../../../Icons';

const ButtonBell = styled.button`
  transition: box-shadow .2s ease,background-color .2s ease;

  align-self: center;
  cursor: pointer;
  padding: 0 8px;
  //general
  min-width: 0;
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  line-height: 40px;
  border-radius: 50%;
  //general +
  box-sizing: border-box;
  position: relative;
  outline: none;
  border: none;
  display: inline-block;
  white-space: nowrap;
  text-decoration: none;
  vertical-align: baseline;
  text-align: center;
  margin: 0;
  overflow: visible;

  background: transparent;

  & > span {
    display: flex;
    justify-content: center;
  }

  & > span > svg {
    color: rgba(255,255,255,0.7);
    fill: rgba(255,255,255,0.7);

    font-size: 20px;
    line-height: 20px;
    width: 1em;
    height: 1em;
  }

`

const Alert = () => {

  const Icon = Icons['Bell'];

  return (
    <ButtonBell>
      <span>
        <Icon /> 
      </span>
    </ButtonBell>
  )
}

export default Alert;