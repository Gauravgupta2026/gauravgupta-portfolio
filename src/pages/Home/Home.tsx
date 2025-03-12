import React from 'react';
import Header from '../../components/Header/Header';


import { Divider } from '@nextui-org/react';
import Preview from '../../components/footer/scroll_Footer';
import MediaBetweenTextScrollDemo from '../../components/Projects/newProjectCard';
import Notes from '../../components/Notes/Notes';
import NewNotes from '../../components/Notes/newNotes';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      {/* <Divider/> */}
      {/* <Ambition />  */}
      {/* <Divider/>  */}
      {/* <TechStack />  */}
      <Divider/>
    <MediaBetweenTextScrollDemo/>
      {/* <Project/> */}
      {/* <Collaborations/> */}
      {/* <Notes/> */}
      <NewNotes/>
      <Preview/>

      

      
    </>
  );
};

export default Home;
