import React from 'react';
import "./HomePage.css";
import { CurrentDate, HomeRoutineAction, RecentlyAddedRoutine } from '../../components';

const HomePage = () => {
  return (
    <div className='home-page-wrapper'>
      <CurrentDate />
      <HomeRoutineAction />
      <RecentlyAddedRoutine />
    </div>
  )
}

export default HomePage;