import { TouchableOpacityProps } from 'react-native';

export interface TouchableButtonProps extends TouchableOpacityProps {
  value: string;
  background?: string;
}
