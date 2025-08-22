import { Box, Flex, Image, Link, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

import { Link as Alink } from 'react-router-dom'

import LogoIcon from '../assets/logo.jpg'
import Language from './Language';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import { BASE_URL } from '../service';
import NavbarMenu from './NavbarMenu';

const Navbar = () => {
    const { t, i18n } = useTranslation()
    const [countryData, setCountryData] = useState([])

    useEffect(() => {
        axios.get(`${BASE_URL}/countries`)
        .then((res) => setCountryData(res?.data?.data))
        .catch((err) => console.log(err))
    },[])
    return (
        <Box {...css.navbar}>
            <Box className='container'>
                <Flex align={'center'} justifyContent={'space-between'}>
                    <Alink to={'/'}>
                        <Image {...css.image} src={LogoIcon} />
                    </Alink>
                    <Flex align={'center'} gap={'36px'}>
                        <Link {...css.link} href='/'>{t("Home")}</Link>
                        <Box className="menu">
                        <Link {...css.link} href="#">{t("Tours")}</Link>
                        <Box className="menu-list">
                            {
                                countryData?.map((item) => (
                                    <Alink key={item?.id} to={`/tours/${item?.id}`}>
                                        <Flex {...css.flex} gap={"6px"} align={'center'}>
                                            <Image
                                                src={`${BASE_URL}/uploads/images/${item?.image_src}`}
                                                {...css.icon}
                                            />{item[`title_${i18n?.language}`]}
                                        </Flex>
                                    </Alink>
                                ))
                            }
                        </Box>
                        </Box>
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
                    </Flex>
                    <Language />
                    <NavbarMenu />
                </Flex>
            </Box>
        </Box>
    );
}

export default Navbar;

const css = {
    navbar: {
        padding: "8px 0"
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
    },
    icon:{
        width:"40px",
        height:"25px"
    },
    flex:{
        fontSize: "18px",
        lineHeight: "22px",
        fontWeight: "500",
        color: "#2e1f0e",
    }
}