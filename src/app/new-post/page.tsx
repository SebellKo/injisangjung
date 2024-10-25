import NewPost from '@/components/new-post/NewPost';
import style from '@/styles/new-post/new-post-page.module.css';

function NewPostPage() {
  return (
    <div className={style.new_post_page}>
      <NewPost></NewPost>
    </div>
  );
}

export default NewPostPage;
