import React from 'react'
import './WorkspaceButton.css'
import { Link } from 'react-router-dom'

const WorkspaceButton = () => {
    return(
        <Link to="/signup"><button className="workspace-button">Create Workspace</button></Link>
    )
}

export default WorkspaceButton