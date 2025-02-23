import { useSelector } from 'react-redux';
import './App.css';
import { HeaderComponent, FloatArrayInput, LineChart } from './components';
import REDUCER_CONSTANT from './helpers/constants/reducers';
import { useRef } from "react";

function App() {


  // const dispatch = useDispatch();
  const selector = useSelector((state) => state[REDUCER_CONSTANT.NAME.PREDICTOR]);

  let nn = [];
  if (selector && Array.isArray(selector.nn) && selector.nn.length > 0) {
    nn = selector.nn;
  }

  const opacityRef = useRef(null);
  const toggleModal = () => {
    if (opacityRef.current.classList.contains("modal-open"))
      opacityRef.current.classList.remove("modal-open");
    else opacityRef.current.classList.add("modal-open");
  };

  return (
    <>
      <HeaderComponent title='DEMO'></HeaderComponent>
      <FloatArrayInput loadingRef={opacityRef}></FloatArrayInput>
      <LineChart nn={nn} predict={selector.response}></LineChart>


      <div className="App">
        <div className="modal" ref={opacityRef} onClick={toggleModal}>
          <div className="loader"></div>
        </div>
      </div>
    </>
  );
}

export default App;
