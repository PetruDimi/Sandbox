import { useState } from "react";
import ProjectContext from "./ProjectContext";

const CtxProvider = (props) => {
  const [projectItems, setProjectItem] = useState([]);

  const addItemsHandler = (item) => {
    setProjectItem((prevItems) => {
      return [...prevItems, item];
    });
  };

  const projectCtx = {
    items: projectItems,
    addItem: addItemsHandler,
  };
  return (
    <ProjectContext.Provider value={projectCtx}>
      {props.children}
    </ProjectContext.Provider>
  );
};

export default CtxProvider;
