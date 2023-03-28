import { useState, useCallback, useEffect } from 'react';
import { Alert } from 'react-native';

type UsersProps = {
  id: number;
  user: string;
  email: string;
  password: string;
};

export const useCreateUser = () => {
  const [id, setId] = useState(1);
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState<UsersProps[]>([]);

  // regex validate email
  const REGEX_EMAIL = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  const getUser = (value: string) => {
    setUser(value);
  };

  const getEmail = (value: string) => {
    setEmail(value);
  };

  const getPassword = (value: string) => {
    setPassword(value);
  };

  const handleCreateAccount = () => {
    setUsers([...users, { id, user, email, password }]);
    setId(id + 1);

    // reset fileds
    setUser('');
    setEmail('');
    setPassword('');
  };

  return { user, email, password, getUser, getEmail, getPassword, handleCreateAccount };
};
