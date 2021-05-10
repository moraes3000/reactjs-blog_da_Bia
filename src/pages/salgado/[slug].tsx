import { GetServerSideProps } from "next"
import { FiCalendar, FiClock, FiUser } from 'react-icons/fi';
// primic
import { getPrismicClient } from "../../services/prismic"
import Prismic from '@prismicio/client'
import { RichText } from 'prismic-dom'
import { Box, Heading, Image } from "@chakra-ui/react"
// css
import styles from './post.module.scss';

interface PostProps {
    post: {
        slug: string,
        title: string,
        content: string,
        author: string,
        updateAt: string,
        thumbnail: string,
        banner: string,
    }
}

export default function Post({ post }: PostProps) {
    return (
        <>
            <Box maxW="1200px" m='auto' mt={[2, 6]} boxShadow="dark-lg" p={4}>
                <Image src={post.banner} objectFit="cover" fallbackSrc="https://via.placeholder.com/150" />
                <Heading my={4}>
                    {post.title}
                </Heading>
                <div className={styles.postTop}>
                    <ul>
                        <li><FiCalendar />{post.updateAt}</li>
                        <li><FiUser /> {post.author}</li>
                    </ul>
                </div>

                <Box dangerouslySetInnerHTML={{ __html: post.content }} mt={4} className={styles.conteudo}/>
            </Box>

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
        thumbnail: response.data.thumbnail.url,
        banner: response.data.banner.url,
        author: response.data.author,
        updateAt: new Date(response.last_publication_date).toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: 'long',
            year: 'numeric',
        })
    }
    console.log(post)
    return {
        props: { post }
    }
}