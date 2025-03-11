import React from 'react';

import TechStack from '../../components/TechStack/TechStack';

import Notes from '../../components/Notes/Notes';
import Preview from '../../components/footer/scroll_Footer';
import MediaBetweenTextScrollDemo from '../../components/Projects/newProjectCard';
import HeroSection from '../../components/Header/HeroSection';

const Home: React.FC = () => {
  return (
    <>
      <HeroSection />
      {/* <Divider/> */}
      {/* <Ambition />  */}
      {/* <Divider/>  */}
      <TechStack /> 
      {/* <Divider/> */}
    <MediaBetweenTextScrollDemo/>
      {/* <Project/> */}
      {/* <Collaborations/> */}
      {/* <Divider/> */}
      <Notes/>
      {/* <Divider/> */}
      <Preview/>

      

      
    </>
  );
};

export default Home;
