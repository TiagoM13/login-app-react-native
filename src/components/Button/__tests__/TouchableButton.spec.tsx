import { fireEvent, render } from '@testing-library/react-native';
import { TouchableButton } from '../TouchableButton';

describe('TouchableButton', () => {
  describe('if rendered button', () => {
    it('show the text', () => {
      const { getByText } = render(<TouchableButton value="Teste" />);

      expect(getByText('Teste')).toBeTruthy();
    });

    it('press the button', () => {
      const handlePress = () => {
        console.log('Button pressed!');
      };

      const { getByTestId } = render(<TouchableButton onPress={handlePress} value="Teste" />);

      const button = getByTestId('buttonPress');
      expect(fireEvent.press(button));
    });
  });

  describe('value was NOT passed', () => {
    it('return nothing', () => {
      const { UNSAFE_root } = render(<TouchableButton />);

      expect(UNSAFE_root.children.length).toEqual(0);
    });
  });
});
