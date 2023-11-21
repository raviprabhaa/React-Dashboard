import Home from "./pages/home/Home";
import List from "./pages/list/List";

import New from "./pages/new/New";
import { BrowserRouter,Routes,Route,} from "react-router-dom";
import { userInputs } from "./formSource";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import "./style/dark.scss";
import Control from "./pages/control/Control";
import Notification from "./pages/notification/Notification";
import Profile from "./pages/single/Single";



function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" :"app"}>
      <BrowserRouter>
      <Routes>
        <Route path="/">
        <Route index element ={<Home/>} />  
        <Route path="control" element={<Control/>} />
        <Route path="notification" element={<Notification/>} />
        <Route path="profile" element={<Profile/>} />
        
        <Route path ="junctions">
          <Route index element={<List/>}/>
          
          <Route path="new" element={<New inputs= {userInputs} title="Add New Junction"/>}/>
        </Route>
        </Route>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
