import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';

function VerifyOtp({ navigation }) {
    const [otp, setOtp] = useState(['', '', '', '']);
    const inputRefs = useRef([]);

    const handleOtpChange = (value, index) => {
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        // Move to next input if value is entered
        if (value && index < 3) {
            inputRefs.current[index + 1].focus();
        }
    };

    return (
        <View style={styles.container}>
            <Image 
                source={require('../app/Assets/otp-page.jpg')} 
                style={styles.logo}
            />
            <Text style={styles.title}>Verify OTP</Text>
            <Text style={styles.subtitle}>
                Please enter the 4 digit verification code that is{'\n'}
                send to you at <Text style={styles.phoneNumber}>+91 900 2134 333</Text>
            </Text>

            <View style={styles.otpContainer}>
                {[0, 1, 2, 3].map((index) => (
                    <TextInput
                        key={index}
                        ref={ref => inputRefs.current[index] = ref}
                        style={styles.otpInput}
                        maxLength={1}
                        keyboardType="number-pad"
                        value={otp[index]}
                        onChangeText={(value) => handleOtpChange(value, index)}
                    />
                ))}
            </View>

            <View style={styles.resendContainer}>
                <Text style={styles.resendText}>
                    Don't receive code? <Text style={styles.timer}>16 Sec</Text>
                </Text>
            </View>

            <TouchableOpacity style={styles.verifyButton}>
                <Text style={styles.buttonText}>Verify</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 20,
        alignItems: 'center',
    },
    logo: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
        marginTop: 50,
    },
    title: {
        fontSize: 24,
        fontWeight: '600',
        color: '#333',
        marginTop: 30,
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 14,
        color: '#666',
        textAlign: 'center',
        lineHeight: 20,
    },
    phoneNumber: {
        color: '#2196F3',
        fontWeight: '500',
    },
    otpContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 20,
        marginTop: 30,
    },
    otpInput: {
        width: 60,
        height: 60,
        borderWidth: 1,
        borderColor: '#2196F3',
        borderRadius: 12,
        fontSize: 24,
        textAlign: 'center',
        backgroundColor: '#fff',
    },
    resendContainer: {
        marginTop: 20,
    },
    resendText: {
        color: '#666',
        fontSize: 14,
    },
    timer: {
        color: '#2196F3',
    },
    verifyButton: {
        backgroundColor: '#6C63FF',
        width: '100%',
        height: 50,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
});

export default VerifyOtp; 