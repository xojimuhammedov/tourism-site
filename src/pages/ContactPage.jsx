import { Box, Button, Flex, Heading, Link, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';

const ContactPage = () => {
    return (
        <Box p={"48px 0"}>
            <Box className='container'>
                <Flex justifyContent={'space-between'} align={'center'} gap={'36px'}>
                    <Box>
                        <Heading {...css.title}>Contact Us</Heading>
                        <Text {...css.text}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident animi ut pariatur aut odio ratione.</Text>
                        <Link {...css.link} target="_blank" href={"tel:+77753378595"}>
                            +7 775 337 85 95
                        </Link>
                        <Link
                            {...css.link}
                            target="_blank"
                            href={"mailto:info@csrtravel.uz"}>
                            info@csrtravel.uz
                        </Link>
                        <SimpleGrid gap={'36px'} mt={'60px'} columns={2}>
                            <Flex gap={'8px'} flexDirection={'column'}>
                                <Heading {...css.name}>Customer Support</Heading>
                                <Text {...css.texts}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis est corporis consequuntur debitis nihil?</Text>
                            </Flex>
                            <Flex gap={'8px'} flexDirection={'column'}>
                                <Heading {...css.name}>Feedback and Suggestions</Heading>
                                <Text {...css.texts}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis est corporis consequuntur debitis nihil?</Text>
                            </Flex>
                            <Flex gap={'8px'} flexDirection={'column'}>
                                <Heading {...css.name}>Media Inquiries</Heading>
                                <Text {...css.texts}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis est corporis consequuntur debitis nihil?</Text>
                            </Flex>
                        </SimpleGrid>
                    </Box>
                    <Box {...css.item}>
                        <Heading {...css.title}>Get in Touch</Heading>
                        <Text {...css.text}>You can reach us anytime</Text>
                        <input type='name' placeholder='FirstName' className='form-input' />
                        <input type='name' placeholder='LastName' className='form-input' />
                        <input type='number' placeholder='Phone Number' className='form-input' />
                        <input type='email' placeholder='Email' className='form-input' />
                        <textarea placeholder='Message' className='form-input' />
                        <Button type='submit' {...css.button}>Submit</Button>
                    </Box>
                </Flex>

                <Flex pb={'24px'} mt={'60px'} align={'center'} gap={'48px'}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11987.542677550337!2d69.25199355!3d41.311350749999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b685b689e13%3A0xaf4cdf526e02f5e7!2sHilton%20Tashkent%20City!5e0!3m2!1sen!2s!4v1738083417224!5m2!1sen!2s"
                        className='form-map'
                        allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    <Box>
                        <Heading {...css.subname}>Our Location</Heading>
                        <Heading {...css.title}>Connecting Near and Far</Heading>
                        <Text mt={'24px'} {...css.name}>Headquarters</Text>
                        <Text mt={'12px'} {...css.texts}>
                            Uzbekistan, Tashkent city, Shayhontohur district, Labzak street 10
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
        width: "390px"
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
        width: "450px",
        padding: "24px"
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