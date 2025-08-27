import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { BASE_URL } from "../service";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from "swiper/modules";

function Tours() {
  const { t, i18n } = useTranslation()

  const [tour, setTour] = useState([])
  const [countryData, setCountryData] = useState([])
  const [flagId, setFlagId] = useState(null)
  const [data, setData] = useState([])

  useEffect(() => {
      axios.get(`${BASE_URL}/countries`)
      .then((res) => setCountryData(res?.data?.data))
      .catch((err) => console.log(err))
  },[])

  useEffect(() => {
    axios
      .get(`${BASE_URL}/subtours?limit=1000`)
      .then((res) => {
        setTour(res?.data?.data)
        setData(res?.data?.data?.filter((item) => item?.country_id === flagId))
      })
      .catch((err) => console.log(err));
  }, []);


  return (
    <Box p={{base: "24px 16px", md: "36px 0"}}>
      <Box className="container">
        <Heading {...css.name}>{t("The perfect tour")}</Heading>
        <Heading {...css.title}>{t("Qaynoq Turlar")}</Heading>
        <Flex flexDirection={{base:"column", lg:"row"}} mt={{base: '32px', md: '48px'}} gap={{base: '24px', md: '36px'}}>
          <Box {...css.box}>
              <Heading {...css.names}>{t("Yo'nalishlar")}</Heading>
              {
                  countryData?.map((item) => (
                    <Flex 
                      onClick={() => setFlagId(item?.id)}
                      className={`${item?.id === flagId ? 'country-link' :""}`}
                      {...css.flex} gap={"6px"} align={'center'}>
                        <Image
                            src={`${BASE_URL}/uploads/images/${item?.image_src}`}
                            {...css.icon}
                        />{item[`title_${i18n?.language}`]}
                  </Flex>
                  ))
              }
            </Box>
            <Box width={{base: "100%", lg: "75%"}}>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={16}
                    navigation={true}
                    breakpoints={{
                      640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                      },
                      768: {
                        slidesPerView: 2,
                        spaceBetween: 24,
                      },
                      1024: {
                        slidesPerView: 3,
                        spaceBetween: 24,
                      },
                      1280: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                      }
                    }}
                    pagination={{
                      clickable: true,
                    }}
                    className="mySwiper"
                    modules={[Navigation]}
              >
                    {
                      flagId ? (
                        <>
                            {
                              data?.map((item) => (
                                <SwiperSlide key={item?.id}>
                                    <Box 
                                        backgroundImage={`${BASE_URL}/uploads/images/${item?.sub_tour_images?.[1]?.image_src}`}
                                        {...css.item}>
                                        <Heading className="tour-name" {...css.subname}>{item[`name_${i18n?.language}`]}</Heading>
                                        <Link
                                          className="tour-about-link"
                                          onClick={() => window.scrollTo(0, 0)}
                                          to={`/tours/about/${item?.id}`}>
                                          {t("Details")}
                                        </Link> 
                                    </Box>
                                </SwiperSlide>
                              ))
                            }
                        </>
                      ) : (
                        <>
                            {
                              tour?.map((item) => (
                                <SwiperSlide key={item?.id}>
                                    <Box 
                                        backgroundImage={`${BASE_URL}/uploads/images/${item?.sub_tour_images?.[1]?.image_src}`}
                                        {...css.item}>
                                        <Heading className="tour-name" {...css.subname}>{item[`name_${i18n?.language}`]}</Heading>
                                        <Link
                                          className="tour-about-link"
                                          onClick={() => window.scrollTo(0, 0)}
                                          to={`/tours/about/${item?.id}`}>
                                          {t("Details")}
                                        </Link> 
                                    </Box>
                                </SwiperSlide>
                              ))
                            }
                        </>
                      )
                    }
                </Swiper>
            </Box>
        </Flex>
      </Box>
    </Box>
  );
}

export default Tours;

const css = {
  name: {
    color: "#f0cc89",
    fontSize: {base: "18px", md: "22px"},
    lineHeight: {base: "24px", md: "28px"},
    fontWeight: "500",
    textAlign: "center",
  },
  title: {
    color: "#2e1f0e",
    fontSize: {
      base: "30px",
      sm: "55px",
  },
  lineHeight: {
      base: "40px",
      sm: "60px",
  },
    fontWeight: "600",
    textAlign: "center",
    marginTop: "12px",
  },
  item: {
    borderRadius: "12px",
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    height: {base: "300px", md: "400px", lg: "450px"},
    position:"relative"
  },
  subname: {
    fontSize: {base: "18px", md: "20px", lg: "24px"},
    lineHeight: {base: "22px", md: "24px", lg: "28px"},
    fontWeight: "600",
    color: "#fff",
    padding: "0 15px",
    margin: "10px 0",
    position:"absolute",
    top:"68%"
  },
  icon:{
    width:"40px",
    height:"25px"
  },
  flex:{
      fontSize: {base: "16px", md: "18px"},
      lineHeight: {base: "20px", md: "22px"},
      fontWeight: "500",
      color: "#2e1f0e",
      margin:"4px 0px",
      cursor:"pointer",
      padding:"12px",
      width:"100%",
  },
  names:{
    color: "#2e1f0e",
    fontSize: {
        base: "20px",
        md: "25px"
    },
    lineHeight: {
        base: "28px",
        md: "40px",
    },
    fontWeight: "500",
  },
  box:{
    boxShadow:"0 1px 5px 0 #ededed",
    backgroundColor:"#fff",
    padding:"16px 24px",
    width:{
        base:"100%",
        lg:"25%"
    },
    borderRadius: "12px",
    height:"100%",
    paddingRight:"0"
},
};
