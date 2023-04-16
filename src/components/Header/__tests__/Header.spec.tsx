import Recat from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { Header } from '../Header';

describe('Header', () => {
  describe('button was rendered', () => {
    it('show the icon', () => {
      const { getByTestId } = render(<Header />);

      const icon = getByTestId('HeaderIcon');
      expect(icon).toBeTruthy();
    });

    it('presses the button event', () => {
      const { getByTestId } = render(<Header />);

      const button = getByTestId('HeaderButton');

      expect(fireEvent.press(button));
    });
  });
});
