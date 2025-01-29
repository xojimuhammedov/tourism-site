import { Box, Flex, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';

import LocationIcon from '../assets/pin.png'
import { useTranslation } from 'react-i18next';

const TourPage = () => {
    const {t} = useTranslation()
    return (
        <Box p={'36px 0'}>
            <Box className='container'>
                <Heading {...css.name}>{t("The perfect tour")}</Heading>
                <Heading {...css.title}>{t("All Tours")}</Heading>
                <Flex mt={'24px'} gap={'18px'} align={'center'}>
                    <Heading {...css.subname}>All Tours</Heading>
                    <Heading {...css.subname}>Tashkent</Heading>
                    <Heading {...css.subname}>Samarkand</Heading>
                    <Heading {...css.subname}>Bukhara</Heading>
                    <Heading {...css.subname}>Khiva</Heading>
                </Flex>
                <SimpleGrid mt={"48px"}
                    gap={"24px"}
                    columns={{ base: 1, sm: 2, lg: 3 }}>
                    <Box {...css.item}>
                        <Image
                            src={"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Art_Institute_of_Chicago_%2851575570710%29.jpg/250px-Art_Institute_of_Chicago_%2851575570710%29.jpg"}
                            {...css.image}
                        />
                        <Heading {...css.subnames}>Art Institute of Chicago</Heading>
                        <Flex align={'center'} justify={'space-between'}>
                            <Flex
                                {...css.flex}
                            >
                                <Image {...css.icon} src={LocationIcon} /> Destination:
                            </Flex>
                            <Text {...css.flex}>Uzbekistan, Tashkent</Text>
                        </Flex>
                        <Flex align={'center'} justify={'space-between'}>
                            <Flex
                                {...css.flex}
                            >
                                <Image {...css.icon} src={LocationIcon} /> Dates:
                            </Flex>
                            <Text {...css.flex}>Avaible from April to December</Text>
                        </Flex>
                        <Flex align={'center'} justify={'space-between'}>
                            <Flex
                                {...css.flex}
                            >
                                <Image {...css.icon} src={LocationIcon} /> Group size:
                            </Flex>
                            <Text {...css.flex}>Max 10 people</Text>
                        </Flex>
                        <hr />
                        <Flex align={'center'} justify={'space-between'}>
                            <Heading {...css.subname}>832$</Heading>
                            <Text {...css.text}>per night</Text>
                        </Flex>
                    </Box>
                </SimpleGrid>
            </Box>
        </Box>
    );
}

export default TourPage;

const css = {
    name: {
        color: "#f0cc89",
        fontSize: "22px",
        lineHeight: "28px",
        fontWeight: "500",
        textAlign: "center",
        textTransform: "capitalize",
    },
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
        textAlign: "center",
        textTransform: "capitalize",
        marginTop: "12px",
    },
    subname: {
        fontWeight: "400",
        fontSize: "22px",
        lineHeight: "28px",
        transition: "0.3s",
        padding: "10px 12px",
        cursor: "pointer",
        border: "1px solid white",

        _hover: {
            border: "1px solid black",
        }
    },
    item: {
        borderRadius: "8px",
        boxShadow: "rgba(0, 0, 0, 0.08) 0px 1px 16px 0px",
        background: "#fff",
        width: "100%",
        paddingBottom: "18px",
    },
    subnames: {
        fontSize: "24px",
        lineHeight: "32px",
        fontWeight: "600",
        color: "#2e1f0e",
        padding: "0 15px",
        margin: "10px 0",
        marginTop: "18px",
    },
    flex: {
        fontSize: "16px",
        lineHeight: "24px",
        color: "#988c7b",
        padding: "0 15px",
        alignItems: "center",
        gap: "6px",
        margin: "6px 0"
    },
    image: {
        borderRadius: "8px 8px 0 0",
        objectFit: "cover",
        width: "100%",
        height: "260px",
    },
    icon: {
        width: "16px"
    },
    text: {
        fontSize: "16px",
        lineHeight: "24px",
        color: "#988c7b",
        padding: "0 15px",
        margin: "10px 0"
    }
}