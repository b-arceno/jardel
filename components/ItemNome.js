import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// Componente de como será exibido o nome e o botão de excluir.
// Defini como componente para caso precisar reutilizar ele em outra tela, por exemplo.
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

// Estilização, muito semelhante ao CSS normal. Nota-se que aqui eu não estou usando inline.
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
    backgroundColor: '#ff4d4d', // vermelho forte
    borderRadius: 20,           // circular (metade da largura/altura)
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
