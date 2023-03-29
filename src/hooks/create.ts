import { useState } from 'react';
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
        `Password invalid 
  - must contain a lowercase letter
  - must contain a capital letter
  - must contain a special character
  - must contain 8 of the characters`,
      );
    } else {
      Alert.alert('Create account', 'account created successfully!,');
      console.log({ users });
    }

    // reset fileds
    setUser('');
    setEmail('');
    setPassword('');
  };

  return { user, email, password, getUser, getEmail, getPassword, handleCreateAccount };
};
