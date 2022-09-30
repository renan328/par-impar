import React, {useState} from "react";

import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';

export default function Home(){

            let [numero, setNumero] = useState();

            function Verificar(){

                let resto = numero % 2;

                if (resto == 0) {

                    alert("O número é par");
                    
                } else {

                    alert("O número é impar");
                }
            }   

    return(
        <View style={styles.container}>

            <Text style={styles.titulo}>Projeto Converção de real para dolar</Text>

            <TextInput onChangeText={setNumero} style={styles.campo} placeholder="Digite o número para verifição"></TextInput>

            <TouchableOpacity style={styles.botao} onPress={Verificar}>
                <Text style={styles.botaoTexto}> Verificar </Text>
            </TouchableOpacity>

        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor: '#FFF',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    titulo:{
        fontSize: 25,
        color: '#000',
        fontWeight: 'bold',
        marginBottom: 40
    },

    campo:{
        backgroundColor: '#003',
        color: '#FFF',
        fontSize: 18,
        padding: 8,
        marginTop: 10,
        width: 300,
        borderRadius: 10
    },

    botao:{
        backgroundColor: '#003',
        alignItems: 'center',
        padding: 15,
        borderRadius: 7,
        marginTop: 20,
        width: 250
    },

    botaoTexto:{
        color: '#fff',
        fontSize: 17,
        fontWeight: 700,
    }
});
