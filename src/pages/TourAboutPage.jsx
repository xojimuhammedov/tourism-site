import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';

const TourAboutPage = () => {
    return (
        <Box p={'24px 0'}>
            <Box className='container'>
                <Flex justify={'space-between'}>
                    <Box w={'60%'}>
                        <Image
                            src={"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Art_Institute_of_Chicago_%2851575570710%29.jpg/250px-Art_Institute_of_Chicago_%2851575570710%29.jpg"}
                            {...css.image}
                        />
                        <Heading {...css.name}>Art Institute of Chicago</Heading>
                        <Text {...css.text}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur rerum deleniti pariatur culpa maxime repudiandae molestiae laboriosam, sunt dicta totam, optio similique eligendi non. Illum non reprehenderit neque atque eveniet.
                        </Text>
                    </Box>
                    <Box {...css.item} w={'35%'}>
                        <Heading {...css.subname}>Our Tours</Heading>
                        <Box {...css.bottom}>
                            <Heading {...css.title}>Art Institute of Chicago</Heading>
                        </Box>
                        <Box {...css.bottom}>
                            <Heading {...css.title}>Art Institute of Chicago</Heading>
                        </Box>
                        <Box {...css.bottom}>
                            <Heading {...css.title}>Art Institute of Chicago</Heading>
                        </Box>
                        <Box {...css.bottom}>
                            <Heading {...css.title}>Art Institute of Chicago</Heading>
                        </Box>
                    </Box>
                </Flex>
            </Box>
        </Box>
    );
}

export default TourAboutPage;

const css = {
    image: {
        borderRadius: "8px",
        height: "450px",
        objectFit: "cover",
        width: "100%"
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
        margin: "12px 0"
    },
    subname: {
        color: "#2e1f0e",
        fontSize: {
            base: "20px",
            lg: "30px",
        },
        lineHeight: {
            base: "30px",
            lg: "45px",
        },
        fontWeight: "600",
        textTransform: "capitalize",
        marginBottom: "18px"
    },
    text: {
        fontSize: "16px",
        lineHeight: "24px",
        color: "#988c7b",
        margin: "10px 0",
        width: "100%"
    },
    item: {
        borderRadius: "12px",
        boxShadow: "rgba(0, 0, 0, 0.08) 0px 1px 16px 0px",
        background: "#fff",
        padding: "24px",
        height: "450px"
    },
    title: {
        color: "#2e1f0e",
        fontSize: {
            base: "20px",
            lg: "22px",
        },
        lineHeight: {
            base: "26px",
            lg: "32px",
        },
        fontWeight: "600",
        textTransform: "capitalize",
        cursor: "pointer",
        paddingBottom: "6px"
    },
    bottom: {
        borderBottom: "0.5px solid #2e1f0e",
        margin: "18px 0"
    }
}