import { Box } from "@chakra-ui/react"
import { GetStaticProps } from "next"
// primic
import { getPrismicClient } from "../../services/prismic"
import Prismic from '@prismicio/client'
import { RichText } from 'prismic-dom'
import React from "react"
import Link from 'next/link'
interface Post {
    slug?: string;
    first_publication_date: string | null;
    title: string;
    author?: string;
    excerpt: string;
    updatedAd: string
    // thumbnail?: string | null;
    // banner?: string | null;
    // tag: string | null;

}
interface PostsProps {
    posts: Post[]
}

export default function Salgado({ posts }: PostsProps) {
    return (
        <>
            {posts.map(post => (
                <a href={`salgado/${post.slug}`}>
                <Box w="1200px" p={4} m='auto' key={post.slug}>
                    <h2>{post.title}</h2>
                    <ul>
                        <li>{post.updatedAd}</li>
                        <li>{post.author}</li>
                    </ul>
                    <div>
                        {post.excerpt}
                    </div>
                </Box>
                </a>
            ))}

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

    // console.log(JSON.stringify(response, null, 2))

    const posts = response.results.map(post => {
        return {
            slug: post.uid,
            title: RichText.asText(post.data.title),
            excerpt: post.data.content.find(content => content.type == 'paragraph')?.text ?? '',//Pegar o conteudo do primeiro paragraph
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