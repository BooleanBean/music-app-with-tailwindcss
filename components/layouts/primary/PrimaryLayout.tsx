import Head from 'next/head';

export interface IPrimaryLayout extends React.ComponentPropsWithoutRef<'div'> {
   justify?: 'items-center' | 'items-start';
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({
   children,
   justify = 'items-center',
   ...divProps
}) => {
   return (
      <>
         <Head>
            <title>Music App</title>
         </Head>
         <div {...divProps} className={`min-h-screen flex flex-col ${justify}`}>
            header
            <main className="px-5">{children}</main>
            <div className="m-auto" />
            footer
         </div>
      </>
   );
};

export default PrimaryLayout;
