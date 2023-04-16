import { fireEvent, render } from '@testing-library/react-native';

import Home from '../Home';
import { mockNavigate, mockNavigateValue } from '../../../../jestSetupFile';

describe('Home', () => {
  describe('renderd Home component', () => {
    it('renders image correctly', () => {
      const { getByTestId } = render(<Home />);
      const image = getByTestId('home-image');
      expect(image.props.source).toBeDefined();
    });

    it('renders texts correctly', () => {
      const { getByText } = render(<Home />);
      const text = getByText('Hello!!!');
      const text2 = getByText('You need to create an account or login to log in to the app');
      expect({ text, text2 }).toBeTruthy();
    });
  });

  describe('Navigation buttons', () => {
    it('should navigate to SignIn screen when Login button is pressed', () => {
      const { getByTestId } = render(<Home />);
      const loginButton = getByTestId('loginButton');
      fireEvent.press(loginButton);
      mockNavigate('SignIn');
      expect(mockNavigateValue).toEqual('SignIn');
    });

    it('should navigate to SignUp screen when Sign Up button is pressed', () => {
      const { getByTestId } = render(<Home />);
      const signUpButton = getByTestId('signUpButton');
      fireEvent.press(signUpButton);

      mockNavigate('SignUp');
      expect(mockNavigateValue).toEqual('SignUp');
    });
  });
});
