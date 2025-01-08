import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, SafeAreaView, Keyboard } from 'react-native';
import { Feather } from '@expo/vector-icons';

function Password({ navigation }) {
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [keyboardVisible, setKeyboardVisible] = useState(false);

    React.useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            () => {
                setKeyboardVisible(true);
            }
        );
        const keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            () => {
                setKeyboardVisible(false);
            }
        );

        return () => {
            keyboardDidHideListener.remove();
            keyboardDidShowListener.remove();
        };
    }, []);

    const hasLowerCase = /[a-z]/.test(password);
    const hasUpperCase = /[A-Z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const hasMinLength = password.length >= 8;

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.contentContainer}>
                <Image 
                    source={require('../app/Assets/password-page.jpg')} 
                    style={styles.logo} 
                />
                <Text style={styles.mainText}>Create Password</Text>
                <Text style={styles.subText}>Create a secure password for your account</Text>
                
                <View style={styles.inputContainer}>
                    <Feather name="lock" size={20} color="#666" style={styles.lockIcon} />
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your password"
                        placeholderTextColor="#666"
                        secureTextEntry={!showPassword}
                        value={password}
                        onChangeText={setPassword}
                    />
                    <TouchableOpacity 
                        onPress={() => setShowPassword(!showPassword)}
                        style={styles.eyeIcon}
                    >
                        <Feather 
                            name={showPassword ? "eye" : "eye-off"} 
                            size={20} 
                            color="#666" 
                        />
                    </TouchableOpacity>
                </View>

                <View style={styles.rulesContainer}>
                    <View style={styles.ruleRow}>
                        <Feather 
                            name={hasMinLength ? "check-circle" : "circle"} 
                            size={16} 
                            color={hasMinLength ? "#4CAF50" : "#666"}
                        />
                        <Text style={[styles.ruleText, hasMinLength && styles.ruleValid]}>
                            At least 8 characters
                        </Text>
                    </View>
                    <View style={styles.ruleRow}>
                        <Feather 
                            name={hasLowerCase ? "check-circle" : "circle"} 
                            size={16} 
                            color={hasLowerCase ? "#4CAF50" : "#666"}
                        />
                        <Text style={[styles.ruleText, hasLowerCase && styles.ruleValid]}>
                            One lowercase letter
                        </Text>
                    </View>
                    <View style={styles.ruleRow}>
                        <Feather 
                            name={hasUpperCase ? "check-circle" : "circle"} 
                            size={16} 
                            color={hasUpperCase ? "#4CAF50" : "#666"}
                        />
                        <Text style={[styles.ruleText, hasUpperCase && styles.ruleValid]}>
                            One uppercase letter
                        </Text>
                    </View>
                    <View style={styles.ruleRow}>
                        <Feather 
                            name={hasNumber ? "check-circle" : "circle"} 
                            size={16} 
                            color={hasNumber ? "#4CAF50" : "#666"}
                        />
                        <Text style={[styles.ruleText, hasNumber && styles.ruleValid]}>
                            One number
                        </Text>
                    </View>
                    <View style={styles.ruleRow}>
                        <Feather 
                            name={hasSymbol ? "check-circle" : "circle"} 
                            size={16} 
                            color={hasSymbol ? "#4CAF50" : "#666"}
                        />
                        <Text style={[styles.ruleText, hasSymbol && styles.ruleValid]}>
                            One special character
                        </Text>
                    </View>
                </View>
            </View>

            {!keyboardVisible && (
                <View style={styles.buttonWrapper}>
                    <TouchableOpacity 
                        style={[
                            styles.submitButton,
                            !(hasMinLength && hasLowerCase && hasUpperCase && hasNumber && hasSymbol) && 
                            styles.submitButtonDisabled
                        ]}
                        disabled={!(hasMinLength && hasLowerCase && hasUpperCase && hasNumber && hasSymbol)}
                        onPress={() => navigation.navigate('MainApp')}
                    >
                        <Text style={styles.buttonText}>Submit</Text>
                    </TouchableOpacity>
                </View>
            )}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    contentContainer: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
    },
    buttonWrapper: {
        padding: 20,
        backgroundColor: 'white',
        borderTopWidth: 1,
        borderTopColor: '#f0f0f0',
    },
    logo: {
        width: '90%',
        height: 200,
        resizeMode: 'contain',
        marginTop: 80,
    },
    mainText: {
        fontSize: 24,
        fontWeight: '600',
        color: '#333',
        marginTop: 30,
    },
    subText: {
        fontSize: 16,
        color: '#444',
        marginTop: 10,
        marginBottom: 20,
    },
    inputContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#2196F3',
        borderRadius: 8,
        height: 50,
        paddingHorizontal: 15,
        marginTop: 10,
    },
    input: {
        flex: 1,
        height: '100%',
        fontSize: 16,
        marginLeft: 10,
    },
    lockIcon: {
        marginRight: 5,
    },
    eyeIcon: {
        padding: 5,
    },
    rulesContainer: {
        width: '100%',
        marginTop: 20,
    },
    ruleRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
    },
    ruleText: {
        marginLeft: 10,
        fontSize: 14,
        color: '#666',
    },
    ruleValid: {
        color: '#4CAF50',
    },
    submitButton: {
        backgroundColor: '#2196F3',
        width: '100%',
        height: 50,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
    submitButtonDisabled: {
        backgroundColor: '#B0BEC5',
    },
}); 

export default Password;