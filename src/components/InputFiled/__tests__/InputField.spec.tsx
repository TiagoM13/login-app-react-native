import { render } from '@testing-library/react-native';
import { InputFiled } from '../InputField';

describe('InputField', () => {
  describe('if render input field ', () => {
    it('should render the label', () => {
      const { getByText } = render(<InputFiled label="Email" />);
      expect(getByText('Email')).toBeTruthy();
    });

    it('should update value on text input', () => {
      const { getByTestId } = render(<InputFiled value="tiagomotha@gmail.com" label="Email" />);

      const input = getByTestId('inputText');

      expect(input.props.value).toBe('tiagomotha@gmail.com');
    });

    it('renders the input field component correctly', () => {
      const { getByTestId } = render(<InputFiled label="Username" />);
      const input = getByTestId('inputText');

      expect(input).toBeDefined();
    });

    it('renders the label text correctly', () => {
      const { getByText } = render(<InputFiled label="Username" />);
      const label = getByText('Username');

      expect(label).toBeDefined();
    });

    it('renders the placeholder text correctly', () => {
      const { getByTestId } = render(<InputFiled label="testuser" placeholder="Enter your name" />);
      const input = getByTestId('inputText');

      expect(input.props.placeholder).toBe('Enter your name');
    });
  });
});
