import React from "react"
import Padbank from "../PadBank"
import {
    MachineWrapper, 
    CompWrap, 
    ControlWrapper,
    CheckBoxWrapper,
    CheckBoxLabel,
    CheckBox,
    ToggleLabel,
    ToggleWrapper,
    Input,
    Display
} from "./StructureElements"
import PadData from "../Data/PadData"



class MachineStructure extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            powerOn: false,
            value: 50,
            display: String.fromCharCode(160),
            padData: PadData
         }

         this.toggleOnOff = this.toggleOnOff.bind(this)
         this.adjustValue = this.adjustValue.bind(this)
         this.displayClipName = this.displayClipName.bind(this)
    }

    displayClipName(name){
        if(this.state.powerOn){
            this.setState({
                display: name
            })
        }
    }

    toggleOnOff(){
        this.setState({
            powerOn: !this.state.powerOn
        })
    }

    adjustValue(e){
        this.setState({
            value: e.target.value
        })
    }


    render(){
        {const clips = [].slice.call(document.getElementsByClassName('clip'));
            clips.forEach(sound => {
                sound.volume = this.state.value / 100;
            });
        }
        return(
            <MachineWrapper id="drum-machine">
                <CompWrap >
                    <Padbank 
                        powerOn ={this.state.powerOn}
                        updateDisplay = {this.displayClipName}
                        padData = {this.state.padData}
                    />
                    <ControlWrapper>
                        <ToggleWrapper>
                            <ToggleLabel>Power</ToggleLabel>
                            <CheckBoxWrapper>
                                <CheckBox id="checkbox" type="checkbox" onChange = {this.toggleOnOff} />
                                <CheckBoxLabel htmlFor="checkbox" />
                            </CheckBoxWrapper>
                            <Display id="display">{this.state.display}</Display>
                            <ToggleLabel>Volume</ToggleLabel>
                            <Input
                                onInput={this.adjustValue}
                                type="range"
                                style={{
                                width: "70%",
                                "--min": 0,
                                "--max": 100,
                                // "--val": value
                                }}
                            />     
                        </ToggleWrapper>
                    </ControlWrapper>
                </CompWrap>
            </MachineWrapper>
        )
    }
}

export default MachineStructure