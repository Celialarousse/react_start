import './Text.css'

function Text(props){
    return(
        <p className={props.classe}>{props.game}</p>
    )
}

export default Text