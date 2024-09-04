import PropTypes from 'prop-types'
export default function Body(props){
    return(
        <div className="person">
            <img className="person-picture" src="https://placeholder.pics/svg/150x150" alt="profile-icon" />
            <p>This is <strong>{props.name}'s</strong> favorite food: </p>
            <p>{(props.food).toUpperCase()}</p>
            <p>Is it Healthy? {props.isHealthy ? "Yes" : "No"}</p>
            <p><strong>{props.name} is {props.age} years old!</strong></p>
        </div>
    )
}
Body.PropTypes = {
    name: PropTypes.string,
    food: PropTypes.string,
    inHealthy: PropTypes.bool,
    age: PropTypes.number
}// prop types as function to check the calidity of type of data
//passed as props
Body.defaultProps = {
    name: "Guest",
    food: "Unkown",
    isHealthy: false,
    age: 0
}