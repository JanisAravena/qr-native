import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Importa la librería de íconos
import api from '../api'; // Importa la configuración de Axios

const SendInvitation = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const navigation = useNavigation();

  const handleSubmit = async () => {
    try {
      const response = await api.post('/invitations/send', { email });
      setMessage(response.data.message);
    } catch (error) {
      console.error('Error al enviar la invitación:', error);
      setMessage('Error al enviar la invitación');
    }
  };

  return (
    <View style={styles.container}>
      {/* Ícono más grande */}
      <Icon name="envelope" size={100} color="#fff" style={styles.icon} />

      <Text style={styles.title}>Enviar Invitación</Text>

      <TextInput
        style={styles.input}
        placeholder="Introduce un correo"
        placeholderTextColor="#7f8c8d"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>

      {message ? <Text style={styles.message}>{message}</Text> : null}

      <TouchableOpacity style={styles.qrButton} onPress={() => navigation.navigate('QrScanner')}>
        <Text style={styles.qrButtonText}>Escanear QR</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#34495e',
  },
  icon: {
    alignSelf: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    color: '#ecf0f1',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: '#95a5a6',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    backgroundColor: '#ecf0f1',
    fontSize: 16,
    color: '#2c3e50',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#3498db',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
    elevation: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  qrButton: {
    backgroundColor: '#1abc9c',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
    elevation: 5,
  },
  qrButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  message: {
    color: '#ecf0f1',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default SendInvitation;
