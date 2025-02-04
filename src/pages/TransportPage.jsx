import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { carData } from '../data';

const TransportPage = () => {
    const { t, i18n } = useTranslation()
    return (
        <Box p={'24px 0'}>
            <Box className='container'>
                <Heading {...css.name}>{t("The transport")}</Heading>
                <Heading {...css.title}>{t("Transport to Uzbekistan & Central Asia")}</Heading>
                {
                    carData?.map((item, index) => (
                        <Flex key={index} {...css.box}>
                            <Image {...css.image} src={item.image} />
                            <Box>
                                <Heading {...css.subnames}>{item[`title_${i18n?.language}`]}</Heading>
                                <Text className='information-text' {...css.text}>{item[`text_${i18n?.language}`]}</Text>
                            </Box>
                        </Flex>
                    ))
                }
            </Box>
        </Box>
    );
}

export default TransportPage;

const css = {
    name: {
        color: "#f0cc89",
        fontSize: "22px",
        lineHeight: "28px",
        fontWeight: "500",
        textAlign: "center",
        textTransform: "capitalize",
    },
    title: {
        color: "#2e1f0e",
        fontSize: {
            base: "32px",
            lg: "42px",
        },
        lineHeight: {
            base: "40px",
            lg: "58px",
        },
        fontWeight: "600",
        textAlign: "center",
        textTransform: "capitalize",
        marginTop: "12px",
        marginBottom: "48px"
    },
    box: {
        borderRadius: "6px",
        boxShadow: "rgba(0, 0, 0, 0.08) 0px 1px 16px 0px",
        background: "#fff",
        height: "210px",
        width: "80%",
        marginTop: "36px",
        alignItems: "center",
        margin: "32px auto"
    },
    image: {
        borderRadius: "6px 0 0 6px",
        width: "320px",
        height: "210px",
        objectFit: "cover"
    },
    text: {
        fontSize: "16px",
        lineHeight: "24px",
        color: "#988c7b",
        padding: "0 15px",
    },
    subnames: {
        color: "#2e1f0e",
        fontSize: "22px",
        lineHeight: "26px",
        fontWeight: "600",
        padding: "12px"
    },
}