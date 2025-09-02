import { Box, Button, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { aboutData } from '../data';
import { Link } from 'react-router-dom';

const AboutPage = () => {
    const { t, i18n } = useTranslation()
    return (
        <Box p={'48px 0'}>
            <Box className='container'>
                <Heading {...css.name}>{t(" More Information about Uzbekistan")}</Heading>
                <SimpleGrid mt={'48px'} columns={{base:1, lg:3}} gap={'24px'}>
                    {
                        aboutData?.map((item) => (
                            <Box key={item?.id} {...css.item}>
                                <Image src={item.image} {...css.image} />
                                <Heading className='tour-name' {...css.subnames}>{item[`title_${i18n?.language}`]}</Heading>
                                <Text className='service-text' {...css.text}>{item[`text_${i18n?.language}`]}</Text>
                                <Link
                                    onClick={() => window.scrollTo(0, 0)}
                                    to={`/about/${item?.id}`}>
                                    <Button {...css.button}>{t("Details")}</Button>
                                </Link>
                            </Box>
                        ))
                    }
                </SimpleGrid>
            </Box>
        </Box>
    );
}

export default AboutPage;

const css = {
    name: {
        color: "#f0cc89",
        fontSize: "45px",
        fontWeight: "600",
        lineHeight: "normal",
        textAlign: "center",
    },
    item: {
        borderRadius: "8px",
        boxShadow: "rgba(0, 0, 0, 0.08) 0px 1px 16px 0px",
        background: "#fff",
        width: "100%",
        paddingBottom: "18px",
    },
    subnames: {
        fontSize: "24px",
        lineHeight: "32px",
        fontWeight: "600",
        color: "#2e1f0e",
        padding: "0 15px",
        margin: "10px 0",
        marginTop: "18px",
    },
    image: {
        borderRadius: "8px 8px 0 0",
        objectFit: "cover",
        width: "100%",
        height: "260px",
    },
    text: {
        fontSize: "16px",
        lineHeight: "24px",
        color: "#988c7b",
        padding: "0 15px",
        margin: "10px 0"
    },
    button: {
        backgroundColor: "#604132",
        color: "#fff",
        height: "45px",
        width: "94%",
        margin: "10px 15px",
        fontSize: "16px",
        lineHeight: "24px",
        fontWeight: "500",
        marginTop: "20px",
        transition: "0.3s",
        borderRadius: "12px",

        _hover: {
            backgroundColor: "#2e1f0e",
        },
    },
}