import React, { useEffect, useContext } from "react";

import Routing from "./Router";
import { DataContext } from "./Components/DataProvider/DataProvider";
import actionTypes from "./Utility/action.type"; // Adjusted import
import { auth } from "./Utility/firebase";

function App() {
  const [{ user }, dispatch] = useContext(DataContext);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //console.log(authUser);
        dispatch({
          type: actionTypes.SET_USER, // Use the correct action type
          user: authUser,
        });
      } else {
        dispatch({
          type: actionTypes.SET_USER, // Use the correct action type
          user: null,
        });
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

  return <Routing />;
}

export default App;
