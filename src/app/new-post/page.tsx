import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import NewPost from '@/components/new-post/NewPost';
import style from '@/styles/new-post/new-post-page.module.css';

function NewPostPage() {
  return (
    <div className={style.new_post_page}>
      <Header></Header>
      <NewPost></NewPost>
    </div>
  );
}

export default NewPostPage;
