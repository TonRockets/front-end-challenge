import pageStyles from 'components/page/Page.module.scss';
import {Header, Footer} from 'components'

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
