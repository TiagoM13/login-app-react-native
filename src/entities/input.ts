import { TextInputProps } from 'react-native';

export interface InputFiedlProps extends TextInputProps {
  label: string;
  errorMessage?: string | null;
}
