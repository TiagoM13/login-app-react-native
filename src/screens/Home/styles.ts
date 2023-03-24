import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  content: {
    marginTop: 30,
    marginBottom: 20,
    alignItems: 'center',
  },
  text: {
    color: '#000',
    fontSize: 32,
    fontWeight: '600',
    paddingBottom: 10,
  },
  subtitle: {
    color: '#000',
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'cover',
  },
});
