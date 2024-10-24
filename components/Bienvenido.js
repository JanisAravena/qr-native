import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';

const Bienvenido = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <View style={styles.container}>
      <Animated.View style={{ ...styles.animatedView, opacity: fadeAnim }}>
        <Text style={styles.text}>Usuario autorizado</Text>
        <Text style={styles.text}>Gracias por asistir</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#2c3e50', // Fondo más profesional
    },
    animatedView: {
      alignItems: 'center',
    },
    text: {
      fontSize: 24,
      color: '#ecf0f1', // Color de texto más atractivo
      marginBottom: 10,
      fontWeight: 'bold', // Negrita para el texto
    },
  });

export default Bienvenido;