import Head from 'next/head';
import Footer from '../../navigation/footer/Footer';
import Header from '../../navigation/header/Header';
import SidebarLayout from '../sidebar/SidebarLayout';

export interface IPrimaryLayout extends React.ComponentPropsWithoutRef<'div'> {}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({ children, ...divProps }) => {
   return (
      <>
         <Head>
            <title>Music App</title>
         </Head>

         <div
            className={`min-h-screen w-full flex flex-col items-start justify-between`}
            {...divProps}
         >
            <div className="flex flex-1 w-full h-screen">
               <SidebarLayout />
               <div className="flex flex-col flex-1 w-full h-[calc(100vh-5rem)] overflow-y-scroll">
                  <Header />
                  <main className="flex-1 !h-16">{children}</main>
               </div>
            </div>
            <Footer />
         </div>
      </>
   );
};

export default PrimaryLayout;
