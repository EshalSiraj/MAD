// screens/AuthScreen.js - Updated (NO navigation calls)
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { globalStyles, colors } from '../styles/globalStyles';

export default function AuthScreen() {  // 👈 Remove navigation prop - we don't need it!
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const handleAuth = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }

    if (password.length < 6) {
      Alert.alert('Error', 'Password must be at least 6 characters');
      return;
    }

    setLoading(true);
    try {
      if (isLogin) {
        // Just login - the onAuthStateChanged listener will handle navigation
        await signInWithEmailAndPassword(auth, email, password);
        Alert.alert('Welcome Back!', 'Login successful');
        // ❌ NO navigation.reset or replace here!
      } else {
        // Just sign up - the onAuthStateChanged listener will handle navigation
        await createUserWithEmailAndPassword(auth, email, password);
        Alert.alert('Success!', 'Account created successfully');
        // ❌ NO navigation.reset or replace here!
      }
    } catch (error) {
      console.log('Auth error:', error.code);
      
      switch (error.code) {
        case 'auth/invalid-credential':
          Alert.alert('Login Failed', 'Invalid email or password. Please try again.');
          break;
        case 'auth/email-already-in-use':
          Alert.alert('Signup Failed', 'This email is already registered. Please login instead.');
          break;
        case 'auth/weak-password':
          Alert.alert('Signup Failed', 'Password should be at least 6 characters.');
          break;
        case 'auth/network-request-failed':
          Alert.alert('Network Error', 'Please check your internet connection.');
          break;
        case 'auth/too-many-requests':
          Alert.alert('Too Many Attempts', 'Please try again later.');
          break;
        default:
          Alert.alert('Error', error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={globalStyles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={globalStyles.centerContainer}>
        <View style={{ width: '100%', maxWidth: 400 }}>
          <Text style={globalStyles.title}>📔 NotesApp</Text>
          <Text style={globalStyles.subtitle}>
            {isLogin ? 'Welcome back!' : 'Create your account'}
          </Text>

          <TextInput
            style={globalStyles.input}
            placeholder="Email"
            placeholderTextColor={colors.textLight}
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
          />

          <TextInput
            style={globalStyles.input}
            placeholder="Password"
            placeholderTextColor={colors.textLight}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          {loading ? (
            <ActivityIndicator size="large" color={colors.primary} />
          ) : (
            <>
              <TouchableOpacity style={globalStyles.buttonPrimary} onPress={handleAuth}>
                <Text style={globalStyles.buttonPrimaryText}>
                  {isLogin ? 'Login' : 'Sign Up'}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={globalStyles.buttonSecondary}
                onPress={() => setIsLogin(!isLogin)}
              >
                <Text style={globalStyles.buttonSecondaryText}>
                  {isLogin ? "Don't have an account? Sign Up" : 'Already have an account? Login'}
                </Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}