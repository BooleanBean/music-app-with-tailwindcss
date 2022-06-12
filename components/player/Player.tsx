import ReactPlayer, { ReactPlayerProps } from 'react-player/lazy';

export interface IPlayer extends ReactPlayerProps {}

const Player: React.FC<IPlayer> = (props) => {
   return (
      <ReactPlayer
         controls
         width="100%"
         height="100%"
         wrapper={PlayerWrapper}
         {...props}
      />
   );
};

export interface IPlayerWrapper {
   children: React.ReactNode;
}
export const PlayerWrapper: React.FC<IPlayerWrapper> = (props) => {
   return <div className="flex items-center !w-2/3" {...props} />;
};

export default Player;
