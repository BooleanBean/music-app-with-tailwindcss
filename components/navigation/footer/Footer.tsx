import dynamic from 'next/dynamic';

export interface IFooter {}

const DynamicPlayer = dynamic(() => import('../../player/Player'), {
   ssr: false,
   loading: () => <>loading</>,
});

const Footer: React.FC<IFooter> = () => {
   return (
      <div className="w-full h-20 border-t-2 px-6 flex justify-center items-center">
         <DynamicPlayer url="https://cdn.pixabay.com/audio/2022/06/03/audio_c3d218496a.mp3" />
      </div>
   );
};

export default Footer;
