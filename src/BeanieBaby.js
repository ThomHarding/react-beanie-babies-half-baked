import { Link } from 'react-router-dom';

export default function BeanieBaby({ id, title, image }) {
  return (
    // this should contain a react-router-dom Link to the detail page for this particular beanie baby.
    <Link to={`/beanies/${id}`}>
      <div className='baby-object'>
        <h3>{title}</h3>
        <img src={image} />
      </div>
    </Link>
    // it should also render the beanie baby's image and show the beanie baby's name
  );
}
