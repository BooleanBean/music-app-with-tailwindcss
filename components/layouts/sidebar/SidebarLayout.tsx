import Link from 'next/link';
import { useRouter } from 'next/router';

export interface ISidebarLayout extends React.ComponentPropsWithoutRef<'div'> {}

const SidebarLayout: React.FC<ISidebarLayout> = ({ ...divProps }) => {
   const router = useRouter();

   return (
      <div
         className={`min-h-full w-72 border-r-2 py-10 relative flex flex-col space-y-4`}
         {...divProps}
      >
         <h3 className="text-xl font-bold mx-6">Music Application</h3>
         <div className="flex flex-col mx-6 space-y-[1px]">
            {[
               {
                  url: '/',
                  text: 'Home',
               },
               {
                  url: '/playlists',
                  text: 'Playlists',
               },
               {
                  url: '/collection',
                  text: 'Collection',
               },
               {
                  url: '/search',
                  text: 'Search',
               },
            ].map((l, i) => (
               <Link key={i} href={l.url}>
                  <a
                     className={
                        (router.pathname === l.url
                           ? 'bg-gray-900 text-white'
                           : 'hover:bg-gray-700 hover:text-gray-100') +
                        ' rounded-full py-2 px-6 transition ease-in-out'
                     }
                  >
                     {l.text}
                  </a>
               </Link>
            ))}
         </div>
         <footer className="absolute bottom-0 left-0 rounded-t-xl bg-black text-white p-8 w-full h-24 md:h-36">
            Advertise
         </footer>
      </div>
   );
};

export default SidebarLayout;
