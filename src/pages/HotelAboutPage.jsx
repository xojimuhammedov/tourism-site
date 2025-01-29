import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';

import LocationIcon from '../assets/pin.png'

const HotelAboutPage = () => {
    return (
        <Box p={'24px 0'}>
            <Box className='container'>
                <Image
                    src={"https://avatars.mds.yandex.net/get-altay/1773749/2a0000016a7eb16d0e2d4357d3a5156f319e/XXL_height"}
                    {...css.image}
                />
                <Flex>
                    <Box w={'60%'}>
                        <Heading {...css.name}>Art Institute of Chicago</Heading>
                        <Text {...css.text}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur rerum deleniti pariatur culpa maxime repudiandae molestiae laboriosam, sunt dicta totam, optio similique eligendi non. Illum non reprehenderit neque atque eveniet.
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
}