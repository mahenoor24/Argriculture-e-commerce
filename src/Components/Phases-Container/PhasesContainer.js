import React from 'react';
import PHASES_DATA from './phasesData';
import PhaseComponent from './PhaseComponent';

const PhasesContainer = () => (
  <>
    {PHASES_DATA.map(({ title, description, image, imagePosition }) => (
      <PhaseComponent
        key={title}
        title={title}
        description={description}
        image={image}
        imagePosition={imagePosition}
      />
    ))}
  </>
);

export default PhasesContainer;
