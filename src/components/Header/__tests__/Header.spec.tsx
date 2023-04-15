import Recat from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Header } from '../Header';

describe('Header', () => {
  describe('button was rendered', () => {
    it('show the icon', () => {
      const { getByTestId } = render(
        <NavigationContainer>
          <Header />
        </NavigationContainer>,
      );

      const icon = getByTestId('HeaderIcon');
      expect(icon).toBeTruthy();
    });

    it('presses the button event', () => {
      const { getByTestId } = render(
        <NavigationContainer>
          <Header />
        </NavigationContainer>,
      );

      const button = getByTestId('HeaderButton');

      expect(fireEvent.press(button));
    });
  });
});
