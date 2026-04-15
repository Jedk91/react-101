/* import { useDispatch } from "react-redux"; */
import "./App.css";
import MainFooter from "./containers/main-footer/main-footer";
import MainHeader from "./containers/main-header/main-header";
/* import { fetchLiveboard } from "./store/actions/erail-action"; */

function App() {
/*   const dispatch = useDispatch();

  const handleRequest = () => {
    dispatch(fetchLiveboard("simonis"));
  }; */

  return (
    <>
      <MainHeader />
      <main className="App">
        <button /*onClick={handleRequest}*/>console.log</button>
      </main>
      <MainFooter />
    </>
  );
}

export default App;
