import PropTypes from 'prop-types'
export default function Body(props){
    return(
        <div className="container">
            <img className="profile-pic" src="https://static.vecteezy.com/system/resources/previews/017/047/854/original/cute-cat-illustration-cat-kawaii-chibi-drawing-style-cat-cartoon-vector.jpg" alt="profile-icon" />
            <div className="data">
                <p>Hi! I am <strong>{props.name}!</strong></p>
                <p>Birthdate: <b>{props.bdate}</b></p>
                <p>Age: <b>{props.age}</b></p>
                <p><b>{props.desc}</b></p>
            </div>
        </div>
    )
}
Body.PropTypes = {
    name: PropTypes.string,
    bdate: PropTypes.string,
    age: PropTypes.number,
    desc: PropTypes.string
}
Body.defaultProps = {
    name: "Cute Cat",
    bdate: "Unkown",
    age: 0,
    desc: "None"
}