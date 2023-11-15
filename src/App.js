import './App.css';

function App() {
  const appNames = ["TAC Hymns", 'Tap Spiral'];

  // Use the map function to render the list of app names
  const appListItems = appNames.map((appName, index) => (
    <li key={index}>{appName}</li>
  ));
  return (
    
    <div className="App">
        <div>
        <h1>Support Page</h1>
        <p>Welcome to our support page. If you need assistance, please contact us at:</p>
        <p>Email: development.btt@gmail.com</p>
        <h2>Apps</h2>
        <ul className="no-bullets-list">
          {appListItems}
        </ul>
      </div>
    </div>
  );
}

export default App;
