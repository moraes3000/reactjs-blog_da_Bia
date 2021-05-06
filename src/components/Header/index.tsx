import { Flex, Spacer, Center, Text, Square, Box, Container } from "@chakra-ui/react"
export default function Header() {
    return (
        <>
            <Box w='100%' bg="gray.500">
                <Flex maxW='1200px' margin='auto' bg="gray.700" h="100px" as='header' mx='auto' align='center' color='white' >
                    <Box p={8}>LOGO</Box>
                    <Spacer />
                    <Box p={8}>Doces</Box>
                    <Box p={8}>Salgados</Box>
                    <Box p={8}>Contato</Box>
                </Flex>
            </Box>
        </>


    )
}