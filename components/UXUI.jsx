import { Button, Box, Icon, UnorderedList, ListItem, Code } from "@chakra-ui/react";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { useColorMode } from "@chakra-ui/color-mode";
import { useDisclosure } from "@chakra-ui/react";
import { BiDesktop } from "react-icons/bi";

export default function UXUI() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (

        <Box
          className="servicios_card"
          bg={colorMode === "dark" ? "#0d2231" : "#f7fafc"}
          borderWidth={colorMode === "dark" ? "0px" : "1px"}
          pb={'5'}
        >
          <div className="servicios_card_title">
            <h2>UX/UI Design</h2>
          </div>
          <Box className="icons_shopify_woocommerce">
              <Code fontSize={'13px'} mr={3} display={'flex'} fontWeight={'600'} bg={colorMode === "dark" ? "#4e77f9" : "#c9d1ec"} p={'.2em .4em'} borderRadius={'5px'}>
                <Icon mr={2} className="ux-ui-icons" as={BiDesktop} />
                Usability
              </Code>

              <Code fontSize={'13px'} mr={3} display={'flex'} fontWeight={'600'} bg={colorMode === "dark" ? "#4e77f9" : "#c9d1ec"} p={'.2em .4em'} borderRadius={'5px'}>
                <Icon mr={2} className="ux-ui-icons" as={BsFillPersonLinesFill} />
                Experience
              </Code>      
          </Box>

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
        