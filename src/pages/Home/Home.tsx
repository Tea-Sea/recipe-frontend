import React, {useState} from 'react';
import { Recipe } from '../../types/recipe';
import './Home.module.css';

function Home() {
  const apiUrl = process.env.REACT_APP_GO_API_URL;

  // store fetched text here
  const [recipe, setRecipe] = useState<Recipe| null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchRandomRecipe = async () => {
    console.log('button click');

    try {
      const res = await fetch(`${apiUrl}/recipes/random`);
      if (!res.ok) {
        throw new Error(`API error: ${res.status}`);
      }

      const data = await res.json();
      setRecipe(data); // customize based on response shape
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="App">
      <header className="Home-Header">
        <button className='Option-Button' onClick={fetchRandomRecipe}>
          Give me a random recipe
        </button>
        {error && <p style={{ color: 'red' }}>Error: {error}</p>}
         {recipe && (
        <div>
          <p><strong>ID:</strong> {recipe.id}</p>
          <p><strong>Name:</strong> {recipe.name}</p>
          <p><strong>Difficulty:</strong> {recipe.difficulty}</p>
          <p><strong>Method:</strong> {recipe.method}</p>
          <p><strong>Ingredients:</strong></p>
          {/* <ul>
            {recipe.ingredients.map((ingredient, i) => (
              <li key={i}>{ingredient}</li>
            ))}
          </ul> */}
        </div>
      )}
      </header>
    </div>
  );
}

export default Home;
