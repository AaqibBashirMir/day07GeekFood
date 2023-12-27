import PropTypes from "prop-types"
import './Button.css'

 function Button(Props){
    let buttonStyle={};
    return (
        <>
         <button style={Props.buttonStyle}>{Props.buttonData}</button>
        </>
    )
}
export default Button;