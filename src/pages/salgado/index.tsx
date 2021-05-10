import React from "react"
import Link from 'next/link'
import { GetStaticProps } from "next"
// chakra
import { Box, Heading } from "@chakra-ui/react"
import { Grid, GridItem, Image } from "@chakra-ui/react"

// primic
import { getPrismicClient } from "../../services/prismic"
import Prismic from '@prismicio/client'
import { RichText } from 'prismic-dom'

interface Post {
    slug?: string;
    first_publication_date: string | null;
    title: string;
    author?: string;
    excerpt: string;
    updatedAd: string
    thumbnail?: string | null;
    // banner?: string | null;
    // tag: string | null;

}
interface PostsProps {
    posts: Post[]
}

export default function Salgado({ posts }: PostsProps) {
    return (
        <>
            <Grid templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)"]} gap={6} maxW="1200px" m='auto' mt={8}>
                {posts.map(post => (
                    <Box key={post.slug} boxShadow="2xl" justify="center" align="center">
                        <Link href={`salgado/${post.slug}`}>
                            <a>
                                <Image src={post.thumbnail} objectFit="cover" fallbackSrc="https://via.placeholder.com/150" p={4} />
                                <Heading p={4}>{post.title}</Heading>
                            </a>
                        </Link>
                    </Box>
                ))}
            </Grid>


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

    const posts = response.results.map(post => {
        return {
            slug: post.uid,
            title: RichText.asText(post.data.title),
            excerpt: post.data.content.find(content => content.type == 'paragraph')?.text ?? '',//Pegar o conteudo do primeiro paragraph
            thumbnail: post.data.thumbnail.url,

            updatedAd: new Date(post.last_publication_date).toLocaleDateString('pt-br', {
                day: '2-digit',
                month: 'long',
                year: 'numeric'
            })
        }
    })

    return {
        props: { posts }
    }
}