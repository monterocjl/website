import { Button, Box, Icon, UnorderedList, ListItem, Code } from "@chakra-ui/react";
import { SiWoo, SiShopify } from "react-icons/si";
import { useColorMode } from "@chakra-ui/color-mode";
import { useDisclosure } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from "@chakra-ui/react";
import Link from "next/link";

export default function EcommerceServicio() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (

<Box
          className="servicios_card"
          bg={colorMode === "dark" ? "#0d2231" : "#f7fafc"}
          borderWidth={colorMode === "dark" ? "0px" : "1px"}
          
        >
          <div className="servicios_card_title">
            <h2>E-Commerce</h2>
          </div>
          <Box className="icons_shopify_woocommerce">
            
              <Code fontSize={'13px'} mr={3} display={'flex'} fontWeight={'600'} bg={colorMode === "dark" ? "#4e77f9" : "#c9d1ec"} p={'.2em .4em'} borderRadius={'5px'}>
              <Icon mr={2} className="woocommerce-icons" as={SiWoo} />
              Woocommerce
              </Code>

              <Code fontSize={'13px'} display={'flex'} fontWeight={'600'} bg={colorMode === "dark" ? "#4e77f9" : "#c9d1ec"} p={'.2em .4em'} borderRadius={'5px'}>
              <Icon mr={2} className="shopify-icons" as={SiShopify} />
              Shopify
              </Code>
  
      
          </Box>
          <h2 className="servicios_card_description">
            Los beneficios de tener tu propio E-commerce son muchos: Podrás
            automatizar el proceso de venta, vender 24/7, realizar
            cross-selling, conocer mejor a tus clientes, mejorar la imagen de tu
            marca y más.
          </h2>
          <Box textAlign={"end"} mt={3}>
            <Button
              variant="link"
              color={colorMode === "dark" ? "white" : "#12171e"}
              onClick={onOpen}
              mt={4}
              px={5}
              py={1}
              rightIcon={<ArrowForwardIcon />}
            >
              Más detalles
            </Button>
          </Box>

          <Modal
            isOpen={isOpen}
            onClose={onClose}
            size={"md"}
            isCentered
            preserveScrollBarGap
          >
            <ModalOverlay />
            <ModalContent
              bg={colorMode === "dark" ? "#0d2231" : "#f7fafc"}
              borderWidth={colorMode === "dark" ? "4px" : "4px"}
              borderColor={colorMode === "dark" ? "#4e77f9" : "#c9d1ecv"}
              borderRadius={'20px'}
            >
              <ModalHeader fontSize={"2xl"}>E-commerce</ModalHeader>
              <ModalCloseButton fontSize={"md"} color={"#4e77f9"} />
              <ModalBody>
                Para el desarrollo de E-commerce, trabajo con Shopify o
                Woocommerce. Con mis servicios recibirás una tienda totalmente
                operativa y configurada con todo lo necesario para que puedas
                administrarla de manera sencilla. En ambos casos tendrás un
                panel desde el que podrás cargar nuevos productos, dar
                seguimiento a tus ventas, y toda la gestión de tu e-commerce.
                <br></br>
                <br></br>
                Puntos importantes del servicio:
                <UnorderedList mt={"2"}>
                  <ListItem>
                    Un E-commerce con un diseño de interfaz atractivo y enfocado
                    en la usabilidad del cliente.
                  </ListItem>
                  <ListItem mt={"1"}>
                    Te brindaré una pequeña capacitación sobre el correcto uso
                    del Panel de Administración para que gestiones tu tienda de
                    la mejor manera.
                  </ListItem>
                </UnorderedList>
              </ModalBody>

              <ModalFooter justifyContent={"center"}>
              <Link href="/contacto">
              <a>
                <Button
                  variant={"outline"}
                  borderColor={"#4e77f9"}
                  color={"#4e77f9"}
                  size={"md"}
                  fontWeight={"bold"}
                >
                  ¡Me interesa!
                </Button>
              </a>
              </Link>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Box>
          );
        }
        