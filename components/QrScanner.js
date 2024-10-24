import React, { useState, useEffect } from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import api from '../api'; // Importa la configuración de Axios

const QrScanner = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = async ({ type, data }) => {
    setScanned(true);
    console.log(`Type: ${type}\nData: ${data}`);

    try {
      const response = await api.post('/invitations/validate', { code: data });
      if (response.data.redirect) {
        navigation.navigate('Bienvenido');
      } else {
        console.error('Código QR no válido');
      }
    } catch (error) {
      console.error('Error al validar el código QR:', error);
    }
  };

  if (hasPermission === null) {
    return (
      <View>
        {/* Asegúrate de que el texto esté dentro de un <Text> */}
        <Text>Requesting for camera permission</Text>
      </View>
    );
  }
  if (hasPermission === false) {
    return (
      <View>
        <Text>No access to camera</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && <Button title="Tap to Scan Again" onPress={() => setScanned(false)} />}
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#2c3e50', // Fondo más profesional
    },
  });

export default QrScanner;
