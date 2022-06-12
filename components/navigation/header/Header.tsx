import Link from 'next/link';
import AuthButton from '../../buttons/auth/AuthButton';

export interface IHeader {}

const Header: React.FC<IHeader> = (props) => {
   return (
      <div
         className="flex justify-between w-full px-4 py-2 border-b-2 sticky top-0"
         {...props}
      >
         <div className="space-x-4 flex items-center">
            <Link href="/">Home</Link>
            <Link href="/playlist">Playlist</Link>
         </div>

         <AuthButton />
      </div>
   );
};

export default Header;
