/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  label: {
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
    fontWeight: '700',
    color: '#000',
  },
  input: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#090909',
    borderRadius: 10,
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
    fontWeight: '600',
  },
  button: {
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 12,
    marginTop: 10,
    backgroundColor: 'green',
    borderRadius: 10,
  },
  text: {
    color: '#FFF',
    fontFamily: 'Inter-ExtraBold',
    fontSize: 20,
    fontWeight: '800',
  },
});
