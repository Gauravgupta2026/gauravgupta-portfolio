import React from 'react';
import Header from '../../components/Header/Header';
import {Divider} from "@heroui/divider";
import Preview from '../../components/footer/scroll_Footer';
import MediaBetweenTextScrollDemo from '../../components/Projects/newProjectCard';
import NewNotes from '../../components/Notes/newNotes';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Divider/>
      <MediaBetweenTextScrollDemo/>
      <NewNotes/>
      <Preview/>

      

      
    </>
  );
};

export default Home;
