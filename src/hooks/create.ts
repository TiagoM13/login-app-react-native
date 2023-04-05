import { useState } from 'react';
import { Alert } from 'react-native';

import { UsersProps } from '../entities/users';

export const useCreateUser = () => {
  const [id, setId] = useState(1);
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState<UsersProps[]>([]);

  // regex validate email
  const REGEX_EMAIL = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const REGEX_PASSWORD = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#!])[0-9a-zA-Z$*&@#!]{8,}$/;

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

    if (user.trim() === '' || email.trim() === '' || password.trim() === '') {
      Alert.alert('Invalid fields!', 'Fields must be filled');
    } else if (!REGEX_EMAIL.test(email)) {
      Alert.alert('Invalid email!', 'Email invalid');
    } else if (!REGEX_PASSWORD.test(password)) {
      Alert.alert(
        'Invalid password!',
        `The password must contain
- at least one lowercase letter
- at least one capital letter
- at least one special character
- 8 of characters max`,
      );
    } else {
      Alert.alert('Create account', 'account created successfully!,');
    }

    // reset fileds
    setUser('');
    setEmail('');
    setPassword('');
  };

  return { user, email, password, getUser, getEmail, getPassword, handleCreateAccount };
};
