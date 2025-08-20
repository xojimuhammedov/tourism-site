import {
    Button, useDisclosure, Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Box,
    Heading,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';

const FormModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { t } = useTranslation()
    const [nameValue, setNameValue] = useState("");
    const [numberValue, setNumberValue] = useState("");
    const [emailValue, setEmailValue] = useState("")
    const [textValue, setTextValue] = useState("")

    function changeNumber(item) {
        setNumberValue(item);
    }

    function changeName(item) {
        setNameValue(item);
    }
    function changeEmail(item) {
        setEmailValue(item);
    }
    function changeText(item) {
        setTextValue(item);
    }
    const handleClear = () => {
        setNameValue("");
        setNumberValue("");
        setEmailValue("")
        setTextValue("")
    };
    let bot = {
        TOKEN: "7748066043:AAEhE1PoIIeYblx1m2WJRSoor3lUph6Y9oU",
        chatID: "-1002677051843",
        message: `
              Assalomu alaykum, sizga yangi xabar!
              Ism 👤: ${nameValue}; 
              Telefon nomeri ☎: ${numberValue};
              Elektron pochta: ${emailValue};
              Xabari: ${textValue}
              `,
    };

    const encodedMessage = encodeURIComponent(bot.message);

    function sendMessage(e) {
        e.preventDefault();
        if (!nameValue || !numberValue) {
            toast.error(t("Пожалуйста, заполните все поля!"));
            return;
        }

        fetch(
            `https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.chatID}&text=${encodedMessage} `,
            {
                method: "GET",
            }
        ).then(
            () => {
                handleClear();
                toast.success(t("Xabaringiz muvaffaqiyatli yuborildi!"))
                onClose()
            },
            (error) => {
                console.log(error);
            }
        );
    }

    return (
        <>
        <Box>
            <Heading>{t("Band qilish")}</Heading>
            <Box>
                <input type='name'
                    value={nameValue}
                    onChange={(e) => changeName(e.target.value)}
                    placeholder={t("FirstName")} className='form-input' />
                <input type='number'
                    value={numberValue}
                    onChange={(e) => changeNumber(e.target.value)}
                    placeholder={t("Phone Number")} className='form-input' />
                <input type='email'
                    value={emailValue}
                    onChange={(e) => changeEmail(e.target.value)}
                    placeholder={t("Email")} className='form-input' />
                <textarea
                    value={textValue}
                    onChange={(e) => changeText(e.target.value)}
                    placeholder={t("Message")} className='form-input' />
            </Box>
                <Button
                    onClick={sendMessage}
                    {...css.button} type='submit'>{t("Submit")}</Button>
        </Box>
        </>
    );
}

export default FormModal;

const css = {
    button: {
        backgroundColor: "#604132",
        color: "#fff",
        height: "45px",
        width: "180px",
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
    }
}