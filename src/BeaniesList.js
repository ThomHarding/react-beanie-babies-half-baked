import React from 'react';
import BeanieBaby from './BeanieBaby.js';

export default function BeaniesList({ beanieBabies }) {
  return <div className='beanies-list'>
    { 
      beanieBabies.map(baby => <BeanieBaby key={baby.id} {...baby} />
      )
    }

  </div>;
}