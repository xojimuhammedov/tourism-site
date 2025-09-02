import { Box, Flex, Link } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import Instagram from '../assets/Instagram';
import Telegram from '../assets/Telegram';
import SearchModal from './SearchModal';

const Nav = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            
            // Show nav when scrolling up, hide when scrolling down
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
            
            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    return (
        <Box 
            {...css.nav} 
            transform={isVisible ? 'translateY(0)' : 'translateY(-100%)'}
            opacity={isVisible ? 1 : 0}
        >
            <Box className='container'>
                <Flex justifyContent={'flex-end'} gap={'12px'} align={'center'}>
                    <Link display={{base:"none", lg:"block"}} {...css.link} target='_blank' href='+998947113377'>+998 94 711 33 77</Link>
                    <Link {...css.link} target='_blank' href='+998942113377'>+998 94 211 33 77</Link>
                    <Link {...css.link} target='_blank' href={"mailto:info@csrtravel.uz"}>info@csrtravel.uz</Link>
                    <Flex align={'center'} gap={"12px"}>
                        <Link target="_blank" href="https://www.instagram.com/century_silk_road_travel/">
                            <Instagram />
                        </Link>
                        <Link target="_blank" href="https://t.me/+998977472806">
                            <Telegram />
                        </Link>
                        <SearchModal />
                    </Flex>
                </Flex>
            </Box>
        </Box>
    );
}

export default Nav;

const css = {
    nav:{
        padding:"8px 0",
        background: "#f0cc89",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1001,
        transition: "all 0.3s ease",
        width:"100%"
    },
    link:{
        color:"#2e1f0e",
        fontWeight:"500",
        fontSize:{
            base:"14px",
            lg:"16px"
        },
        lineHeight:"24px"
    }
}