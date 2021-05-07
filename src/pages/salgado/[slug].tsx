import { GetServerSideProps } from "next"

// primic
import { getPrismicClient } from "../../services/prismic"
import Prismic from '@prismicio/client'
import { RichText } from 'prismic-dom'

interface PostProps {
    post: {
        slug: string,
        title: string,
        content: string,
        updated: string,
    }
}

export default function Post({ post }: PostProps) {
    return (
        <>
            <h1>  {post.title}
                {post.updated}
            </h1>

            <div dangerouslySetInnerHTML={{ __html: post.content }} />


        </>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ req, params }) => {

    const { slug } = params

    const prismic = getPrismicClient(req)

    const response = await prismic.getByUID('salgado', String(slug), {})


    const post = {
        slug,
        title: RichText.asText(response.data.title),
        content: RichText.asHtml(response.data.content),
        updateAt: new Date(response.last_publication_date).toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: 'long',
            year: 'numeric',
        })
    }

    return {
        props: { post }
    }
}