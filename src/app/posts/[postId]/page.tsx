import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import Post from '@/components/posts/Post';
import style from '@/styles/posts/post-page.module.css';

interface Props {
  params: {
    postId: string;
  };
}

function PostPage({ params }: Props) {
  return (
    <div className={style.post_page}>
      <Header></Header>
      <Post></Post>
      <Footer></Footer>
    </div>
  );
}

export default PostPage;
