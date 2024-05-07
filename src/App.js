import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>This is h1</h1>
      </header>
      <main>
        <p>My first para</p>
        <button className="btn1">first button</button>
        <button className="btn2">second button</button>
        <button className="btn3">third button</button>

        <table className="tableclass">
          <tr>
            <th>Name</th>
            <th>Phone Number</th>
          </tr>
          <tr>
            <td>Abigail</td>
            <td>123456895</td>
          </tr>
          <tr>
            <td>John</td>
            <td>456234238</td>
          </tr>
          <tr>
            <td>Nick</td>
            <td>6867867867</td>
          </tr>
        </table>

        <ul className="listul">
          <li>teacher 1: pargol</li>
          <li>teacher 2: marcos</li>
          <li>teacher 3: eduardo</li>
          <li>teacher 4: silvia</li>
          <li>teacher 5: rich</li>
        </ul>

        <p>branch1</p>

      </main>
      
    </div>
  );
}

export default App;
