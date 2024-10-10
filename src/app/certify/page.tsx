import Certify from '@/components/certify/Certify';
import Header from '@/components/common/Header';
import style from '@/styles/certify/certify-page.module.css';

function CertifyPage() {
  return (
    <div className={style.certify_page}>
      <Header></Header>
      <Certify />
    </div>
  );
}

export default CertifyPage;
