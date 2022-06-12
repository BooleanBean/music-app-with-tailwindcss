import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
   return <section className="h-[2500px]">Home page</section>;
};

export default Home;

Home.getLayout = (page) => {
   return <PrimaryLayout>{page}</PrimaryLayout>;
};
