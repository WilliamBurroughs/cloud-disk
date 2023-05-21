import React, { useState } from "react";
import Input from "../../utils/Input/Input";
import Close from "../../assets/img/close.svg";
import { useDispatch, useSelector } from "react-redux";
import { setPopupDisplay } from "../../reducers/fileReducer";
import { createDir } from "../../actions/file";
const Popup = () => {
  const [dirName, setDirName] = useState("");
  const popupDisplay = useSelector((state) => state.file.popupDisplay);
  const dispatch = useDispatch();
  const currentDir = useSelector((state) => state.file.currentDir);
  function createHandler() {
    dispatch(createDir(currentDir, dirName));
    dispatch(setPopupDisplay("none"));

    // dispatch(setPopupDisplay("flex"));
  }

  return (
    <div
      className="popup"
      onClick={() => dispatch(setPopupDisplay("none"))}
      style={{ display: popupDisplay }}
    >
      <div
        className="popup__content"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="popup__header">
          <div className="popup__title">Создать новую папку</div>
          <button
            className="popup__close"
            onClick={() => dispatch(setPopupDisplay("none"))}
          >
            <img src={Close} className="popup__close" alt="Закрыть" />
          </button>
        </div>
        <Input
          type="text"
          placeholder="Введите название папки"
          value={dirName}
          setValue={setDirName}
        />
        <button className="popup__create" onClick={() => createHandler()}>
          Создать
        </button>
      </div>
    </div>
  );
};

export default Popup;
