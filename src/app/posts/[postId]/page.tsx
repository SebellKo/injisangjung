import Content from '@/components/posts/content/Content';
import PostList from '@/components/posts/post-list/PostList';
import style from '@/styles/posts/post-page.module.css';

interface Props {
  params: {
    postId: string;
  };
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
