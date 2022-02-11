import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Home from './components/Home';
import Login from './components/Login';
import { login, logout, selectUser } from './features/userSlice';
import { auth } from './firebase';
import './index.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsucscribe = auth.onAuthStateChanged(user => {
      if (user) {
        //login
        dispatch(login({
          uid: user.uid,
          email: user.email
        }));
      } else {
        // logout
        dispatch(logout);
      }

    });
    return unsucscribe;
  }, []);

  return (
    <div className="App">
      <ToastContainer position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {
        !user ? (<Login />) : (<Home />)
      }
    </div>
  );
}

export default App;
