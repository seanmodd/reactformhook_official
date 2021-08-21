import PageContainer from 'components/PageContainer';
import LoginForm from '../container/LoginForm';
import Header from '../container/Header';
import Auth from '../container/Auth';
// import Home from '../container/Home';

export default function Home() {
  return (
    <PageContainer title="Next.js Chakra Starter">
      <Header />
      <Auth />
    </PageContainer>
  );
}
