import styled from 'styled-components'

const Container = styled.div`
  margin-right: -6px;
  min-width: auto;
  height: 48px;

  position: relative;
  transition: box-shadow 250ms;

  & > div {

    flex: 0 1 auto;
    padding: 4px;
    display: inline-block;
    vertical-align: middle;

  }

  & > div > a {

    color: #000;
    cursor: pointer;
    text-decoration: none;

    padding: 4px;

    flex: 0 1 auto;

    background-color: rgba(60,64,67,0.08);

    outline: none;
    border-radius: 50%;

    display: inline-block;
    vertical-align: middle;
    box-sizing: border-box;
    height: 40px;
    width: 40px;

  }

  & > div > a > img {
    box-shadow: 0 1px 0 rgb(0 0 0 / 15%);

    background-size: 32px 32px;
    border: 0;
    border-radius: 50%;
    display: block;
    margin: 0;
    position: relative;
    height: 32px;
    width: 32px;
    z-index: 0;
  }

`

const Profile = () => {

  return (
    <Container>
      <div>
        <a href="/dashboard">
          <img src={'https://lh3.googleusercontent.com/ogw/ADGmqu-BLNHc0GkZg4_5CDaqWO7ZiGjQZ2G5dANAAFWiLg=s32-c-mo'} alt="avatar"/>
        </a>
      </div>
    </Container>
  )
}

export default Profile;