import BeanieBaby from './BeanieBaby.js';

export default function BeaniesList({ beanieBabies }) {
  return (
    <div className='beanies'>
      {
        beanieBabies.map(baby => <BeanieBaby key={baby.id} {...baby} />)
      }
    </div>);
}
