import { useEffect, useState } from 'react';
import { ClassRocket, FunctionalRocket } from './Rocket';
import '../styles/_launchpad.scss';

export default function LaunchPad() {
  // const [render, triggerRerender] = useState(Date.now());
  // const [firstTime, setFirstTime] = useState(true);

  
  useEffect(() => {
    // if (firstTime) {
    //   setInterval(() => { triggerRerender(Date.now()); }, 500);
    //   setFirstTime(false)
    // } 
  }, [])
  
  return (
    <div className="launchpad">
      <FunctionalRocket />
    </div>
  );
}
