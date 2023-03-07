import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const PlanAccordion = ({ data }) => {
    const { heading, contentItems } = data;

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Pressable
                style={styles.container}
                onPress={() => setIsOpen(!isOpen)}
            >
                <View style={styles.headingWrapper}>
                    {isOpen ? (
                        <Entypo
                            name='triangle-down'
                            size={24}
                            color='#0566E9'
                            style={{
                                paddingRight: 20,
                            }}
                        />
                    ) : (
                        <Entypo
                            name='triangle-right'
                            size={24}
                            color='#0566E9'
                            style={{
                                paddingRight: 20,
                            }}
                        />
                    )}
                    <Text style={styles.heading}>{heading}</Text>
                </View>
                {isOpen && (
                    <View style={styles.contentWrapper}>
                        {contentItems.map((item, idx) => {
                            const { icon, title, desc } = item;

                            return (
                                <View key={idx} style={styles.content}>
                                    <View style={styles.iconWrapper}>
                                        <FontAwesome
                                            name={icon}
                                            size={24}
                                            color='#333'
                                        />
                                    </View>
                                    <View style={styles.contentTextWrapper}>
                                        <Text style={styles.title}>
                                            {title}
                                        </Text>
                                        <Text style={styles.desc}>{desc}</Text>
                                    </View>
                                </View>
                            );
                        })}
                    </View>
                )}
            </Pressable>
        </>
    );
};

export default PlanAccordion;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        justifyContent: 'center',
    },
    headingWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    heading: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#0566E9',
    },
    contentWrapper: {
        marginTop: 20,
    },
    content: {
        flexDirection: 'row',
        paddingBottom: 20,
        paddingRight: 20,
    },
    iconWrapper: {
        width: 30,
        alignItems: 'center',
    },
    contentTextWrapper: {
        paddingLeft: 20,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    desc: {
        fontSize: 14,
        color: '#777',
        paddingTop: 5,
    },
});
