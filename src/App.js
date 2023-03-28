// import logo from './logo.svg';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './componente/Header/Header';
import Data from './container/Data';
import Form from './container/Form';
import Appoinment from './container/Appoinment';
import Order from './container/Order';
import Orderdata from './container/Orderdata';
import EditOrder from './container/Orderedit';
import { Context } from './context/theamcontext';
import { useState } from 'react';
import './App.css'
import UseReducer from './container/UseReducer';
import Usememo from './usecallback.js/Usememo';
import User from './container/user';
import Sagauser from './container/Sagauser';
import Forms from './Loginform/Forms';
import { ToastContainer } from 'react-toastify';
import PrivateRoute from './container/PrivateRoute';



function App() {

  const [theam, setTheam] = useState('dark')
  const onclickHandler = () => {
    setTheam(theam === 'dark' ? 'light ' : 'dark')
  }

  console.log('theam', theam);
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Context.Provider value={theam}>
        <button className='btn btn-primary' onClick={onclickHandler}>change theam</button>
        <Header/>
        <Routes>
          <Route exact path={"/Form"} element={<Form />} />
          <Route exact path={"/Data"} element={<Data />} />
          <Route exact path={"/Order"} element={<PrivateRoute><Order /></PrivateRoute>} />
          <Route exact path={"/Appoinment"} element={<Appoinment />} />
          <Route exact path={"/orderdata"} element={<Orderdata />} />
          <Route exact path={"/UseReducer"} element={<UseReducer />} />
          <Route exact path={"/Usememo"} element={<Usememo />} />
          <Route exact path={"/User"} element={<User />} />
          <Route exact path={"/orderedit/:id"} element={<EditOrder />} />
          <Route exact path={"/Sagauser"} element={<Sagauser />} />
          <Route exact path={"/Forms"} element={<Forms />} />
        </Routes>
      </Context.Provider>
    </>
  );
}

export default App;
