import Stars from './Stars';
import './App.css'

const App = () => {
  return (
    <div className="container">
      <div className="card">
        <div className="card-image">
          <img src="path/to/your/image.jpg" alt="Movie Poster" />
        </div>
        <div className="card-content">
          <h2 className="card-title">Супермен</h2>
          <div className="card-rating">
            <Stars count={2} />
          </div>
          <div className="card-buttons">
            <button>Купить 899р</button>
            <button>Подробнее -></button>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-image">
          <img src="path/to/your/image.jpg" alt="Movie Poster" />
        </div>
        <div className="card-content">
          <h2 className="card-title">Одинокий волк</h2>
          <div className="card-rating">
            <Stars count={3} />
          </div>
          <div className="card-buttons">
            <button>Купить 1299р</button>
            <button>Подробнее -></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
