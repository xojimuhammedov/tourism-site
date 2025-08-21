import { Box, Button, Flex, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

import LocationIcon from '../assets/pin.png'
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import { BASE_URL } from '../service';
import { Link, useParams } from 'react-router-dom';

const TourPage = () => {
    const { t, i18n } = useTranslation()
    const {id} = useParams()
    const [city, setCity] = useState([])
    const [subtour, setSubtour] = useState([])
    const [data, setData] = useState([])
    const [tourId, setTourId] = useState(null)

    useEffect(() => {
        axios
            .get(`${BASE_URL}/cities/`)
            .then((res) => setCity(res?.data?.data?.filter((item) => item?.country_id === id)))
            .catch((err) => console.log(err));
    }, [id]);


    useEffect(() => {
        axios
            .get(`${BASE_URL}/subtours/`)
            .then((res) => {
                setSubtour(res?.data?.data.filter((item) => item?.country_id === id))
                setData(res?.data?.data?.filter((item) => item?.city_id === tourId))
            })
            .catch((err) => console.log(err));
    }, [tourId, id]);
    
    return (
        <Box p={'36px 0'}>
            <Box className='container'>
                <Heading {...css.name}>{t("The perfect tour")}</Heading>
                <Heading {...css.title}>{t("All Tours")}</Heading>
                <Flex flexDirection={{base:"column", lg:"row"}} mt={'48px'} gap={'36px'}>
                    <Box {...css.box}>
                        <Heading {...css.names}>{t("Yo'nalishlar")}</Heading>
                        {
                            city?.map((item) => (
                                <Box 
                                    onClick={() => setTourId(item?.id)}
                                    className={`${item?.id === tourId ? 'active-link' :""}`}
                                    {...css.link} key={item?.id}>{item[`title_${i18n?.language}`]}</Box>
                            ))
                        }
                    </Box>
                    <Box w={{base:"100%", lg:"75%"}}>
                        <SimpleGrid
                            gap={"24px"}
                            columns={{ base: 1, sm: 2 }}>
                            {
                                tourId ? (
                                    <>
                                        {
                                            data?.map((item, index) => (
                                                <Box key={index} {...css.item}>
                                                    <Image
                                                        src={`${BASE_URL}/uploads/images/${item?.sub_tour_images?.[1]?.image_src}`}
                                                        {...css.image}
                                                    />
                                                    <Heading className='tour-name' {...css.subnames}>{item[`name_${i18n?.language}`]}</Heading>
                                                    <Flex align={'center'} justify={'space-between'}>
                                                        <Flex
                                                            {...css.flex}
                                                        >
                                                            <Image {...css.icon} src={LocationIcon} /> Dates:
                                                        </Flex>
                                                        <Text {...css.flex}>Avaible during the year</Text>
                                                    </Flex>
                                                    <Link
                                                        onClick={() => window.scrollTo(0, 0)}
                                                        to={`/tours/about/${item?.id}`}>
                                                        <Button {...css.button}>{t("Details")}</Button>
                                                    </Link>
                                                </Box>
                                            ))
                                        }
                                    </>
                                ) : (
                                    <>
                                        {
                                            subtour?.map((item, index) => (
                                                <Box key={index} {...css.item}>
                                                    <Image
                                                        src={`${BASE_URL}/uploads/images/${item?.sub_tour_images?.[1]?.image_src}`}
                                                        {...css.image}
                                                    />
                                                    <Heading className='tour-name' {...css.subnames}>{item[`name_${i18n?.language}`]}</Heading>
                                                    <Flex align={'center'} justify={'space-between'}>
                                                        <Flex
                                                            {...css.flex}
                                                        >
                                                            <Image {...css.icon} src={LocationIcon} /> Dates:
                                                        </Flex>
                                                        <Text {...css.flex}>Avaible during the year</Text>
                                                    </Flex>
                                                    <Link
                                                        onClick={() => window.scrollTo(0, 0)}
                                                        to={`/tours/about/${item?.id}`}>
                                                        <Button {...css.button}>{t("Details")}</Button>
                                                    </Link>
                                                </Box>
                                            ))
                                        }
                                    </>
                                )
                            }
                        </SimpleGrid>
                    </Box>
                </Flex>
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
        marginTop: "12px",
    },
    subname: {
        fontWeight: "400",
        fontSize: {
            base: "20px",
            lg: "22px"
        },
        lineHeight: {
            base: "24px",
            lg: "28px"
        },
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
    },
    button: {
        backgroundColor: "#604132",
        color: "#fff",
        height: "45px",
        width: "94%",
        margin: "10px 15px",
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
    box:{
        boxShadow:"0 1px 5px 0 #ededed",
        backgroundColor:"#fff",
        padding:"16px 24px",
        width:{
            base:"100%",
            lg:"25%"
        },
        borderRadius: "8px",
        height:"100%"
    },
    names:{
        color: "#2e1f0e",
        fontSize: {
            base: "25px"
        },
        lineHeight: {
            base: "40px",
        },
        fontWeight: "500",
    },
    link:{
        color: "#2e1f0e",
        fontSize: {
            base: "18px"
        },
        lineHeight: "30px",
        fontWeight: "500",
        margin:"4px 8px",
        cursor:"pointer",
        padding:"4px 8px"
    }
}