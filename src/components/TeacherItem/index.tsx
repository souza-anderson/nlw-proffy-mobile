import React from 'react';
import { View, Image, Text } from 'react-native';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';


import styles from './styles';
import { RectButton } from 'react-native-gesture-handler';

function TeacherItem() {
    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image
                    style={styles.avatar}
                    source={{ uri: 'https://avatars2.githubusercontent.com/u/44868092?s=460&u=078d0bca05afde2722f062cc264a690cd28fd533&v=4' }}
                />

                <View style={styles.profileInfo}>
                    <Text style={styles.name}>Anderson Felipe</Text>
                    <Text style={styles.subject}>Química</Text>
                </View>
            </View>


            <Text style={styles.bio}>
                Entusiasta das melhores técnicas de química avançada.
                {'\n'}{'\n'}
                Apaixonado por explodir coisas em laboratório e por mudar a vida das pessaos através de experiências.
                Mais de 200.00 pessoas já passaram por uma das minhas explosões.
            </Text>

            <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço/hora {'   '}
                    <Text style={styles.priceValue}>R$ 20,00</Text>
                </Text>

                <View style={styles.buttonsContainer}>
                    <RectButton style={[styles.favoriteButton, styles.favorited]}>
                        {/* <Image source={heartOutlineIcon} /> */}
                        <Image source={unfavoriteIcon} />

                    </RectButton>

                    <RectButton style={styles.contactButton}>
                        <Image source={whatsappIcon} />
                        <Text style={styles.contactButtonText}>Entrar em contato!</Text>
                    </RectButton>
                </View>
            </View>
        </View>
    )
}

export default TeacherItem;