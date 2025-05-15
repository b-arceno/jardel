import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function ItemNome({ nome, onExcluir }) {
  return (
    <View style={styles.container}>
      <Text style={styles.nome}>{nome}</Text>
      <TouchableOpacity style={styles.botaoExcluir} onPress={onExcluir}>
        <Text style={styles.textoExcluir}>X</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
  },
  nome: {
    fontSize: 16,
  },
  botaoExcluir: {
    backgroundColor: '#ff4d4d',
    borderRadius: 20,
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textoExcluir: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
