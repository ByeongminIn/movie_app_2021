import PropTypes from 'prop-types'

const foodLike = [
  {
    id: 1,
    name: "Kimchi",
    image: 'images/kimchi',
    alt: '김치',
    rating: 5.0
  },
  {
    id: 2,
    name: "Samgyeopsal",
    image: "images/samgyeopsal",
    alt: '삼겹살',
    rating: 4.9
  },
  {
    id: 3,
    name: "bibimbap",
    image: 'images/bibimbap',
    alt: '비빔밥',
    rating: 4.5
  }
]

const renderFood = dish => <Food
  key={dish.id}
  name={dish.name}
  picture={dish.image}
  alt={dish.alt}
  rating={dish.rating}
/>

Food.PropTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}

function App() {
  console.log(fooLike.map(renderFood));
  return (
    <div >
        <h1>Hello React!!!</h1>
        {foodLike.map(renderFood)}
    </div>
  );
}

function Food({ name, picture, alt, rating}) {
  return(
    <div>
      <h2>I like {name}.</h2>
      <h4>{rating}/5.0</h4>
      <img alt={alt} src={picture} />
    </div>
  )
  }
export default App;
