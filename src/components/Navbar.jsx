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
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            
            // Show nav when scrolling up, hide when scrolling down
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
            
            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);


    useEffect(() => {
        axios.get(`${BASE_URL}/countries`)
        .then((res) => setCountryData(res?.data?.data))
        .catch((err) => console.log(err))
    },[])

    return (
        <Box 
            top={lastScrollY > 90 ? "0" : "40px"} 
            {...css.navbar}
        >
            <Box className='container'>
                <Flex align={'center'} justifyContent={'space-between'}>
                    <Alink to={'/'}>
                        <Image {...css.image} src={LogoIcon} />
                    </Alink>
                    <Flex {...css.navLinks} align={'center'} gap={'30px'}>
                        <Link {...css.link} href='/'>{t("Home")}</Link>
                        <Alink to='/about'>
                            <Text {...css.link}>{t("About Us")}</Text>
                        </Alink>
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
                    <Flex gap={'8px'}>
                        <Language />
                        <NavbarMenu />
                    </Flex>
                </Flex>
            </Box>
        </Box>
    );
}

export default Navbar;

const css = {
    navbar: {
        position: "fixed",
        left: "0",
        right: "0",
        width: "100%",
        backgroundColor: "white",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        padding: "8px 0",
        transition: "all 0.3s ease",
        zIndex:"1001"
    },
    image: {
        width: {base: "80px", md: "100px", lg: "120px"}
    },
    navLinks: {
        display: {base: "none", lg: "flex"},
        gap: {base: "20px", xl: "36px"}
    },
    link: {
        fontSize: {base: "16px", lg: "18px"},
        lineHeight: {base: "20px", lg: "22px"},
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
        width: {base: "30px", md: "35px", lg: "40px"},
        height: {base: "20px", md: "22px", lg: "25px"}
    },
    flex:{
        fontSize: {base: "14px", md: "16px", lg: "18px"},
        lineHeight: {base: "18px", md: "20px", lg: "22px"},
        fontWeight: "500",
        color: "#2e1f0e",
    }
}