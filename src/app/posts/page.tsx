import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import Post from '@/components/posts/Post';
import style from '@/styles/posts/post-page.module.css';

function PostPage() {
  return (
    <div className={style.post_page}>
      <Header></Header>
      <Post></Post>
      <Footer></Footer>
    </div>
  );
}

export default PostPage;
