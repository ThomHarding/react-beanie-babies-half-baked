import { Link } from 'react-router-dom';

export default function BeanieBaby({ beanieBaby }) {
  return (
    // this should contain a react-router-dom Link to the detail page for this particular beanie baby.
    <Link to={`/beanies/${beanieBaby.id}`}>
      <div className='baby-object'>
        <h3>{beanieBaby.title}</h3>
        <img src={beanieBaby.image} />
      </div>
    </Link>
    // it should also render the beanie baby's image and show the beanie baby's name
  );
}
