import React from "react";
import ReactDOM from "react-dom";
import Board from "./components/Board";
import "./index.css";
import { observe } from "./game";
import reportWebVitals from "./reportWebVitals";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import ColorButtons from "./Objects";

observe(() => {
    // eslint-disable-next-line react/no-deprecated
    ReactDOM.render(
        <DndProvider backend={HTML5Backend}>
            <div className="row-top">Simple Interior Designer</div>
            <div className="row">
                <div className="column-left">
                    <div>
                        <ColorButtons></ColorButtons>
                    </div>
                </div>
                <div className="column-right">
                    <React.StrictMode>
                        <div
                            style={{
                                width: "80vh",
                                height: "80vh"
                            }}
                        >
                            <Board />
                        </div>
                    </React.StrictMode>
                </div>
            </div>
        </DndProvider>,
        document.getElementById("root")
    );
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
