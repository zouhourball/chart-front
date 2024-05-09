import React from "react";
import "./style.scss";
type Props = {
  messageError?: string;
  setErrorState: React.Dispatch<React.SetStateAction<AppError>>
};
const Error: React.FC<Props> = ({ messageError, setErrorState }) => {
  return (
    <div data-testid="layer" className="layer">
        <span className="close-button" onClick={()=> setErrorState({
          isError: false,
        })}>X</span>
        <h2>Le service est momentanément indisponible</h2>
        <p>{messageError}</p>
    </div>
  );
};

export default Error;
