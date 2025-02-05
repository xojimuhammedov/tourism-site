import React from 'react';

import HeaderBanner from '../assets/header-banner.jpg'
import { Box, Image } from '@chakra-ui/react';

const Header = () => {
    return (
        <Box >
            <Image src={HeaderBanner} {...css.image} />
            <Box className='container'></Box>
        </Box>
    );
}

export default Header;

const css = {
    image: {
        objectFit: "cover",
        height: {
            base:"350px",
            lg:"100%"
        },
        width: "100%"
    }
}