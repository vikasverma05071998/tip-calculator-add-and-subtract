import React from "react";
import Box from "./Component/Box"

class App extends React.Component {
  constructor(props){
    super(props)
    
  }
  render() {
    return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <Box />
      </div>
      
    )
  }
}



export default App