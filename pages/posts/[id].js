import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Sep from '../../components/sep'

export default function Post({ postData }) {
  console.log(postData)
  return <Layout>
    <Head>
        <title>{postData.title}</title>
    </Head>
    {postData.title}
    <Sep/>
    {postData.id}
    <Sep/>
    <Date dateString={postData.date} />
    <Sep/>
    <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    {/* {postData.contentHtml} */}
  </Layout>
}

export async function getStaticPaths({params}) {
  const paths = getAllPostIds()
  console.log(paths)
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}