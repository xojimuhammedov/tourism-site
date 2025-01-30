import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { BASE_URL } from '../service';

import LocationIcon from '../assets/pin.png'


const HotelAboutPage = () => {
    const { t, i18n } = useTranslation()
    const { id } = useParams()
    const [hotel, setHotel] = useState([])

    useEffect(() => {
        axios
            .get(`${BASE_URL}/hotels/${id}`)
            .then((res) => setHotel(res?.data?.data))
            .catch((err) => console.log(err));
    }, []);
    return (
        <Box p={'24px 0'}>
            <Box className='container'>
                <Image
                    src={`${BASE_URL}/uploads/images/${hotel?.hotel_images?.[0]?.image_src}`}
                    {...css.image}
                />
                <Flex>
                    <Box w={'60%'}>
                        <Heading {...css.name}>{hotel[`name_${i18n?.language}`]}</Heading>
                        <Flex
                            {...css.flex}
                        >
                            <Image {...css.icon} src={LocationIcon} /> {hotel?.address}
                        </Flex>
                        <Text {...css.text}>
                            {hotel[`text_${i18n?.language}`]}
                        </Text>
                    </Box>
                </Flex>
            </Box>
        </Box>
    );
}

export default HotelAboutPage;

const css = {
    image: {
        width: "100%",
        objectFit: "cover",
        height: "600px",
        borderRadius: "8px"
    },
    name: {
        color: "#2e1f0e",
        fontSize: {
            base: "25px",
            lg: "35px",
        },
        lineHeight: {
            base: "30px",
            lg: "45px",
        },
        fontWeight: "600",
        textTransform: "capitalize",
        margin: "10px 0",
    },
    text: {
        fontSize: "16px",
        lineHeight: "24px",
        color: "#988c7b",
        width: "100%",
    },
    flex: {
        fontSize: "16px",
        lineHeight: "24px",
        fontWeight:"700",
        color: "#988c7b",
        alignItems: "center",
        gap: "6px",
        margin: "10px 0"
    },
    icon: {
        width: "16px"
    },
}