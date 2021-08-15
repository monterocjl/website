import { Button, Box, Icon, UnorderedList, ListItem, Code } from "@chakra-ui/react";
import { FaMobile } from "react-icons/fa";
import { useColorMode } from "@chakra-ui/color-mode";
import { useDisclosure } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from "@chakra-ui/react";
import Link from "next/link";

export default function PaginaWebServicio() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (

<Box
          className="servicios_card"
          bg={colorMode === "dark" ? "#0d2231" : "#f7fafc"}
          borderWidth={colorMode === "dark" ? "0px" : "1px"}
        >
          <div className="servicios_card_title">
            <h2>Página Web</h2>
          </div>
          <Box className="icons_shopify_woocommerce">

            <Code fontSize={'13px'} mr={3} display={'flex'} fontWeight={'600'} bg={colorMode === "dark" ? "#4e77f9" : "#c9d1ec"} p={'.2em .4em'} borderRadius={'5px'}>
               <Icon fontSize={'17px'} mr={2} className="mobilefirst-icons" as={FaMobile} />
                Mobile first
            </Code>
          </Box>
          
          <h2 className="servicios_card_description">
            Hoy en día, todo negocio debería tener su propia página web. Sea
            B2B, B2C, marca personal o empresarial, tus clientes querrán saber
            con quién están tratando. Tener una página web ayudará a que tus
            potenciales clientes contraten tus servicios.
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
              borderColor={"#4e77f9"}
              borderRadius={'20px'}
              
            >
              <ModalHeader fontSize={"2xl"}>Página Web</ModalHeader>
              <ModalCloseButton fontSize={"md"} color={"#4e77f9"} />
              <ModalBody>
              En tu página web podrás mostrar los servicios que ofreces, información de tu empresa, proyectos que ya haz realizado.
              <br></br>
              Además, una página web te permitirá posicionar tu marca en los motores de búsqueda (Google) para que aparezcas entre las primeras opciones cuando las personas busquen temas relacionados a los servicios que ofreces.
              <br></br>
              Por otro lado, podrás crear artículos en tu propio blog y aplicar estrategias de inbound marketing.
              <br></br>
                <br></br>
                Puntos importantes del servicio:
                <UnorderedList mt={"2"}>
                  <ListItem>
                    Tu sitio web tendrá un diseño moderno, que trasmita confianza y, sobre todo, la identidad de tu marca.
                  </ListItem>
                  <ListItem mt={"1"}>
                    La velocidad de carga será muy rápida y tus potenciales clientes tendrán una grata experiencia al visitar tu web.
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
        