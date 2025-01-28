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

function About() {
    return (
        <Box id="about" p={"36px 0"}>
            <Box className="container">
                <Flex {...css.list}>
                    <Box>
                        <Heading {...css.name}>About us</Heading>
                        <Heading {...css.title}>
                            We're the top adventure travel company
                        </Heading>
                        <Text {...css.text}>
                            Whether you're yearning for a romantic escape filled with
                            enchanting moments, planning an exciting family-friendly adventure
                            packed with cherished memories, or embarking on a thrilling solo
                            journey to explore the world's wonders, a reputable travel agency
                            possesses the expertise and resources to meticulously curate a
                            custom-tailored itinerary that not only fulfills but far exceeds
                            your wildest dreams and expectations.
                        </Text>
                        <Link href="tel:+998335898888" target="_blank" {...css.button}>
                            Contact with you
                        </Link>
                    </Box>
                    <SimpleGrid mb={{ base: "18px", md: 0 }} gap={"18px"} columns={2}>
                        <Image
                            borderTopLeftRadius="50px"
                            {...css.image}
                            src={'https://www.travel4you.uz/assets/blog-1-Bu0LaC9c.avif'}
                            alt="AboutImageOne"
                        />
                        <Image
                            borderTopRightRadius="50px"
                            {...css.image}
                            src={'https://www.travel4you.uz/assets/blog-1-Bu0LaC9c.avif'}
                            alt="AboutImageOne"
                        />
                        <Image
                            borderBottomLeftRadius="50px"
                            {...css.image}
                            src={'https://www.travel4you.uz/assets/blog-1-Bu0LaC9c.avif'}
                            alt="AboutImageOne"
                        />
                        <Image
                            borderBottomRightRadius="50px"
                            {...css.image}
                            src={'https://www.travel4you.uz/assets/blog-1-Bu0LaC9c.avif'}
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
        color:"#988c7b"
    },
    image: {
        width: {
            base: "100%",
            lg: "250px",
        },
        height: {
            base: "100%",
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