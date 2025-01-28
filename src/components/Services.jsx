import { Box, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import { useTranslation } from "react-i18next";


import Slider from "react-slick";

var settings = {
    speed: 7000,
    dots: false,
    autoplay: true,
    infinite: true,
    slidesToShow: 3,
    autoplaySpeed: 0,
    slidesToScroll: 1,
    cssEase: "linear",
    pauseOnHover: false,
    responsive: [
        {
            breakpoint: 1260,
            settings: {
                slidesToShow: 3,
            },
        },
        {
            breakpoint: 1060,
            settings: {
                slidesToShow: 3,
            },
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
            },
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 2,
            },
        },
    ],
};

function Services() {
    const { t } = useTranslation();
    return (
        <Box id="service" {...css.about}>
            <Box className="container">
                <Heading {...css.subname}>{t("Services")}</Heading>
                <Heading {...css.title}>
                    Our Services
                </Heading>
            </Box>
            <Slider {...settings}>
                <Box>
                    <Image {...css.image} src={'https://www.tourstouzbekistan.com/uploads/hotels-uzbekistan-anur-tour.jpg'} />
                    <Box {...css.bottom}>
                        <Heading {...css.name}>Flights</Heading>
                        <Text {...css.subtext}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, est!</Text>
                    </Box>
                </Box>
                <Box>
                    <Image {...css.image} src={'https://www.tourstouzbekistan.com/uploads/hotels-uzbekistan-anur-tour.jpg'} />
                    <Box {...css.bottom}>
                        <Heading {...css.name}>Flights</Heading>
                        <Text {...css.subtext}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, est!</Text>
                    </Box>
                </Box>
                <Box>
                    <Image {...css.image} src={'https://www.tourstouzbekistan.com/uploads/hotels-uzbekistan-anur-tour.jpg'} />
                    <Box {...css.bottom}>
                        <Heading {...css.name}>Flights</Heading>
                        <Text {...css.subtext}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, est!</Text>
                    </Box>
                </Box>
                <Box>
                    <Image {...css.image} src={'https://www.tourstouzbekistan.com/uploads/hotels-uzbekistan-anur-tour.jpg'} />
                    <Box {...css.bottom}>
                        <Heading {...css.name}>Flights</Heading>
                        <Text {...css.subtext}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, est!</Text>
                    </Box>
                </Box>
                <Box>
                    <Image {...css.image} src={'https://www.tourstouzbekistan.com/uploads/hotels-uzbekistan-anur-tour.jpg'} />
                    <Box {...css.bottom}>
                        <Heading {...css.name}>Flights</Heading>
                        <Text {...css.subtext}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, est!</Text>
                    </Box>
                </Box>
            </Slider>
        </Box>
    );
}

export default Services;

const css = {
    about: {
        padding: {
            base: "36px 0",
            lg: "72px 0",
        },
        paddingBottom:"0 !important"
    },
    subname: {
        color: "#f0cc89",
        fontSize: "22px",
        fontWeight: "600",
        lineHeight: "normal",
        marginBottom: "24px",
    },
    title: {
        fontSize: {
            base: "30px",
            sm: "50px",
        },
        lineHeight: {
            base: "40px",
            sm: "60px",
        },
        fontWeight: "600",
        letterSpacing: "0.65px",
        color: "#2e1f0e",
        marginBottom: "36px"
    },
    name: {
        bottom: "100px",
        left: "20px",
        fontSize: "20px",
        lineHeight: "normal",
        color: "#2e1f0e",
        margin: "5px 0"
    },
    subtext: {
        bottom: "90px",
        left: "20px",
        fontSize: "14px",
        lineHeight: "normal",
        fontWeight: "400",
        color: "#000",
    },
    image: {
        width: "95%",
        borderRadius:"8px",
        height:"320px",
        objectFit:"cover"
    },
    bottom: {
        backgroundColor: "white",
        position: "relative",
        width: "90%",
        bottom: "100px",
        left: "10px",
        padding: "8px 12px",
        opacity: "0.8",
        borderRadius:"8px",
    }
};