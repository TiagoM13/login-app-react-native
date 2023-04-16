// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: () => {
      return {
        navigate: jest.fn(),
        goBack: jest.fn(),
      }
    }
  }
});

export const mockNavigate = jest.fn(route => {
  mockNavigateValue = route;
});

export let mockNavigateValue = '';
