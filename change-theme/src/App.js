import { useState } from 'react'
import './App.css';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') ?? 'light')

  function handleClick() {
    const newTheme = theme === 'light' ? "dark" : "light"
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
  }



  return (
    <div className='container' style={{ background: theme === 'light' ? 'white' : 'black', color: theme === 'light' ? 'black' : 'white' }}>
      <h1>Título</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore eligendi saepe itaque cupiditate neque deserunt enim provident rem,
        culpa qui maxime rerum. Mollitia, nobis? Quae impedit doloribus amet mollitia eum.
      </p>
      <div>
        <button onClick={handleClick}>Change Theme</button>
      </div>

    </div>
  );
}

export default App;
