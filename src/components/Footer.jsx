import {
    Box,
    Flex,
    Heading,
    Image,
    SimpleGrid,
    Text,
    Link,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { Link as Alink } from "react-router-dom";
import Telegram from "../assets/Telegram";
import Instagram from "../assets/Instagram";

import LogoIcon from '../assets/logo.png'

function Footer() {
    const { t } = useTranslation();
    return (
        <Box {...css.footer}>
            <Box className="container">
                <Image {...css.image} src={LogoIcon} alt="Logo" />
                <SimpleGrid
                    {...css.box}
                    columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
                    spacing={10}>
                    <Flex flexDirection={"column"}>
                        <Heading {...css.title}>{t("INFORMATION")}</Heading>

                        <Alink onClick={() => window.scrollTo(0, 0)} to={"/company"}>
                            <Text {...css.link}>{t("About")}</Text>
                        </Alink>
                        <Alink onClick={() => window.scrollTo(0, 0)} to={"/vacancy"}>
                            <Text {...css.link}>{t("Gallery")}</Text>
                        </Alink>
                        <Alink onClick={() => window.scrollTo(0, 0)} to={"/contact"}>
                            <Text {...css.link}>{t("Tours")}</Text>
                        </Alink>
                        <Alink onClick={() => window.scrollTo(0, 0)} to={"/tariff"}>
                            <Text {...css.link}>{t("Contact Us")}</Text>
                        </Alink>
                    </Flex>
                    <Flex flexDirection={"column"}>
                        <Heading {...css.title}>{t("SERVICES")}</Heading>
                        <Alink to={"/"}>
                            <Text {...css.link}>{t("Международные грузоперевозки")}</Text>
                        </Alink>
                        <Alink to={"/"}>
                            <Text {...css.link}>{t("Складирование и обработка грузов")}</Text>
                        </Alink>
                        <Alink to={"/"}>
                            <Text {...css.link}>{t("Таможенное оформление")}</Text>
                        </Alink>
                        <Alink to={"/"}>
                            <Text {...css.link}>{t("Логистический консалтинг")}</Text>
                        </Alink>
                    </Flex>
                    <Flex flexDirection={"column"}>
                        <Heading {...css.title}>{t("Contact")}</Heading>
                        <Link {...css.link} target="_blank" href={"tel:+998977472806"}>
                            +998 97 747 28 06
                        </Link>
                        <Link
                            {...css.link}
                            target="_blank"
                            href={"mailto:info@csrtravel.uz"}>
                            info@csrtravel.uz
                        </Link>
                        <Link
                            target="_blank"
                            {...css.link}
                            href={"https://maps.app.goo.gl/TArvqgcs41X2c1zQ8"}>
                            {t(
                                "Республика Казахстан, г.Алматы, Тулебаева 38, Бизнес центр Жетысу, офис 512"
                            )}
                        </Link>
                    </Flex>
                    <Flex flexDirection={"column"}>
                        <Heading {...css.title}>{t("FOLLOW US ON SOCIAL MEDIA")}</Heading>
                        <Text {...css.link}>{t("Join Us")}</Text>
                        <Flex gap={"12px"}>
                            <Link href="/">
                                <Instagram />
                            </Link>
                            <Link target="_blank" href="https://t.me/aslgkz">
                                <Telegram />
                            </Link>
                        </Flex>
                    </Flex>
                </SimpleGrid>
                <Text
                    color={"#2e1f0e"}
                    fontSize={"16px"}
                    textAlign={"center"}
                    lineHeight={"24px"}
                    mt={"40px"}>
                    © 2025 {t("All rights reserved")}
                </Text>
            </Box>
        </Box>
    );
}

export default Footer;

const css = {
    footer: {
        background: "#f0cc89",
        padding: "40px 0",
    },
    title: {
        color: "#2e1f0e",
        fontSize: "16px",
        lineHeight: "24px",
        marginBottom: "10px",
        fontWeight: "700",
        textTransform: "uppercase"
    },
    link: {
        color: "#2e1f0e",
        fontSize: "16px",
        lineHeight: "24px",
        marginBottom: "10px",
        fontWeight: "500",
        transition: "0.3s",

        _hover: {
            textDecoration: "none",
        },
    },
    box: {
        borderBottom: "1px solid #2e1f0e",
        padding: "48px 0",
        borderTop: "1px solid #2e1f0e",
    },
    icon: {
        width: "25px",
    },
    image: {
        width: "220px",
        height: "130px",
        cursor: "pointer",
        marginBottom: "18px"
    },
};