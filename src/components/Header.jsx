import React from 'react';

import HeaderBanner from '../assets/header-banner.jpg'
import { Box, Heading, Image, Link } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from "swiper/react";

import HeaderOne from '../assets/header1.jpg'
import HeaderTwo from '../assets/header2.jpg'
import HeaderThree from '../assets/header3.jpg'

import "swiper/css";
import { Autoplay } from 'swiper/modules';
import { useTranslation } from 'react-i18next';

const Header = () => {
    const {t} = useTranslation()
    return (
        <Box>
            <Swiper 
                loop={true}
                autoplay={{
                    delay: 4500,
                    disableOnInteraction: true,
                  }}
                modules={[Autoplay]}
                className='mySwiper'>
                <SwiperSlide>
                    <Image src={HeaderOne} {...css.image} />
                    <Box  className='container'>
                        <Box>
                            <Heading {...css.title}>{t("Unutilmas Sayohatlar")}</Heading>
                            <Link {...css.link} target="_blank" href={"tel:+998942113377"}>{t("Contact Us")}</Link>
                        </Box>
                    </Box>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={HeaderTwo} {...css.image} />
                    <Box  className='container'>
                        <Box>
                            <Heading {...css.title}>{t("Unutilmas Sayohatlar")}</Heading>
                            <Link {...css.link} target="_blank" href={"tel:+998942113377"}>{t("Contact Us")}</Link>
                        </Box>
                    </Box>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={HeaderThree} {...css.image} />
                    <Box  className='container'>
                        <Box>
                            <Heading {...css.title}>{t("Unutilmas Sayohatlar")}</Heading>
                            <Link {...css.link} target="_blank" href={"tel:+998942113377"}>{t("Contact Us")}</Link>
                        </Box>
                    </Box>
                </SwiperSlide>
            </Swiper>
        </Box>
    );
}

export default Header;

const css = {
    image: {
        objectFit: "cover",
        height: {
            base:"350px",
            lg:"700px"
        },
        width: "100%",
    },
    title:{
        position:"absolute",
        top:"25%",
        zIndex:"99999",
        color:"white",
        fontSize:{
            base:"50px",
            lg:"85px"
        },
        lineHeight:{
            base:"45px",
            lg:"90px"
        },
        fontWeight:"bold",
        width:{
            base:"90%",
            lg:"600px"
        },
        letterSpacing:"2px"
    },
    link:{
        backgroundColor: "#f0cc89",
        color: "#fff",
        marginTop: "18px",
        height:{
            base:"45px",
            lg: "55px"
        },
        width: {
            base:"150px",
            lg:"180px"
        },
        fontSize: "18px",
        lineHeight: "26px",
        fontWeight: "600",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position:"absolute",
        top:{
            base:"50%",
            lg:"53%"
        },
        borderRadius:"20px",
        transition:"0.3s",
        zIndex:"99999",

        _hover:{
            background:"#604132"
        }
    }
}