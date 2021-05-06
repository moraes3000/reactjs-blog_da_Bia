
import { useColorMode, Flex, IconButton, Spacer, Heading } from "@chakra-ui/react"
import { useState } from 'react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import LinksHeader from "./LinksHeader"

export default function Header() {
    const { colorMode, toggleColorMode } = useColorMode()
    const isDark = colorMode === 'dark'
    const [display, changeDisplay] = useState('none')
    
    return (
        <Flex bgColor='gray.700' height='80px' color='white'>
            <Flex align='center'>
                <Heading ml={2}>Blog da Bia</Heading>
                </Flex>
            <Spacer />
            <Flex align='center' zIndex={15}>
                <Flex
                    display={['none', 'none', 'flex', 'flex']}>
                    <LinksHeader />
                </Flex>
                <IconButton
                    aria-label='open Menu'
                    size='lg'
                    mr={2}
                    colorScheme="gray.700"
                    icon={<HamburgerIcon />}
                    display={['flex', 'flex', 'none', 'none']}
                    onClick={() => changeDisplay('flex')}
                />
                {/* <Switch
                    // color='green'
                    isCheck={isDark}
                    onChange={toggleColorMode}
                /> */}
            </Flex>
            <Flex w='100vw' bgColor='gray.700' zIndex={20} h='100vh' pos='fixed' top='0' left='0' overflow='auto' flexDir='column' display={display}>
                <Flex justify='flex-end'>
                    <IconButton
                        aria-label='fechar Menu'
                        size='lg'
                        colorScheme="gray.700"
                        mr={2}
                        icon={<CloseIcon />}
                        display={['flex', 'flex', 'none', 'none']}
                        onClick={() => changeDisplay('none')}
                    />
                </Flex>
                <Flex flexDirection='column' align='center'>
                    <LinksHeader />
                </Flex>
            </Flex>
        </Flex>
    )
}