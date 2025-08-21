import React, { useState, useEffect } from "react";
import {
  IconButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Input,
  List,
  ListItem,
  Spinner,
  useDisclosure,
  Flex,
  Box,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { BASE_URL } from "../service";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function SearchModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const {t, i18n} = useTranslation()

  // Debounce bilan API chaqirish
  useEffect(() => {
    if (!query) {
      setResults([]);
      return;
    }

    const timeout = setTimeout(() => {
      searchApi(query);
    }, 500);

    return () => clearTimeout(timeout);
  }, [query]);

  const searchApi = async (value) => {
    try {
      setLoading(true);
      const res = await fetch(`${BASE_URL}/subtours?keyword=${value}`);
      const data = await res.json();
      setResults(data?.data || []);
    } catch (err) {
      console.error("Search error:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleCloseModal = () => {
    onClose()
    setQuery("")
  }


  return (
    <>
      {/* Search Icon Button */}
      {/* <IconButton
        aria-label="Search"
        icon={<SearchIcon />}
        onClick={onOpen}
        variant="outline"
        border={'none'}
      /> */}
      <Box cursor={'pointer'} onClick={onOpen}>
        <SearchIcon />
      </Box>

      {/* Modal */}
      <Modal isOpen={isOpen} onClose={handleCloseModal} size="md">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{t("Search tour")}</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            {/* Input */}
            <Input
              placeholder={t("Type to search...")}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              mb={3}
            />

            {/* Results */}
            {loading ? (
              <Flex align={'center'} justify={'center'}>
                <Spinner />
              </Flex>
            ) : results?.length > 0 ? (
              <List spacing={2}>
                {results?.map((item, i) => (
                  <ListItem
                    key={i}
                    p={2}
                    borderWidth="1px"
                    borderRadius="md"
                    _hover={{ bg: "gray.100", cursor: "pointer" }}
                  >
                    <Link 
                        onClick={handleCloseModal}
                        to={`/tours/about/${item?.id}`}>
                        {item[`name_${i18n?.language}`]}
                    </Link>
                  </ListItem>
                ))}
              </List>
            ) : (
              query && <p>No results found</p>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
