import {
    Box,
    Button,
    Heading,
    Image,
    SimpleGrid,
    Text,
  } from "@chakra-ui/react";
  import React, { useEffect, useState } from "react";
  
  import { Link } from "react-router-dom";
  import axios from "axios";
  
  function Tours() {
    const [destination, setDestination] = useState([]);
  
    useEffect(() => {
      axios
        .get("https://test.al-muamalat.uz/api/destination")
        .then((res) => setDestination(res.data))
        .catch((err) => console.log(err));
    }, []);
  
    return (
      <Box id="destination" p={"36px 0"}>
        <Box className="container">
          <Heading {...css.name}>The perfect tour</Heading>
          <Heading {...css.title}>Tours to Uzbekistan & Central Asia</Heading>
          <SimpleGrid
            mt={"48px"}
            gap={"24px"}
            columns={{ base: 1, sm: 2, lg: 3 }}>
            {destination?.data?.map((item, index) => (
              <Box key={index} {...css.item}>
                <Image
                  src={`${'https://test.al-muamalat.uz/files'}/${item?.images?.[0]?.url?.replace(
                    "uploads/",
                    ""
                  )}`}
                  {...css.image}
                />
                <Heading {...css.subname}>{item?.title}</Heading>
                <Text
                  {...css.text}
                  dangerouslySetInnerHTML={{
                    __html: item?.description?.slice(0, 95),
                  }}
                />
  
                <Link
                  onClick={() => window.scrollTo(0, 0)}
                  to={`/destination/${item?.id}`}>
                  <Button {...css.button}>Details</Button>
                </Link>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </Box>
    );
  }
  
  export default Tours;
  
  const css = {
    name: {
      color: "#604132",
      fontSize: "18px",
      lineHeight: "25px",
      fontWeight: "500",
      textAlign: "center",
      textTransform: "capitalize",
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
      textTransform: "capitalize",
      marginTop: "12px",
    },
    item: {
      borderRadius: "8px",
      boxShadow: "rgba(0, 0, 0, 0.08) 0px 1px 16px 0px",
      background: "#fff",
      width: "100%",
      paddingBottom: "24px",
    },
    subname: {
      fontSize: "20px",
      lineHeight: "28px",
      fontWeight: "600",
      color: "#2e1f0e",
      padding: "0 15px",
      margin: "10px 0",
      marginTop: "18px",
    },
    text: {
      fontSize: "16px",
      lineHeight: "24px",
      color: "#988c7b",
      padding: "0 15px",
    },
    image: {
      borderRadius: "8px 8px 0 0",
      objectFit: "cover",
      width: "100%",
      height: "260px",
    },
    button: {
      backgroundColor: "#2e1f0e",
      color: "#fff",
      height: "45px",
      width: "94%",
      margin: "10px 15px",
      fontSize: "16px",
      lineHeight: "24px",
      fontWeight: "500",
      marginTop: "20px",
      transition: "0.3s",
      borderRadius:"24px",
  
      _hover: {
        backgroundColor: "#2e1f0e",
      },
    },
  };