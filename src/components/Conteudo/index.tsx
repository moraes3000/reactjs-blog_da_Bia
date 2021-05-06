import { Flex, Spacer, Center, Text, Square, Box, Container, SimpleGrid, Heading } from "@chakra-ui/react"
export default function Conteudo() {
    return (
        <>

            <SimpleGrid
                bg="gray.50"
                maxW='1200px'
                margin='auto'
                columns={{ sm: 2, md: 3 }}
                spacing="8"
                p="10"               
                rounded="lg"
                color="gray.400"
                boxShadow="sm"
            >

                <Box boxShadow="2xl" p="4" rounded="md" bg="white">
                    <img src="https://t1.uc.ltmcdn.com/pt/images/5/8/0/img_como_fazer_pao_de_mel_8085_600.jpg" />
                    <Heading pt="4">Pão de Mel</Heading>
                </Box>

                <Box boxShadow="2xl" p="4" rounded="md" bg="white">
                    <img src="https://t1.uc.ltmcdn.com/pt/images/5/8/0/img_como_fazer_pao_de_mel_8085_600.jpg" />
                    <Heading pt="4">Pão de Mel</Heading>
                </Box>

                <Box boxShadow="2xl" p="4" rounded="md" bg="white">
                    <img src="https://t1.uc.ltmcdn.com/pt/images/5/8/0/img_como_fazer_pao_de_mel_8085_600.jpg" />
                    <Heading pt="4">Pão de Mel</Heading>
                </Box>

                <Box boxShadow="2xl" p="4" rounded="md" bg="white">
                    <img src="https://t1.uc.ltmcdn.com/pt/images/5/8/0/img_como_fazer_pao_de_mel_8085_600.jpg" />
                    <Heading pt="4">Pão de Mel</Heading>
                </Box>

                <Box boxShadow="2xl" p="4" rounded="md" bg="white">
                    <img src="https://t1.uc.ltmcdn.com/pt/images/5/8/0/img_como_fazer_pao_de_mel_8085_600.jpg" />
                    <Heading pt="4">Pão de Mel</Heading>
                </Box>

                    <Box boxShadow="2xl" p="4" rounded="md" bg="white">
                    <img src="https://t1.uc.ltmcdn.com/pt/images/5/8/0/img_como_fazer_pao_de_mel_8085_600.jpg" />
                    <Heading pt="4">Pão de Mel</Heading>
                </Box>


            </SimpleGrid>

        </>


    )
}