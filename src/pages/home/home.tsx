import presentation from '../../jsons/presentation.json';
import './css/index.css';

function Home() {
  return(
          <div className="home">
         <h1>{presentation.title}</h1>
          <div>
            <h2>{presentation.title}</h2>
            <div>
              <p>
                {presentation.text}
              </p>
            </div>
          </div>
          </div>
          );
}

export default Home;