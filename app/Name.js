import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';

function Name({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.contentContainer}>
                <Image 
                    source={require('../app/Assets/name-page.jpg')} 
                    style={styles.logo} 
                />
                <Text style={styles.mainText}>Enter Your Name</Text>
                <Text style={styles.subText}>Enter your full name for your account</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter your full name"
                    placeholderTextColor="#666"
                />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity 
                    style={styles.submitButton}
                    onPress={() => navigation.navigate('Password')}
                >
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 20,
    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
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
    input: {
        width: '100%',
        height: 50,
        borderWidth: 1,
        borderColor: '#2196F3',
        borderRadius: 8,
        paddingHorizontal: 15,
        fontSize: 16,
        marginTop: 10,
    },
    buttonContainer: {
        width: '100%',
        paddingBottom: 20,
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
}); 

export default Name;