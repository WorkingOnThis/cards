import styled from 'styled-components'
import Icons from '../../../../../../../Icons';

const Container = styled.div`
  align-items: center;
  display: flex;
  height: 48px;

  & > div {
    display: block;
    width: auto;
    outline: none;
  }
  
  & > div > div {
    display: inline-table;
    cursor: pointer;
    position: relative;
    box-sizing: border-box;
    height: 1.125em;
  }

  & > div > div > .text {
      color: rgba(255,255,255,0.7);
      /* color: var(--theme-color-fg-secondary); */
      font-size: 14px;
      line-height: 20px;
      font-weight: 500;
      max-width: initial;

      display: table-cell;
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;

      & > span {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }

  & > div > div > .icon {
    position: relative;
    top: 1px;
    padding-left: 4px;

    display: table-cell;
    vertical-align: middle;

    & > svg {
      color: rgba(255,255,255,0.7);
      /* color: var(--theme-color-fg-secondary); */

      width: 0;
      height: 0;
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      border-top: 5px solid;
      margin: 0 4px;
    }
  }
  
`

const Projects = () => {

  const Icon = Icons['ArrowDropDown'];
  
  return (
    <Container>
      {/* TODO: extraer a un componente select */}
      <div>
        <div>
          <div className="text">
            <span>Pruebita</span>
          </div>
          <div className="icon">
            <Icon />
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Projects;