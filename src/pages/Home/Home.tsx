import React from 'react';
import Header from '../../components/Header/Header';
import TechStack from '../../components/TechStack/TechStack';
import Ambition from '../../components/Ambition/ambition';
import Collaborations from '../../components/Collaborations/Collaborations';
import Notes from '../../components/Notes/Notes';
import { CanvasRevealEffectDemo } from '../../components/Projects/newCards';
import { TextHoverEffectDemo } from '../../components/footer/footer';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Ambition />
      <TechStack />
      
      <CanvasRevealEffectDemo />
      {/* <LayoutGridDemo /> */}
      {/* <Collaborations /> */}
      <Notes/>
      <TextHoverEffectDemo />

      

      
    </>
  );
};

export default Home;
