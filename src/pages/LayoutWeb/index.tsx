
import { Flex, Image, Box, Heading, Divider, Button, Stack, Accordion, useAccordionItem, AccordionButton, AccordionIcon, AccordionPanel, AccordionItem, Grid } from "@chakra-ui/react"
import React from "react"

import { EmailIcon, } from "@chakra-ui/icons"
import { SiGooglemaps, SiIfood } from "react-icons/si";
import { MdHistory } from "react-icons/md";
import { FaFacebook, FaInstagram, FaPhotoVideo, FaWhatsapp, } from "react-icons/fa";
import { BsCalendar } from "react-icons/bs";
import { RiGlobalLine } from "react-icons/ri";


import styles from './web.module.scss';
import ListaDeEventos from "../../components/Eventos";

export default function Guia() {
    return (
        <Box maxW="1200px" m='auto' boxShadow="dark-lg" p={4}>
            <Flex direction={['column', 'column', 'row']}>
                <Image src="gibbresh.png" fallbackSrc="https://via.placeholder.com/450" alt="Logo " mr={[0, 0, 4]} />
                <Box p={4} bg='gray.600' w='100%'>
                    <Heading>Nome do estabelicimento</Heading>
                    <Divider mb={4} />
                    <Stack direction="column" spacing={4}>
                        <Button leftIcon={<MdHistory />} colorScheme="teal" variant="solid" w='100%'>
                            História
                        </Button>
                        <Button leftIcon={<SiGooglemaps />} colorScheme="teal" variant="solid" colorw='100%'>
                            Local
                        </Button>

                        <Button leftIcon={<BsCalendar />} colorScheme="teal" variant="solid" w='100%'>
                            Próximos eventos
                        </Button>
                        <Button leftIcon={<FaPhotoVideo />} colorScheme="teal" variant="solid" w='100%'>
                            Galeria de Fotos
                        </Button>

                    </Stack>
                </Box>
            </Flex>

            <Box className={styles.conteudo}>
                <Heading>Local</Heading>
                <ul>
                    <li><b>Endereço: </b>Avenida Logo Ali - nº 12345 </li>
                    <li><b>Bairro: </b>Aqui perto </li>
                    <li><b>CEP: </b>00000-000 </li>
                    <li><b>Cidade: </b>Nome da cidade </li>
                    <li>
                        <Accordion defaultIndex={[0]} allowToggle>
                            <AccordionItem>

                                <AccordionButton>
                                    <Box >
                                        Horário de funcionamento
                                </Box>
                                    <AccordionIcon />
                                </AccordionButton>

                                <AccordionPanel pb={4}>
                                    <ul>
                                        <li><b>Segunda-feira</b> -----</li>
                                        <li><b>Terça-feira</b> -----</li>
                                        <li><b>Quarta-feira</b> 18:00 as 04:00</li>
                                        <li><b>Quinta-feira</b> 18:00 as 04:00</li>
                                        <li><b>Sexta-feira</b> 18:00 as 04:00</li>
                                        <li><b>Sabado</b> 18:00 as 04:00</li>
                                        <li><b>Domingo</b> 18:00 as 04:00</li>
                                    </ul>
                                </AccordionPanel>
                            </AccordionItem>
                        </Accordion>
                    </li>
                </ul>
                <Heading>Contato</Heading>
                <ul className={styles.iconeslink}>
                    <li>
                        <a href="#" target='black'>
                            <b><FaFacebook />Facebook</b>
                        </a>
                    </li>
                    <li>
                        <a href="#" target='black'>
                            <b><FaInstagram />Instagran</b>
                        </a>
                    </li>

                    <li>
                        <a href="#" target='black'>
                            <b><FaWhatsapp />Whatsapp</b>
                        </a>
                    </li>


                    <li>
                        <a href="#" target='black'>
                            <b><SiIfood />Ifood</b>
                        </a>
                    </li>
                    <li>
                        <a href="#" target='black'>
                            <b><EmailIcon />Email</b>email@enderecodoemail.com.br
                        </a>
                    </li>
                    <li>
                        <a href="#" target='black'>
                            <b><RiGlobalLine />www.sitedoestabelicimetno.com.br</b>
                        </a>
                    </li>
                </ul>
            </Box>
            <Box>
                <Heading>Proximos eventos</Heading>
                <Grid templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)", "repeat(4, 1fr)"]} gap={6}>
                    <ListaDeEventos />
                    <ListaDeEventos />
                    <ListaDeEventos />
                    <ListaDeEventos />
                    <ListaDeEventos />
                    <ListaDeEventos />
                </Grid>
            </Box>



        </Box>
    )
}