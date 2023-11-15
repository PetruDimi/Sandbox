import React from "react"

const ProjectContext = React.createContext({
    items: [],
    addItem: (item)=>{}
})

export default ProjectContext;