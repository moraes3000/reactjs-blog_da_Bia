import { Box } from "@chakra-ui/react"
import { GetStaticProps } from "next"
import { getPrismicClient } from "../../services/prismic"
import Prismic from '@prismicio/client'

interface Post {
    uid?: string;
    first_publication_date: string | null;
    title: string;
    author: string;
    content: string;
    thumbnail: string | null;
    banner: string | null;
    tag: string | null;

}

export default function Salgado() {
    return (
        <>
            <Box w="1200px" p={4} m='auto'>
                <h2>Titulo</h2>
                <ul>
                    <li>autor</li>
                    <li>data de publicaçao</li>
                </ul>
                <div>
                    Conteudo
                </div>

            </Box>
        </>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const prismic = getPrismicClient()

    const response = await prismic.query([
        Prismic.predicates.at('document.type', 'salgado')
    ], {
        fetch: ['salgado.title', 'salgado.content', 'salgado.thumbnail'],
        pageSize: 2,
    })

    console.log(JSON.stringify(response, null, 2))

    return {
        props: {}
    }
}