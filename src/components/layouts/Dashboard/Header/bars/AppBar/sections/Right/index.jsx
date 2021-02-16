import Alert from './Alerts';
import LinkDocumentation from './LinkDocumentation';
import Profile from './Profile';

const Right = () => {
  return (
    <div>
      <LinkDocumentation />
      <Alert/>
      <Profile/>
    </div>
  )
}

export default Right;