import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    backgroundColor: '#6E6DC8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  splashText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 40,
  },
  textInput: {
    margin: 15,
    padding: 10,
    fontSize: 20,
    width: '50%',
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: 'white'
  },
  button: {
    margin: 15,
    width: '50%',
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    margin: 15,
    color: '#6E6DC8',
    fontWeight: 'bold',
  }
});

export { styles }
