import { Box, Flex, Link } from '@chakra-ui/react';
import React from 'react';
import Instagram from '../assets/Instagram';
import Telegram from '../assets/Telegram';

const Nav = () => {
    return (
        <Box {...css.nav}>
            <Box className='container'>
                <Flex justifyContent={'flex-end'} gap={'12px'} align={'center'}>
                    <Link {...css.link} target='_blank' href='+998947113377'>+998 94 711 33 77</Link>
                    <Link {...css.link} target='_blank' href={"mailto:info@csrtravel.uz"}>info@csrtravel.uz</Link>
                    <Flex gap={"12px"}>
                        <Link target="_blank" href="https://www.instagram.com/century_silk_road_travel/">
                            <Instagram />
                        </Link>
                        <Link target="_blank" href="https://t.me/+998977472806">
                            <Telegram />
                        </Link>
                    </Flex>
                </Flex>
            </Box>
        </Box>
    );
}

export default Nav;

const css = {
    nav:{
        padding:"8px 0",
        background: "#f0cc89",
    },
    link:{
        color:"#2e1f0e",
        fontWeight:"500",
        fontSize:{
            base:"14px",
            lg:"16px"
        },
        lineHeight:"24px"
    }
}