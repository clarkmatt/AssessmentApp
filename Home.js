import * as React from 'react';
import { Picker, TouchableOpacity, AsyncStorage, Button, Text, TextInput, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { styles } from './Styles';
import { AuthContext } from './Context.js';

function HomeScreen({ navigation, clients}) {
  const { signOut } = React.useContext(AuthContext);
  const [selectedValue, setSelectedValue] = React.useState("cl1");

  return (
    <View style={styles.splashContainer}>
      <Text style={styles.splashText}>Choose Client:</Text>

      <TouchableOpacity style={styles.button}>
        <Picker
          selectedValue={selectedValue}
          style={{height: 50, width: 200}}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          <Picker.Item label="Client 1" value="cl1" />
          <Picker.Item label="Client 2" value="cl2" />
          <Picker.Item label="Client 3" value="cl3" />
        </Picker>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ChooseActivity')}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={signOut}>
        <Text style={styles.buttonText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
}

function ChooseActivityScreen() {
  const { signOut } = React.useContext(AuthContext);

  return (
    <View style={styles.splashContainer}>
      <Text>Choose an activity!!!!</Text> 
      <TouchableOpacity style={styles.button} onPress={signOut}>
        <Text style={styles.buttonText}>Assessment</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={signOut}>
        <Text style={styles.buttonText}>Treatment</Text>
      </TouchableOpacity>
    </View>
  );
}

export {HomeScreen, ChooseActivityScreen}
