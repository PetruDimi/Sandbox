import MainPage from "./components/MainPage/MainPage";
import SideBar from "./components/SideBar/SideBar";

import classes from './App.module.css'
function App() {


  return (
    <div className={classes.main}>
            <SideBar/>
      <MainPage/>

    </div>
  );
}

export default App;
