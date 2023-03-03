// import logo from './logo.svg';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './componente/Header/Header';
import Data from './container/Data';
import Form from './container/Form';
import Appoinment from './container/Appoinment';
import Order from './container/order';
import Orderdata from './container/Orderdata';



function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path={"/Form"} element={<Form />} />
        <Route exact path={"/Data"} element={<Data />} />
        <Route exact path={"/order"} element={<Order />} />
        <Route exact path={"/Appoinment"} element={<Appoinment />} />
        <Route exact path={"/Orderdata"} element={<Orderdata />} />
      
      </Routes>
    </>
  );
}

export default App;
