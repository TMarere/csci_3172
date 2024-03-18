import logo from './logo.svg';
import './App.css';

function App() {
  return (
    // code used from W3 schools link: https://www.w3schools.com/bootstrap/bootstrap_get_started.asp
    <div className="App">
  <div style={{color:"black"}} class="jumbotron text-center">
  <h1
  >Lab 6 submission</h1>

</div>


<div class="container">
  <div class="row">

    <div class="col-sm-4">

      <h3>Column 1</h3>
      <p>I hope you enjoy it </p>
    </div>
    <div class="col-sm-4">
      <h3>Column 2</h3>
      <p>it was an interesting Lab</p>
    </div>
    <div class="col-sm-4">
      <h3>Column 3</h3> 
      <p>Thank you</p>
      <img src={logo} alt="image" />
    </div>
  </div>
</div>



    </div>
  );
}

export default App;
