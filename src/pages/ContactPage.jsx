import { Box, Button, Flex, Heading, Link, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';
import { useTranslation } from 'react-i18next';

const ContactPage = () => {
    const { t } = useTranslation()
    return (
        <Box p={{ base: "24px 0", lg: "48px 0" }}>
            <Box className='container'>
                <Flex flexDirection={{ base: "column", lg: "row" }} justifyContent={'space-between'} align={'center'} gap={'36px'}>
                    <Box>
                        <Heading {...css.title}>{t("Contact Us")}</Heading>
                        <Text {...css.text}>{t("Have questions or need assistance? Feel free to reach out to us. We’re here to help with any inquiries.")} </Text>
                        <Link {...css.link} target="_blank" href={"tel:+998977472806"}>
                            +998 97 747 28 06
                        </Link>
                        <Link
                            {...css.link}
                            target="_blank"
                            href={"mailto:info@csrtravel.uz"}>
                            info@csrtravel.uz
                        </Link>
                        <SimpleGrid gap={'36px'} mt={'60px'} columns={{ base: 1, lg: 2 }}>
                            <Flex gap={'8px'} flexDirection={'column'}>
                                <Heading {...css.name}>{t("Customer Support")}</Heading>
                                <Text {...css.texts}>{t("Contact us for quick and efficient solutions to your issues.")}</Text>
                            </Flex>
                            <Flex gap={'8px'} flexDirection={'column'}>
                                <Heading {...css.name}>{t("Feedback and Suggestions")}</Heading>
                                <Text {...css.texts}>{t("We appreciate your feedback and suggestions to improve our services.")}</Text>
                            </Flex>
                            <Flex gap={'8px'} flexDirection={'column'}>
                                <Heading {...css.name}>{t("Media Inquiries")}</Heading>
                                <Text {...css.texts}>{t("Reach out for press inquiries, collaborations, and interviews.")}</Text>
                            </Flex>
                        </SimpleGrid>
                    </Box>
                    <Box {...css.item}>
                        <Heading {...css.title}>{t("Get in Touch")}</Heading>
                        <Text {...css.text}>{t("You can reach us anytime")}</Text>
                        <input type='name' placeholder={t("FirstName")} className='form-input' />
                        <input type='name' placeholder={t("LastName")} className='form-input' />
                        <input type='number' placeholder={t("Phone Number")} className='form-input' />
                        <input type='email' placeholder={t("Email")} className='form-input' />
                        <textarea placeholder={t("Message")} className='form-input' />
                        <Button type='submit' {...css.button}>{t("Submit")}</Button>
                    </Box>
                </Flex>

                <Flex flexDirection={{ base: "column", lg: "row" }} pb={'24px'} mt={'60px'} align={'center'} gap={'48px'}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11987.542677550337!2d69.25199355!3d41.311350749999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b685b689e13%3A0xaf4cdf526e02f5e7!2sHilton%20Tashkent%20City!5e0!3m2!1sen!2s!4v1738083417224!5m2!1sen!2s"
                        className='form-map'
                        allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    <Box>
                        <Heading {...css.subname}>{t("Our Location")}</Heading>
                        <Heading {...css.title}>{t("Connecting Near and Far")}</Heading>
                        <Text mt={'24px'} {...css.name}>{t("Headquarters")}</Text>
                        <Text mt={'12px'} {...css.texts}>
                            Uzbekistan, Tashkent, Yakkasaray district Shota Rustaveli street 43
                        </Text>
                    </Box>
                </Flex>
            </Box>
        </Box>
    );
}

export default ContactPage;

const css = {
    title: {
        color: "#2e1f0e",
        fontSize: {
            base: "32px",
            lg: "42px",
        },
        lineHeight: {
            base: "40px",
            lg: "58px",
        },
        fontWeight: "600",
        textTransform: "capitalize",
        marginTop: "12px",
    },
    link: {
        color: "#2e1f0e",
        fontSize: "16px",
        lineHeight: "24px",
        marginBottom: "10px",
        fontWeight: "500",
        transition: "0.3s",
        display: "block",

        _hover: {
            textDecoration: "none",
        },
    },
    text: {
        color: "#988c7b",
        fontSize: "16px",
        lineHeight: "24px",
        marginBottom: "10px",
        width: {
            base: "100%",
            lg: "410px"
        }
    },
    name: {
        fontSize: "18px",
        lineHeight: "24px",
        color: "#2e1f0e",
    },
    texts: {
        color: "#988c7b",
        fontSize: "14px",
        lineHeight: "24px",
        width: "270px"
    },
    item: {
        borderRadius: "12px",
        boxShadow: "rgba(0, 0, 0, 0.08) 0px 1px 16px 0px",
        background: "#fff",
        width: {
            base: "100%",
            lg: "450px"
        },
        padding: {
            base: "12px",
            lg: "24px"
        }
    },
    button: {
        backgroundColor: "#604132",
        color: "#fff",
        height: "45px",
        width: "100%",
        margin: "0px auto",
        fontSize: "16px",
        lineHeight: "24px",
        fontWeight: "500",
        marginTop: "20px",
        transition: "0.3s",
        borderRadius: "12px",

        _hover: {
            backgroundColor: "#2e1f0e",
        },
    },
    subname: {
        color: "#f0cc89",
        fontSize: "22px",
        lineHeight: "28px",
        fontWeight: "500",
        textTransform: "capitalize",
    }
}