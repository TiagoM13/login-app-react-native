import { TextInputProps } from 'react-native';
import { UseControllerProps } from 'react-hook-form';

export interface InputFiedlProps {
  label: string;
  errorMessage?: string | null;
  inputProps: TextInputProps;
  controllerProps: UseControllerProps;
}
