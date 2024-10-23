import Content from '@/components/posts/content/Content';
import PostList from '@/components/posts/post-list/PostList';
import style from '@/styles/posts/post-page.module.css';

function PostPage() {
  return (
    <div className={style.post_page}>
      <PostList></PostList>
      <Content></Content>
    </div>
  );
}

export default PostPage;
