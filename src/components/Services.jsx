import { Box, Heading, Image, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { useTranslation } from "react-i18next";

function Services() {
    const { t } = useTranslation();
    return (
        <Box id="service" {...css.about}>
            <Box className="container">
                <Heading {...css.subname}>{t("Services")}</Heading>
                <Heading {...css.title}>
                    Our Services
                </Heading>
                <SimpleGrid
                    mt={"60px"}
                    gap={"18px"}
                    columns={{ base: 1, sm: 2, md: 3, lg: 4 }}>
                    <Box {...css.item}>
                        <Image {...css.image} src={'https://www.tourstouzbekistan.com/uploads/hotels-uzbekistan-anur-tour.jpg'} alt="ServiceImage" />
                        <Heading {...css.name}>Hotels</Heading>
                    </Box>
                    <Box {...css.item}>
                        <Image {...css.image} src={'https://www.uzairways.com/sites/default/files/inline-images/4_1_0.jpg'} alt="ServiceImage" />
                        <Heading {...css.name}>Flights</Heading>
                    </Box>
                    <Box {...css.item}>
                        <Image {...css.image} src={'https://millenniumsilkroadtravel.uz/assets/images/features/uzvisa.jpg'} alt="ServiceImage" />
                        <Heading {...css.name}>Visa</Heading>
                    </Box>
                    <Box {...css.item}>
                        <Image {...css.image} src={'https://ea-travel.uz/images/Uzbekistan-Travelling-By-Bus-ea-tips-image-3.jpg'} alt="ServiceImage" />
                        <Heading {...css.name}>Transport</Heading>
                    </Box>
                </SimpleGrid>
            </Box>
        </Box>
    );
}

export default Services;

const css = {
    about: {
        padding: {
            base: "36px 0",
            lg: "90px 0",
        },
    },
    subname: {
        color: "#604132",
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
        color: "#f0cc89"
    },
    subtext: {
        fontSize: {
            base: "16px",
            lg: "18px",
        },
        lineHeight: "28px",
        fontWeight: "400",
        color: "#988c7b",
        letterSpacing: "0.18px",
        width: {
            base: "100%",
            lg: "400px",
        },
    },
    image: {
        height: "450px",
        width: "100%",
        objectFit: "cover",
        borderRadius: "20px",
    },
    item: {
        position: "relative",
        overflow: "hidden",
    },
    name: {
        position: "absolute",
        zIndex: "999",
        bottom: "50px",
        left: "20px",
        fontSize: "25px",
        lineHeight: "normal",
        fontWeight: "500",
        color: "#FFFFFF",
    },
};