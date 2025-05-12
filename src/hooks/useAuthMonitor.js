import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useAuthMonitor = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkToken = () => {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/'); // redirect if token is missing
      }
    };

    // 🕒 Check every 1 second (polling)
    const interval = setInterval(checkToken, 1000);

    // 🪟 Listen to token removal in other tabs
    const handleStorageChange = () => checkToken();
    window.addEventListener('storage', handleStorageChange);

    return () => {
      clearInterval(interval);
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [navigate]);
};

export default useAuthMonitor;
