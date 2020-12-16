import './styles/app.scss';

function App() {
  return (
    <div className="App">
      <nav className="top-nav">
        <div id="logo">
          CLASS-AID
        </div>
        <div className="nav-profile">
          NAME 
          <img src="https://via.placeholder.com/30" alt="avatar"/>
        </div>
      </nav>
      <div className="container">
        <nav className="side-nave">
          <ul>
            <li>HOME</li>
            <li>GIFT</li>
          </ul>
        </nav>
        <div className="content">
          IM CONTENT
        </div>
      </div>
    </div>
  );
}

export default App;
