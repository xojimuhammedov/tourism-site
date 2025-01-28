import { Box, Flex, Image, Link } from '@chakra-ui/react';
import React from 'react';

import { Link as Alink } from 'react-router-dom'

import LogoIcon from '../assets/logo.jpg'

const Navbar = () => {
    return (
        <Box {...css.navbar}>
            <Box className='container'>
                <Flex align={'center'} justifyContent={'space-between'}>
                    <Alink to={'/'}>
                        <Image {...css.image} src={LogoIcon} />
                    </Alink>
                    <Flex gap={'36px'}>
                        <Link {...css.link} href='/'>Home</Link>
                        <Link {...css.link} href='/'>About Us</Link>
                        <Link {...css.link} href='/'>Tours</Link>
                        <Link {...css.link} href='/'>Hotels</Link>
                        <Link {...css.link} href='/'>Contact Us</Link>
                    </Flex>
                </Flex>
            </Box>
        </Box>
    );
}

export default Navbar;

const css = {
    navbar: {
        padding: "12px 0"
    },
    image: {
        width: "120px"
    },
    link: {
        fontSize: "18px",
        lineHeight: "22px",
        fontWeight: "500",
        color: "#2e1f0l",
        display: {
            base: "none",
            lg: "block"
        }
    }
}