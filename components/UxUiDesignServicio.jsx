import { Button, Box, Icon, UnorderedList, ListItem } from "@chakra-ui/react";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { useColorMode } from "@chakra-ui/color-mode";
import { useDisclosure } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { BiDesktop } from "react-icons/bi";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from "@chakra-ui/react";

export default function UxUiDesignServicio() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (

<Box
          className="servicios_card"
          bg={colorMode === "dark" ? "#0d2231" : "#f7fafc"}
          borderWidth={colorMode === "dark" ? "0px" : "1px"}
          borderColor={colorMode === "dark" ? "none" : "#091721"}
          pb={'5'}
        >
          <div className="servicios_card_title">
            <h2>UX/UI Design</h2>
          </div>
          <div className="icons_shopify_woocommerce">
            <Box
              className="flex-icons_shopify_woocommerce"
              borderWidth={colorMode === "dark" ? "1px" : "0px"}
              color={colorMode === "dark" ? "orange.400" : "white"}
              bg={colorMode === "dark" ? "none" : "orange.400"}
              borderRadius="xl"
              borderColor={"orange.400"}
              mb={2}
              px={3}
              py={0.5}
              mr={3}
              fontSize={"13px"}
            >
              <Icon mr={2} className="ux-ui-icons" as={BiDesktop} />
              <h4>Usability</h4>
            </Box>

            <Box
              className="flex-icons_shopify_woocommerce"
              borderWidth={colorMode === "dark" ? "1px" : "0px"}
              color={colorMode === "dark" ? "teal.400" : "white"}
              bg={colorMode === "dark" ? "none" : "teal.400"}
              borderRadius="xl"
              borderColor={"teal.400"}
              mb={2}
              px={3}
              py={0.5}
              mr={3}
              fontSize={"13px"}
            >
              <Icon mr={2} className="ux-ui-icons" as={BsFillPersonLinesFill} />
              <h4>Experience</h4>
            </Box>
          </div>
          <h2 className="servicios_card_description">
            El diseño de interfaces no es solo estética. El buen diseño es
            funcional e intuitivo. Si ya cuentas con una página web pero quieres
            actualizar y mejorarla, puedo ayudarte con la reestructuración
            parcial o total. Da el siguiente paso de calidad y aumenta el valor
            de tu marca.
          </h2>
          
        </Box>
          );
        }
        