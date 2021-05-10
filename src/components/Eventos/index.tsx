import { Box, Grid, Image, Link, Heading } from "@chakra-ui/react";

export default function ListaDeEventos() {
    return (
        <>
            <Box boxShadow="2xl" justify="center" align="center">
                <Link href='#'>
                    <a>
                        <Image src="gibbresh.png" objectFit="cover" fallbackSrc="https://via.placeholder.com/450" p={4} />
                        <Heading px={4} pb={4}>Nome do Bar</Heading>
                    </a>
                </Link>
            </Box>



        </>
    )
}