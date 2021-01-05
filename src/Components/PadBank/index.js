import React from "react"
import Drumpad from "../Drumpad"
import {PadContainer} from "./PadbankElements"

class Padbank extends React.Component {
    constructor(props){
        super(props)
        this.state = {
        }
    }

    render(){
        let PadsInfo
        if (this.props.powerOn){
            PadsInfo = this.props.padData.map((drumObj, i, Pads) => {
                return(
                    <Drumpad
                        clip = {Pads[i].url}
                        clipId = {Pads[i].id}
                        keyTrigger = {Pads[i].keyTrigger} 
                        keyCode = {Pads[i].keyCode}
                        updateDisplay ={this.props.updateDisplay}
                    />
                )
            })
         
        } else {
            PadsInfo = this.props.padData.map((drumObj, i, Pads) => {
                return(
                    <Drumpad
                        clip = "#"
                        clipId = {Pads[i].id}
                        keyTrigger = {Pads[i].keyTrigger}
                        updateDisplay={this.props.updateDisplay}
                    />
                )
            })
        }

        return(
            <PadContainer>
                {PadsInfo}
            </PadContainer>
        )
    }
}

export default Padbank