import { Box, Flex, Image, Link, Text } from '@chakra-ui/react';
import React from 'react';

import { Link as Alink } from 'react-router-dom'

import LogoIcon from '../assets/logo.jpg'
import Language from './Language';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
    const { t } = useTranslation()
    return (
        <Box {...css.navbar}>
            <Box className='container'>
                <Flex align={'center'} justifyContent={'space-between'}>
                    <Alink to={'/'}>
                        <Image {...css.image} src={LogoIcon} />
                    </Alink>
                    <Flex align={'center'} gap={'36px'}>
                        <Link {...css.link} href='/'>{t("Home")}</Link>
                        <Alink to='/tours'>
                            <Text {...css.link}>{t("Tours")}</Text>
                        </Alink>
                        <Alink to='/destination'>
                            <Text {...css.link}>{t("Destinations")}</Text>
                        </Alink>
                        <Alink to='/hotels'>
                            <Text {...css.link}>{t("Hotels")}</Text>
                        </Alink>
                        <Alink to='/transport'>
                            <Text {...css.link}>{t("Transport")}</Text>
                        </Alink>
                        <Alink to='/gallery'>
                            <Text {...css.link}>{t("Gallery")}</Text>
                        </Alink>
                        <Alink to='/contact'>
                            <Text {...css.link}>{t("Contact Us")}</Text>
                        </Alink>
                        <Language />
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
        color: "#2e1f0e",
        display: {
            base: "none",
            lg: "block"
        },
        transition: "0.3s",

        _hover: {
            color: "#604132"
        }
    }
}