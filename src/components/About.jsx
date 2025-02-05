import {
    Box,
    Flex,
    Heading,
    Image,
    Link,
    SimpleGrid,
    Text,
} from "@chakra-ui/react";
import React from "react";
import { useTranslation } from "react-i18next";

function About() {
    const { t } = useTranslation()
    return (
        <Box id="about" p={"36px 0"}>
            <Box className="container">
                <Flex {...css.list}>
                    <Box>
                        <Heading {...css.name}>{t("About Us")}</Heading>
                        <Heading {...css.title}>
                            {t("We're the top adventure travel company")}
                        </Heading>
                        <Text {...css.text}>
                            {t("about_text")}
                        </Text>
                        <Link href="tel:+998977472806" target="_blank" {...css.button}>
                            {t("Contact with you")}
                        </Link>
                    </Box>
                    <SimpleGrid mb={{ base: "18px", md: 0 }} gap={"18px"} columns={2}>
                        <Image
                            borderTopLeftRadius={{ base: "12px", lg: "50px" }}
                            {...css.image}
                            src={'http://www.universal-tours.ru/wp-content/uploads/2018/01/5-Medrese-SHer-Dor-na-ploshhadi-Registan.jpg'}
                            alt="AboutImageOne"
                        />
                        <Image
                            borderTopRightRadius={{ base: "12px", lg: "50px" }}
                            {...css.image}
                            src={'https://static.tildacdn.com/tild3635-6534-4563-b934-636465633166/634579f7-979b-4f63-8.jpg'}
                            alt="AboutImageOne"
                        />
                        <Image
                            borderBottomLeftRadius={{ base: "12px", lg: "50px" }}
                            {...css.image}
                            src={'https://i.incamp.ru/u/6/877/summer-innovation-camp-armeniy-12956-964-pic-1200x630.jpg'}
                            alt="AboutImageOne"
                        />
                        <Image
                            borderBottomRightRadius={{ base: "12px", lg: "50px" }}
                            {...css.image}
                            src={'https://img.pac.ru/resorts/213093/422456/big/BA50999F7F0001015388D5174B197A6A.jpg'}
                            alt="AboutImageOne"
                        />
                    </SimpleGrid>
                </Flex>
            </Box>
        </Box>
    );
}

export default About;

const css = {
    name: {
        color: "#f0cc89",
        fontSize: "18px",
        lineHeight: "25px",
        fontWeight: "500",
    },
    title: {
        color: "#2e1f0e",
        fontSize: {
            base: "32px",
            md: "42px",
        },
        lineHeight: {
            base: "40px",
            md: "58px",
        },
        fontWeight: "600",
        width: {
            base: "100%",
            lg: "680px",
        },
        textTransform: "capitalize",
    },
    text: {
        fontSize: "16px",
        lineHeight: "26px",
        fontWeight: "400",
        width: {
            base: "100%",
            lg: "600px",
        },
        marginTop: "18px",
        color: "#988c7b"
    },
    image: {
        width: {
            base: "100%",
            lg: "250px",
        },
        height: {
            base: "150px",
            lg: "250px",
        },
        objectFit: "cover",
    },
    list: {
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: {
            base: "column-reverse",
            lg: "row",
        },
    },
    button: {
        backgroundColor: "#604132",
        color: "#fff",
        marginTop: "18px",
        height: "45px",
        width: "180px",
        fontSize: "16px",
        lineHeight: "24px",
        fontWeight: "500",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "0.3s",
        borderRadius: "24px",

        _hover: {
            textDecoration: "none",
        },
    },
};