export interface ISidebarLayout extends React.ComponentPropsWithoutRef<'div'> {}

const SidebarLayout: React.FC<ISidebarLayout> = ({ ...divProps }) => {
   return (
      <div className={`min-h-full w-72 border-r-2`} {...divProps}>
         Sidebar
      </div>
   );
};

export default SidebarLayout;
