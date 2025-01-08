import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet } from 'react-native';
import Name from './app/Name';
import Password from './app/Password';
import LoginScreen from './app/LoginScreen';  
import VerifyOtp from './app/VerifyOtp';
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      {/* <Name /> */}
      {/* <LoginScreen /> */}
      <VerifyOtp /> 
      {/* <Password /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
});

