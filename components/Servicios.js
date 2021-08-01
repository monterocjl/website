import { Button, Box, IconButton, Icon } from "@chakra-ui/react"
import { SiWoo, SiShopify } from "react-icons/si";
import { FaMobile } from "react-icons/fa";
import { BiDesktop } from "react-icons/bi";
import { BsFillPersonLinesFill } from "react-icons/bs";

import { useColorMode } from "@chakra-ui/color-mode";

export default function CollapseEx() {
    const { colorMode, toggleColorMode } = useColorMode();
  
    return (
      <>
      <h2 className='servicios_titulo'>Servicios</h2>
      <div className='servicios'>
          <Box className='servicios_card'
               
               bg={colorMode === 'dark' ? '#0d2231' : '#f7fafc'}
               borderWidth={colorMode === 'dark' ? '0px' : '1px'}
               borderColor={colorMode === 'dark' ? 'none' : '#091721'}
          >
            <div className='servicios_card_title'>
                <h2>E-Commerce</h2>
            </div>
            <div className='icons_shopify_woocommerce'>

                <Box className='flex-icons_shopify_woocommerce'
                      
                     borderWidth={colorMode === 'dark' ? '1px' : '0px'}
                     color={colorMode === 'dark' ? '#935788' : 'white'}
                     bg={colorMode === 'dark' ? 'none' : '#935788'}
                     borderColor={'#935788'}
                     borderRadius="xl"
                     mb={2} 
                     px={4}
                     mr={3}
                >
                    <Icon   mr={2} className='woocommerce-icons' as={SiWoo} />
                    <h2>Woocommerce</h2> 
                </Box>

                <Box className='flex-icons_shopify_woocommerce'
                     borderWidth={colorMode === 'dark' ? '1px' : '0px'}
                     color={colorMode === 'dark' ? '#7db527' : 'white'}
                     bg={colorMode === 'dark' ? 'none' : '#7db527'}
                     borderRadius="xl" 
                     borderColor= {'#7db527'}
                     mb={2} 
                     py={1} 
                     px={4}
                >
                    <Icon  mr={2} className='shopify-icons' as={SiShopify} />
                    <p>Shopify</p>
                </Box>
            </div>
            <h1 className='servicios_card_description'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas soluta repudiandae exercitationem assumenda velit. Odio numquam beatae mollitia enim porro distinctio facilis, accusamus iste ex veritatis nesciunt et ab architecto.</h1>
            
          </Box>

          <Box className='servicios_card'
               
               bg={colorMode === 'dark' ? '#0d2231' : '#f7fafc'}
               borderWidth={colorMode === 'dark' ? '0px' : '1px'}
               borderColor={colorMode === 'dark' ? 'none' : '#091721'}
          >
            <div className='servicios_card_title'>
                <h2>Página Web</h2>
            </div>
            <div className='icons_shopify_woocommerce'>
                <Box className='flex-icons_shopify_woocommerce'
                     borderWidth={colorMode === 'dark' ? '1px' : '0px'}
                     color={colorMode === 'dark' ? 'purple.500' : 'white'}
                     bg={colorMode === 'dark' ? 'none' : 'purple.500'}
                     borderColor= {'purple.500'}
                     borderRadius="xl"
                     mb={2} 
                     px={3}
                     py={1}
                     mr={3}
                >
                    <Icon mr={2} className='mobilefirst-icons' as={FaMobile} />
                    <h2>Mobile first</h2> 
                </Box>

            </div>
            <h1 className='servicios_card_description'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas soluta repudiandae exercitationem assumenda velit. Odio numquam beatae mollitia enim porro distinctio facilis, accusamus iste ex veritatis nesciunt et ab architecto.</h1>
            
          </Box>

          <Box className='servicios_card'
               
               bg={colorMode === 'dark' ? '#0d2231' : '#f7fafc'}
               borderWidth={colorMode === 'dark' ? '0px' : '1px'}
               borderColor={colorMode === 'dark' ? 'none' : '#091721'}
          >
            <div className='servicios_card_title'>
                <h2>UX/UI Design</h2>
            </div>
            <div className='icons_shopify_woocommerce'>
                <Box className='flex-icons_shopify_woocommerce'
                     borderWidth={colorMode === 'dark' ? '1px' : '0px'}
                     color={colorMode === 'dark' ? 'orange.400' : 'white'}
                     bg={colorMode === 'dark' ? 'none' : 'orange.400'}
                     borderRadius="xl" 
                     borderColor= {'orange.400'} 
                     mb={2} 
                     px={3}
                     py={0.5}
                     mr={3}
                >
                    <Icon mr={2} className='ux-ui-icons' as={BiDesktop} />
                    <h2>Usability</h2> 
                </Box>

                <Box className='flex-icons_shopify_woocommerce'
                     borderWidth={colorMode === 'dark' ? '1px' : '0px'}
                     color={colorMode === 'dark' ? 'teal.400' : 'white'}
                     bg={colorMode === 'dark' ? 'none' : 'teal.400'}
                     borderRadius="xl" 
                     borderColor= {'teal.400'} 
                     mb={2} 
                     px={3}
                     py={0.5}
                     mr={3}
                >
                    <Icon mr={2} className='ux-ui-icons' as={BsFillPersonLinesFill} />
                    <h2>Experience</h2> 
                </Box>

            </div>
            <h1 className='servicios_card_description'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas soluta repudiandae exercitationem assumenda velit. Odio numquam beatae mollitia enim porro distinctio facilis, accusamus iste ex veritatis nesciunt et ab architecto.</h1>
            
          </Box>

      </div>
      </>
    )
  }