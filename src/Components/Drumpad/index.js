import React from "react"
import { PadButton } from "./DrumpadElements"

class Drumpad extends React.Component {
    constructor(props){
        super(props)
        this.state = {}

        this.handleKeyPress = this.handleKeyPress.bind(this)
        this.playSound = this.playSound.bind(this)
    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyPress);
    }
      componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyPress);
    }
    
    handleKeyPress(e) {
        if (e.keyCode === this.props.keyCode) {
            console.log(this.props.keyCode)
            this.playSound();
        }
    }

    playSound() {
        const sound = document.getElementById(this.props.keyTrigger);
        this.props.updateDisplay(this.props.clipId.replace(/-/g, ' '));
        sound.play();
    }

    render(){
        return(
            <PadButton
              onClick = {this.playSound}
              id={this.props.clipId}
              className="drum-pad"
            >
                {this.props.keyTrigger}
                <audio
                    id = {this.props.keyTrigger}
                    src = {this.props.clip}
                    className="clip"
                ></audio>
            </PadButton>
        )
    }
}

export default Drumpad 