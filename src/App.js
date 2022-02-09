import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Home from './components/Home';
import Login from './components/Login';
import { login, logout, selectUser } from './features/userSlice';
import { auth } from './firebase';
import './index.css';
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
      {
        !user ? (<Login />) : (<Home />)
      }
    </div>
  );
}

export default App;
