import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BASE_URL } from '../service';
import { Link, useParams } from 'react-router-dom';

const DestinationAboutPage = () => {
    const { t, i18n } = useTranslation()
    const { id } = useParams()
    const [tour, setTour] = useState([])
    const [subtour, setSubtour] = useState([])

    useEffect(() => {
        axios
            .get(`${BASE_URL}/prods/${id}`)
            .then((res) => setTour(res?.data?.data))
            .catch((err) => console.log(err));
    }, [id]);

    useEffect(() => {
        axios
            .get(`${BASE_URL}/subtours?limit=1000`)
            .then((res) => setSubtour(res?.data?.data))
            .catch((err) => console.log(err));
    }, []);
    return (
        <Box p={'24px 0'}>
            <Box className='container'>
                <Flex justify={'space-between'}>
                    <Box w={'60%'}>
                        <Image
                            src={`${BASE_URL}/uploads/images/${tour?.image_src}`}
                            {...css.image}
                        />
                        <Heading {...css.name}>{tour[`title_${i18n?.language}`]}</Heading>
                        <Text {...css.text}>
                            {tour[`text_${i18n?.language}`]}
                        </Text>
                    </Box>
                    <Box {...css.item} w={'35%'}>
                        <Heading {...css.subname}>{t("Our Tours")}</Heading>
                        {
                            subtour?.map((item, index) => (
                                <Link to={`/tours/about/${item?.id}`}>
                                    <Box key={index} {...css.bottom}>
                                        <Heading className='tour-name' {...css.title}>{item[`name_${i18n?.language}`]}</Heading>
                                    </Box>
                                </Link>
                            ))
                        }
                    </Box>
                </Flex>
            </Box>
        </Box>
    );
}

export default DestinationAboutPage;

const css = {
    image: {
        borderRadius: "8px",
        height: "450px",
        objectFit: "cover",
        width: "100%"
    },
    images: {
        borderRadius: "8px",
        height: "400px",
        objectFit: "cover",
        width: "95% !important",
        marginTop: "36px"
    },
    name: {
        color: "#2e1f0e",
        fontSize: {
            base: "25px",
            lg: "35px",
        },
        lineHeight: {
            base: "30px",
            lg: "45px",
        },
        fontWeight: "600",
        margin: "12px 0"
    },
    subname: {
        color: "#2e1f0e",
        fontSize: {
            base: "20px",
            lg: "30px",
        },
        lineHeight: {
            base: "30px",
            lg: "45px",
        },
        fontWeight: "600",
        marginBottom: "18px"
    },
    text: {
        fontSize: "16px",
        lineHeight: "24px",
        color: "#988c7b",
        margin: "10px 0",
        width: "100%"
    },
    item: {
        borderRadius: "12px",
        boxShadow: "rgba(0, 0, 0, 0.08) 0px 1px 16px 0px",
        background: "#fff",
        padding: "24px",
        height: "450px"
    },
    title: {
        color: "#2e1f0e",
        fontSize: {
            base: "20px",
            lg: "22px",
        },
        lineHeight: {
            base: "26px",
            lg: "32px",
        },
        fontWeight: "600",
        cursor: "pointer",
        paddingBottom: "6px"
    },
    bottom: {
        borderBottom: "0.5px solid #2e1f0e",
        margin: "18px 0"
    }
}
