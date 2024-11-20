import Content from '@/components/posts/content/Content';
import PostList from '@/components/posts/post-list/PostList';
import { META } from '@/constant/meta';
import style from '@/styles/posts/post-page.module.css';
import getPostMetaData from '@/utils/getPostMetaData';

interface Props {
  params: {
    postId: string;
  };
}

export async function generateMetadata({ params }: Props) {
  const { postId } = params;

  const postData = await getPostMetaData(postId);

  const { title, desc, previewUrl } = postData || {};

  const TITLE = `injisangjung | ${title}`;
  const DESC = desc;
  const PAGE_URL = `${META.url}/posts/${postId}`;
  const OG_IMAGE = previewUrl;

  const metadata = {
    ...META,
    metadataBase: new URL(META.url),
    alternates: {
      canonical: PAGE_URL,
    },
    title: TITLE,
    description: DESC,
    openGraph: {
      title: TITLE,
      description: DESC,
      siteName: TITLE,
      locale: 'ko_KR',
      type: 'website',
      url: PAGE_URL,
      images: {
        url: OG_IMAGE,
      },
    },
  };

  return metadata;
}

function PostPage({ params }: Props) {
  const { postId } = params;

  return (
    <div className={style.post_page}>
      <PostList></PostList>
      <Content postId={postId}></Content>
    </div>
  );
}

export default PostPage;
