import {Textfit} from "react-textfit";
import "./Screen.css";

/* Takes in props --> value (which is the default number to be displayed) 
on the screen. 

TextFit mode="single" allows for only a single line of text. Max is the 
maximum font size to be displayed.
*/
const Screen = ({value}) => {
    return (
        <Textfit className="screen" mode="single" max={70}>
          {value}
        </Textfit>
    );
}

export default Screen;