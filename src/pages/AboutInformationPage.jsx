import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { BASE_URL } from '../service';
import { Link, useParams } from 'react-router-dom';
import { aboutData } from '../data';

const AboutInformationPage = () => {
    const { t, i18n } = useTranslation()
    const {id} = useParams()
    const about = aboutData?.find((item) => item?.id === Number(id))
    return (
        <Box p={'24px 0'}>
            <Box className='container'>
                <Box w={'60%'}>
                    <Image src={about?.image} {...css.image} />
                    <Heading {...css.name}>{about[`title_${i18n?.language}`]}</Heading>
                    <Text {...css.text} 
                        dangerouslySetInnerHTML={{
                        __html: about[`text_${i18n?.language}`]
                        }}
                    />
                </Box>
            </Box>
    </Box>
    );
}

export default AboutInformationPage;


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