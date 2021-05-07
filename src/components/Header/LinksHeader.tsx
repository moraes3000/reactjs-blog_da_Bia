import { Button, IconButton } from "@chakra-ui/react"
import Link from 'next/link'
export default function LinksHeader() {

    return (
        <>
            <Link href="/" >
                <a>
                    <Button colorScheme="white" pr={4} variant="link">
                        Home
                    </Button>
                </a>
            </Link>

            <Link href="/salgado" >
                <a>
                    <Button colorScheme="white" pr={4} variant="link">
                        Salgado
                </Button>
                </a>
            </Link>

            <Link href="/doce" >
                <a>
                    <Button colorScheme="white" pr={4} variant="link">
                        Doce
                </Button>
                </a>
            </Link>
        </>
    )
}