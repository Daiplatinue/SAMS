import axios from 'axios';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Parent: React.FC = () => {
  const navigate = useNavigate();

  const fetchUser = async (): Promise<void> => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:3000/auth/parent', {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      });
      if (response.status !== 201) {
        navigate('/login');
      }
    } catch (err) {
      navigate('/login');
      console.error(err);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className='text-3xl text-blue-500'>Parent</div>
  );
};

export default Parent;