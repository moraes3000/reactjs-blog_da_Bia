import { Button, IconButton, Link } from "@chakra-ui/react"

export default function LinksHeader() {

    return (
        <>
            <Link href="/" >
                <Button colorScheme="white" pr={4} variant="link">
                    Home
                </Button>             
            </Link>

            <Link href="/salgado" >
                <Button colorScheme="white" pr={4} variant="link">
                    Salgado
                </Button>             
            </Link>

            <Link href="/doce" >
                <Button colorScheme="white" pr={4} variant="link">
                    Doce
                </Button>             
            </Link>
        </>
    )
}