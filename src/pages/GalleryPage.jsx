import { Box, Heading } from '@chakra-ui/react';
import React, { useState } from 'react';

const GalleryPage = () => {

    return (
        <Box>
            <Box className='container'>
                <Heading {...css.name}>The Perfect Gallery</Heading>
                <Heading {...css.title}>Gallery in Uzbekistan & Central Asia</Heading>
            </Box>
        </Box>
    );
}

export default GalleryPage;

const css = {
    name: {
        color: "#604132",
        fontSize: "18px",
        lineHeight: "25px",
        fontWeight: "500",
        textAlign: "center",
        textTransform: "capitalize",
    },
    title: {
        color: "#f0cc89",
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
        marginBottom: "36px"
    },
}