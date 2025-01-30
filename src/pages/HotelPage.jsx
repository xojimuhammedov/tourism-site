import { Box, Button, Flex, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

import LocationIcon from '../assets/pin.png'
import { useTranslation } from 'react-i18next';
import { BASE_URL } from '../service';
import axios from 'axios';
import { Link } from 'react-router-dom';

const HotelPage = () => {
    const { t, i18n } = useTranslation()

    const [hotel, setHotel] = useState([])

    useEffect(() => {
        axios
            .get(`${BASE_URL}/hotels`)
            .then((res) => setHotel(res?.data?.data))
            .catch((err) => console.log(err));
    }, []);
    return (
        <Box p={'24px 0'}>
            <Box className='container'>
                <Heading {...css.name}>{t("The perfect hotels")}</Heading>
                <Heading {...css.title}>{t("Hotels in Uzbekistan & Central Asia")}</Heading>
                <SimpleGrid mt={"48px"}
                    gap={"24px"}
                    columns={{ base: 1, sm: 2, lg: 3 }}>
                    {
                        hotel?.map((item, index) => (
                            <Box key={index} {...css.item}>
                                <Image
                                    src={`${BASE_URL}/uploads/images/${item?.hotel_images[0]?.image_src}`}
                                    {...css.image}
                                />
                                <Heading {...css.subname}>{item[`name_${i18n?.language}`]}</Heading>
                                <Text className='service-text' {...css.text}> {item[`text_${i18n?.language}`]}</Text>
                                <Flex
                                    {...css.flex}
                                >
                                    <Image {...css.icon} src={LocationIcon} /> {item?.address}
                                </Flex>
                                <hr />
                                <Link
                                    onClick={() => window.scrollTo(0, 0)}
                                    to={`/hotels/about/${item?.id}`}>
                                    <Button {...css.button}>{t("Details")}</Button>
                                </Link>
                                {/* <Flex align={'center'} justify={'space-between'}>
                                    <Heading {...css.subname}>832$</Heading>
                                    <Text {...css.text}>per night</Text>
                                </Flex> */}
                            </Box>
                        ))
                    }
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
        transition: "0.3s",
        borderRadius: "8px",

        _hover: {
            backgroundColor: "#2e1f0e",
        },
    },
}