// React
import { useEffect } from 'react';

// Hooks
import { useRoutes, useNavigate } from 'react-router-dom';

// Components
import Signup from './components/Auth/SignUp';
import Login from './components/Auth/Login';
import Welcome from './components/Welcome';
import PrivateRoute from './routes/PrivateRoute';
import UserProfile from './components/Profile';

const App = () => {
  const navigate = useNavigate();  

  const routes = useRoutes([
    { path: "/", element: <Login /> },
    { path: "/signup", element: <Signup /> },
    { path: "/welcome", element: <Welcome/>},
    { path: "/profile", element: (
      <PrivateRoute>
        <UserProfile/>
      </PrivateRoute>
    ) },
  ]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    
    if (token) {
      navigate('/welcome');
    }
    else {
      navigate('/');
    }
  }, []);

  return (
    <div className="App">
      {routes}
    </div>
  );
}

export default App;
