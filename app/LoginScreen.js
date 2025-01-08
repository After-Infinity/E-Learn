import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { AntDesign, MaterialIcons, Feather } from '@expo/vector-icons';

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image 
        source={require('../app/Assets/login-page.jpg')}
        style={styles.logo}
      />
      <Text style={styles.loginText}>Login to <Text>Your Account</Text></Text>
      <Text style={styles.phoneNumberText}>Login With Your Phone Number</Text>
      <View style={styles.phoneNumberContainer}>
        <View style={styles.flagContainer}>
          <Image
            source={require('../app/Assets/flag.png')} 
            style={styles.phoneIcon}
          />
          <MaterialIcons name="keyboard-arrow-down" size={24} color="#666" style={styles.arrowIcon} />
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.prefixContainer}>
            <Feather name="phone" size={20} color="#666" style={styles.phoneInputIcon} />
            <Text style={styles.prefixText}>+91</Text>
          </View>
          <TextInput
            style={styles.input}
            keyboardType="phone-pad"
          />
        </View>
      </View>
      <TouchableOpacity style={styles.joinButton}>
        <Text style={styles.joinButtonText}>Join Now</Text>
      </TouchableOpacity>
      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>
          Don't have an account?{' '}
          <Text 
            style={styles.signupLink}
            onPress={() => navigation.navigate('Name')}
          >
            Create an account
          </Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  logo: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
    marginTop: 50,
  },
  loginText: {
    fontSize: 27,
    fontWeight: '600',
    marginTop: 30,
    color: '#333',
  },
  phoneNumberText: {
    fontSize: 16,
    marginTop: 20,
    color: '#666',
  },
  phoneNumberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    width: '100%',
  },
  flagContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 10,
    borderRightWidth: 1,
    borderRightColor: '#ddd',
  },
  phoneIcon: {
    width: 50,
    height: 35,
    marginRight: 2,
  },
  arrowIcon: {
    marginLeft: -3,
  },
  inputContainer: {
    flex: 1,
    marginLeft: 10,
    borderWidth: 1,
    borderColor: '#2196F3',
    borderRadius: 8,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  prefixContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 5,
  },
  phoneInputIcon: {
    marginRight: 8,
  },
  prefixText: {
    fontSize: 16,
    color: '#666',
    marginRight: 5,
  },
  input: {
    flex: 1,
    height: 48,
    fontSize: 16,
    color: '#333',
  },
  signupContainer: {
    marginTop: 15,
  },
  signupText: {
    fontSize: 14,
    color: '#666',
  },
  signupLink: {
    color: '#2196F3',
    fontWeight: '500',
  },
  joinButton: {
    backgroundColor: '#2196F3',
    width: '100%',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  joinButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default LoginScreen;