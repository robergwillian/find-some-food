import ReactDom from "react-dom";

const Portal = ({ children }) => {
  const portal = document.getElementById("modal-root");
  return ReactDom.createPortal(children, portal);
};

export default Portal;
