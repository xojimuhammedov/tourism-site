import { Box, Button, Flex, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

import LocationIcon from '../assets/pin.png'
import { useTranslation } from 'react-i18next';

const HotelPage = () => {
    const { t } = useTranslation()
    return (
        <Box p={'24px 0'}>
            <Box className='container'>
                <Heading {...css.name}>{t("The perfect hotels")}</Heading>
                <Heading {...css.title}>{t("Hotels in Uzbekistan & Central Asia")}</Heading>
                <SimpleGrid mt={"48px"}
                    gap={"24px"}
                    columns={{ base: 1, sm: 2, lg: 3 }}>
                    <Box {...css.item}>
                        <Image
                            src={"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Art_Institute_of_Chicago_%2851575570710%29.jpg/250px-Art_Institute_of_Chicago_%2851575570710%29.jpg"}
                            {...css.image}
                        />
                        <Heading {...css.subname}>Art Institute of Chicago</Heading>
                        <Text {...css.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, eveniet.</Text>
                        <Flex
                            {...css.flex}
                        >
                            <Image {...css.icon} src={LocationIcon} /> Tashkent, Uzbekistan
                        </Flex>
                        <hr />
                        <Flex align={'center'} justify={'space-between'}>
                            <Heading {...css.subname}>832$</Heading>
                            <Text {...css.text}>per night</Text>
                        </Flex>
                    </Box>
                </SimpleGrid>
            </Box>
        </Box>
    );
}

export default HotelPage;


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
    },
    item: {
        borderRadius: "8px",
        boxShadow: "rgba(0, 0, 0, 0.08) 0px 1px 16px 0px",
        background: "#fff",
        width: "100%",
        paddingBottom: "18px",
    },
    subname: {
        fontSize: "20px",
        lineHeight: "28px",
        fontWeight: "600",
        color: "#2e1f0e",
        padding: "0 15px",
        margin: "10px 0",
        marginTop: "18px",
    },
    flex: {
        fontSize: "16px",
        lineHeight: "24px",
        color: "#988c7b",
        padding: "0 15px",
        alignItems: "center",
        gap: "6px",
        margin: "10px 0"
    },
    image: {
        borderRadius: "8px 8px 0 0",
        objectFit: "cover",
        width: "100%",
        height: "260px",
    },
    icon: {
        width: "16px"
    },
    text: {
        fontSize: "16px",
        lineHeight: "24px",
        color: "#988c7b",
        padding: "0 15px",
        margin: "10px 0"
    }
}