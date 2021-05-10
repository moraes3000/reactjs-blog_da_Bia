import React from "react"
import Link from 'next/link'
import { GetStaticProps } from "next"
// chakra
import { Box, Flex, Heading, Grid, GridItem, Image, Text } from "@chakra-ui/react"
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

export default function Doce({ posts }: PostsProps) {
    return (
        <>
            <Grid templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]} p={[4,0]} gap={6} maxW="1200px" m='auto' mt={[2,8]}>
                {posts.map(post => (
                    <Flex flexkey={post.slug} boxShadow="2xl" >
                        <Image src={post.thumbnail} objectFit="cover" fallbackSrc="https://via.placeholder.com/150" p={4} />
                        <Link href={`doce/${post.slug}`}>
                            <a>

                                <Heading p={2} >{post.title}</Heading>
                                <Text p={2}> {post.excerpt}</Text>
                            </a>
                        </Link>
                    </Flex>
                ))}
            </Grid>


        </>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const prismic = getPrismicClient()

    const response = await prismic.query([
        Prismic.predicates.at('document.type', 'doce')
    ], {
        fetch: ['doce.title', 'doce.conteudo', 'doce.thumbnail'],
        pageSize: 2,
    })

    console.log(JSON.stringify(response, null, 2))

    const posts = response.results.map(post => {
        return {
            slug: post.uid,
            title: post.data.title,
            excerpt: post.data.conteudo.find(content => content.type == 'paragraph')?.text ?? '',//Pegar o conteudo do primeiro paragraph
            // thumbnail: post.data.thumbnail.url,

            // updatedAd: new Date(post.last_publication_date).toLocaleDateString('pt-br', {
            //     day: '2-digit',
            //     month: 'long',
            //     year: 'numeric'
            // })
        }
    })

    return {
        props: { posts }
    }
}