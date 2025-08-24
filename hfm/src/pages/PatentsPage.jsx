import HeroPatents from '../components/HeroPatents';
import Patents from '../components/Patents';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PatentsPage = () => {
  return (
    <>
        <Header/>
        <HeroPatents />
        <Patents />
        <Footer/>
    </>
  );
};

export default PatentsPage;