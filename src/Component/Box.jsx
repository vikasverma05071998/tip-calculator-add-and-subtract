import React from "react"

class Box extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            value: 0,
            num: 0,

        }
    }
    
    render(){
        const changeHandler = (e) =>{
            this.setState({value: Number(e.target.value)})
                console.log(this.state.value)
        }

        const Add = () =>{
            this.setState({num: this.state.num + this.state.value})
        }

        const sub = () =>{
            this.setState({num: this.state.num - this.state.value})
        }

    return(
        <div style={{backgroundColor:"aqua",height:"300px",width: "350px",borderRadius:"20px"}}>
            <h4 style={{textAlign:"center",}}>ENTER THE VALUE</h4>
            <div style={{textAlign: "center"}}>
                <input type="number" style={{width: "250px", height: "25px"}} onChange={changeHandler}/>

            </div>
            <div style={{textAlign: "center",margin:"20px"}}>
                <button style={{width: "260px", height: "30px",background:"black",color:"white",borderRadius:"15px"}} onClick={Add}>ADD</button>
            </div>
            <div style={{textAlign: "center", margin: "20px"}}>
                <button style={{width: "260px", height: "30px",background:"black",color:"white",borderRadius:"15px"}} onClick={sub}>SUBTRACT</button>
            </div>
            <div style={{textAlign: "center"}}>
                <h5 style={{fontSize: "24px"}}>RESULT : {this.state.num}</h5>
            </div>
        </div>
      )
   }
}

export default Box