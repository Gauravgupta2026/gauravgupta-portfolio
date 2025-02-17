import React from 'react';
import Header from '../../components/Header/Header';
import TechStack from '../../components/TechStack/TechStack';
import Ambition from '../../components/Ambition/ambition';
import Collaborations from '../../components/Collaborations/Collaborations';
import Notes from '../../components/Notes/Notes';

import { Divider } from '@nextui-org/react';
import Preview from '../../components/footer/scroll_Footer';
import MediaBetweenTextScrollDemo from '../../components/Projects/newProjectCard';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      {/* <Divider/> */}
      <Ambition /> 
      {/* <Divider/>  */}
      <TechStack /> 
      <Divider/>
    <MediaBetweenTextScrollDemo/>
      {/* <Project/> */}
      {/* <Collaborations/> */}
      <Divider/>
      <Notes/>
      <Divider/>
      <Preview/>

      

      
    </>
  );
};

export default Home;
