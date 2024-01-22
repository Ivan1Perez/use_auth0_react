import { useAuth0 } from '@auth0/auth0-react';
import { LoginButton} from './components/LoginButton';
import { Profile } from './components/Profile';
import { LogoutButton } from './components/LogoutButton';
import './App.css';
import { Loading } from './components/Loading';

function App() {

  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return(
      <div className='App'>
        <Loading />
      </div>
    )
  }

  return (
    <div className='App'>
      <h1>USE OF AUTH0</h1>
      {
        isAuthenticated ? <LogoutButton /> : <LoginButton />
      }
      {
        isAuthenticated ? <Profile /> : null
      }
    </div>
  );
}

export default App;
