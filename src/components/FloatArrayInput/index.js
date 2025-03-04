import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { useDispatch } from "react-redux";
import PredictAction from '../../features/actions/predictor';

const FloatArrayInput = () => {
    const [inputValue, setInputValue] = useState("");

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const dispatch = useDispatch();
    const buttons = [
        {
            title: "SVM",
            color: 'red',
            handleSubmit: () => {
                dispatch(PredictAction.clear());
                if (inputValue.trim().length === 0) {
                    alert("Không được rỗng");
                    return;
                }
                const nn = inputValue.split(",").map(i => Number(i.trim()));
                if (nn.length > 0) {
                    dispatch(PredictAction.svm(nn));
                }
            }
        },
        {
            title: "RF",
            color: 'blue',
            handleSubmit: () => {
                dispatch(PredictAction.clear());
                if (inputValue.trim().length === 0) {
                    alert("Không được rỗng");
                    return;
                }
                const nn = inputValue.trim().split(",").map(i => Number(i.trim()));
                if (nn.length > 0) {
                    dispatch(PredictAction.rf(nn));
                }
            }
        },
        {
            title: "Basic CNN",
            color: 'green',
            handleSubmit: () => {
                dispatch(PredictAction.clear());
                if (inputValue.trim().length === 0) {
                    alert("Không được rỗng");
                    return;
                }
                const nn = inputValue.split(",").map(i => Number(i.trim()));
                if (nn.length > 0) {
                    dispatch(PredictAction.tn(nn));
                }
            }
        },
        {
            title: "Proposed CNN",
            color: 'orange',
            handleSubmit: () => {
                dispatch(PredictAction.clear());
                if (inputValue.trim().length === 0) {
                    alert("Không được rỗng");
                    return;
                }
                const nn = inputValue.split(",").map(i => Number(i.trim()));
                if (nn.length > 0) {
                    dispatch(PredictAction.trn(nn));
                }
            }
        }
    ];

    return (
        <div className="p-4 w-6/10 mx-auto">
            <h2 className="text-xl font-bold mb-2">NIR Spectra Input:</h2>
            <textarea
                className="w-full h-40 p-2 border rounded-md"
                value={inputValue}
                onChange={handleChange}
                placeholder="Nhập chuỗi số phân cách nhau dấu phẩy (,). VD: 0.01762, 0.01152,..."
            />

            {buttons.map((but, index) => (
                <button key={index}
                    onClick={but.handleSubmit}
                    className={`py-2 bg-${but.color}-600 text-white rounded hover:bg-${but.color}-700 w-2/8`}
                >
                    {but.title}
                </button>
            ))}
        </div>
    );
};

export default FloatArrayInput;
