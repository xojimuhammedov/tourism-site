import { Box, Heading, Image, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import { useTranslation } from 'react-i18next';

import GalleryOne from '../assets/gallery-1.jpg'
import GalleryTwo from '../assets/gallery-2.jpg'
import GalleryThree from '../assets/gallery-3.jpg'
import GalleryFour from '../assets/gallery-4.jpg'
import GalleryFive from '../assets/gallery-5.jpg'
import GallerySix from '../assets/gallery-6.jpg'
import GallerySeven from '../assets/gallery-7.jpg'
import GalleryEight from '../assets/gallery-8.jpg'
import GalleryNine from '../assets/gallery-9.jpg'
import GalleryTen from '../assets/gallery-10.jpg'

const GalleryPage = () => {
    const { t } = useTranslation()
    return (
        <Box p={'48px 0'}>
            <Box className='container'>
                <Heading {...css.name}>{t("The Perfect Gallery")}</Heading>
                <Heading {...css.title}>{t("Gallery in Uzbekistan & Central Asia")}</Heading>
                <SimpleGrid gap={'18px'} columns={{base:1, lg:2}}>
                    <Image {...css.image} src={GalleryOne} alt='GalleryOne' />
                    <Image {...css.image} src={GalleryTwo} alt='GalleryOne' />
                    <Image {...css.image} src={GalleryThree} alt='GalleryOne' />
                    <Image {...css.image} src={GalleryFour} alt='GalleryOne' />
                    <Image {...css.image} src={GalleryFive} alt='GalleryOne' />
                    <Image {...css.image} src={GallerySix} alt='GalleryOne' />
                    <Image {...css.image} src={GallerySeven} alt='GalleryOne' />
                    <Image {...css.image} src={GalleryEight} alt='GalleryOne' />
                    <Image {...css.image} src={GalleryNine} alt='GalleryOne' />
                    <Image {...css.image} src={GalleryTen} alt='GalleryOne' />
                </SimpleGrid>
            </Box>
        </Box>
    );
}

export default GalleryPage;

const css = {
    name: {
        color: "#604132",
        fontSize: "18px",
        lineHeight: "25px",
        fontWeight: "500",
        textAlign: "center",
    },
    title: {
        color: "#f0cc89",
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
        marginBottom: "36px"
    },
    image: {
        height: {
            base: "250px",
            lg: "350px"
        },
        objectFit: "cover",
        width: "100%",
        borderRadius: "8px"
    }
}