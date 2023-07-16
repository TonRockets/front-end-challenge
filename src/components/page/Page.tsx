import pageStyles from 'components/page/Page.module.scss';
import Header from 'components/header';
import Footer from 'components/footer';

interface PageProps {
   children: React.ReactNode | React.ReactNode[];
}

const Page = ({ children }: PageProps) => {
   return (
      <div className={pageStyles.page}>
         <Header />
            {children}
         <Footer />
      </div>
   );
};

export default Page;
