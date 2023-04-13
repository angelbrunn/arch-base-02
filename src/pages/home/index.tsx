import {NextPage} from 'next';
import dynamic from 'next/dynamic';

const DynamicHomeContainer = dynamic(() =>
  import('../../containers/HomeContainer/HomeContainer').then(
    mod => mod.HomeContainer,
  ),
);

const HomePage: NextPage = () => {
  return <DynamicHomeContainer />;
};

export default HomePage;
