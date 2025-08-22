import { Box, Button, Flex, Link, Menu, Text, useDisclosure, MenuList, MenuItem, MenuButton as MenuButtonTwo, Image } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

import { Link as Alink, useNavigate } from "react-router-dom";
import MenuButton from "../assets/MenuButton";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { BASE_URL } from "../service";

function NavbarMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  const { t, i18n } = useTranslation()
  const [countryData, setCountryData] = useState([])

  useEffect(() => {
      axios.get(`${BASE_URL}/countries`)
      .then((res) => setCountryData(res?.data?.data))
      .catch((err) => console.log(err))
  },[])
  const navigate = useNavigate()
  return (
    <>
      <Button {...css.button} onClick={onOpen}>
        <MenuButton />
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent {...css.menuList}>
          <ModalCloseButton />
          <ModalBody>
            <Flex
              pt={"48px"}
              flexDirection={"column"}
              alignItems={"center"}
              gap={"36px"}>
              <Alink onClick={onClose} to="/">
                <Text {...css.link}>{t("Home")}</Text>
              </Alink>
              <Menu isLazy>
                                <MenuButtonTwo {...css.link}>{t("Tours")}</MenuButtonTwo>
                                <MenuList>
                                    {
                                        countryData?.map((item) => (
                                            <MenuItem gap={'8px'} onClick={() => { navigate(`/tours/${item?.id}`); onClose() }} fontSize={'14px'} color={'rgba(0, 0, 0, 1)'} fontWeight={'600'}>
                                                <Image
                                                src={`${BASE_URL}/uploads/images/${item?.image_src}`}
                                                {...css.icon}
                                            />
                                                {item[`title_${i18n?.language}`]}</MenuItem>
                                        ))
                                    }
                                </MenuList>
                            </Menu>
              <Alink onClick={onClose} to="/destination">
                <Text {...css.link}>{t("Destinations")}</Text>
              </Alink>
              <Alink onClick={onClose} to="/hotels">
                <Text {...css.link}>{t("Hotels")}</Text>
              </Alink>
              <Alink onClick={onClose} to='/transport'>
                    <Text {...css.link}>{t("Transport")}</Text>
                </Alink>
                <Alink onClick={onClose} to='/gallery'>
                    <Text {...css.link}>{t("Gallery")}</Text>
                </Alink>
              <Alink onClick={onClose} to="/contact">
                <Text {...css.link}>{t("Contact")}</Text>
              </Alink>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default NavbarMenu;

const css = {
  link: {
    fontSize: "18px",
    lineHeight: "22px",
    fontWeight: "500",
    color: "rgba(0, 0, 0, 1)",
  },
  menuList: {
    borderRadius: "0",
    margin: "0",
    height: "100%",
  },
  button: {
    backgroundColor: "transparent",
    width: "55px",
    display: {
      base: "block",
      md: "none",
    },
  },
  icon:{
    width:"40px",
    height:"25px"
},
};