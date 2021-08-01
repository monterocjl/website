import { useColorMode } from "@chakra-ui/color-mode";
import { IconButton } from "@chakra-ui/react"
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

const DarkModeSwitch = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <IconButton
            size={'sm'}
            borderWidth={colorMode === 'dark' ? '1px' : 'none'}
            bg={colorMode === 'dark' ? 'none' : '#F6AD55'}
            borderColor= {'#F6AD55'}
            color={colorMode === 'dark' ? '#F6AD55' : 'white'}
            arial-label="Toggle Dark Switch"
            icon= {colorMode === 'dark' ? <SunIcon /> : <MoonIcon /> }
            onClick= {toggleColorMode}
            transition="all 0.3s cubic-bezier(.08,.52,.52,1)"
            _hover={{ filter: 'brightness(1.1)' }}
            
        />
      );
}

export default DarkModeSwitch
