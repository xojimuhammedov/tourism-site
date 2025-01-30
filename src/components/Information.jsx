import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { countryData, flagData } from '../data';
import { Link } from 'react-router-dom';

const Information = () => {
    const { t } = useTranslation()
    const [flagId, setFlagId] = useState("1")
    const data = countryData.find((item) => item.id === Number(flagId))
    return (
        <Box p={'48px 0'}>
            <Box className='container'>
                <Heading {...css.name}>{t("The amaing Asia")}</Heading>
                <Heading {...css.title}>{t("Information about Central Asia")}</Heading>
                <Flex mt={'36px'} align={'center'} gap={'24px'}>
                    {
                        flagData?.map((item, index) => (
                            <Flex onClick={() => setFlagId(item?.id)} {...css.item} key={index}>
                                <Image {...css.icon} alt={item.title} src={item.icon} />
                                <Heading {...css.subname}>{item.title}</Heading>
                            </Flex>
                        ))
                    }
                </Flex>
                <Flex {...css.box}>
                    <Image {...css.image} src={data.icon} />
                    <Box>
                        <Heading {...css.subnames}>{data.title}</Heading>
                        <Text className='information-text' {...css.text}>{data.text}</Text>
                        <Link to={'/'}>
                            <Text {...css.link}>Batafsil</Text>
                        </Link>
                    </Box>
                </Flex>
            </Box>
        </Box>
    );
}

export default Information;


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
    icon: {
        width: "30px",
        height: "20px",
        objectFit: "cover"
    },
    item: {
        align: "center",
        gap: "8px",
        borderRadius: "6px",
        boxShadow: "rgba(0, 0, 0, 0.08) 0px 1px 16px 0px",
        background: "#fff",
        padding: "8px 12px",
        cursor: "pointer"
    },
    subname: {
        color: "#2e1f0e",
        fontSize: "20px",
        lineHeight: "26px",
        fontWeight: "600",
    },
    box: {
        borderRadius: "6px",
        boxShadow: "rgba(0, 0, 0, 0.08) 0px 1px 16px 0px",
        background: "#fff",
        height: "210px",
        width: "100%",
        marginTop: "36px"
    },
    image: {
        borderRadius: "6px 0 0 6px",
        width: "320px",
        height: "210px",
        objectFit: "cover"
    },
    text: {
        fontSize: "16px",
        lineHeight: "24px",
        color: "#988c7b",
        padding: "0 15px",
    },
    subnames: {
        color: "#2e1f0e",
        fontSize: "22px",
        lineHeight: "26px",
        fontWeight: "600",
        padding: "12px"
    },
    link: {
        backgroundColor: "#604132",
        color: "#fff",
        height: "40px",
        width: "150px",
        marginLeft:"15px",
        marginTop:"12px",
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
}