import React from 'react';

import {
Text, Image, StyleSheet, Dimensions, ImageBackground, StatusBar,
} from 'react-native';

const styles = StyleSheet.create({
    container: {
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 20,
    },
    fileName: {
    fontWeight: 'bold',
    marginTop: 5,
    },
    instructions: {
    color: '#DDD',
    fontSize: 14,
    marginTop: 20,
    textAlign: 'center',
        },
    logo: {
    height: Dimensions.get('window').height * 0.11,
    marginVertical: Dimensions.get('window').height * 0.11,
    width: Dimensions.get('window').height * 0.11 * (1950 / 662),
    },
    welcome: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    },
});

const Home = () => (
    <ImageBackground
    source={{
    uri: 'https://s3-sa-east-1.amazonaws.com/rocketseat-cdn/background.png',
    }}
    style={styles.container}
    resizeMode="cover"
    >
    <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
    <Image
    source={{
        uri: 'https://s3-sa-east-1.amazonaws.com/rocketseat-cdn/rocketseat_logo.png',
    }}
    style={styles.logo}
    resizeMode="contain"
    />
    <Text style={styles.welcome}>Teste para criação de componentes </Text>
    <Text style={styles.instructions}>Funcionou</Text>
    <Text style={styles.instructions}>Você  já pode usar</Text>
    <Text style={[styles.instructions, styles.fileName]}>src/pages/Home/index.js</Text>
</ImageBackground>
);

export default Home;
