import React from 'react';
import Header from '../../components/Header/Header';
import TechStack from '../../components/TechStack/TechStack';
import Ambition from '../../components/Ambition/ambition';
import Collaborations from '../../components/Collaborations/Collaborations';
import Notes from '../../components/Notes/Notes';
import { TextHoverEffectDemo } from '../../components/footer/footer';
import Project from '../../components/Projects/newCards';
import { Divider } from '@nextui-org/react';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Ambition />  
      <TechStack /> 
    

    <Divider/>
      <Project/>
      <Collaborations/>
      <Notes/>
      <TextHoverEffectDemo />

      

      
    </>
  );
};

export default Home;
