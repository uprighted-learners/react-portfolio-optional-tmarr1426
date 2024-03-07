import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>Link One</li>
          <li>Link Two</li>
          <li>Link Three</li>
        </ul>
      </nav>
      <h1>Personal Portfolio</h1>
      <p>Say something about yourself here!</p>
      <figure>
        <picture>
          <souce srcset="https://www.fillmurray.com/g/300/400" />
          <img src="https://www.fillmurray.com/g/300/400" />"
        </picture>
        <figcaption>
          Source: <a href="https://www.fillmurray.com/">www.fillmurray.com/</a>
        </figcaption>
      </figure>
    </div>
  );
}

export default App;
