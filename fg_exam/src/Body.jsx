import PropTypes from 'prop-types'
export default function Body(props){
    return(
        <div className="container">
            <img className="kb-pic" src={props.kbImg} alt="profile-icon" />
            <div className="data">
                <h4>Model: {props.kbModel}</h4>
                <h4>Product Overview: <p>{props.pOverview}</p></h4>      
                <br />
                <h4><b>Specifications: </b></h4>
                <ul className='spec-list'>
                    <li>
                        {props.specifics}
                    </li>
                </ul>
                <br />
                <h4><b>In the Box: </b></h4>
                <ul className='itBox'>
                    <li>
                        {props.itbox}
                    </li>
                </ul>
                <h4><b>Key Features</b></h4>
                <ul className='kFeat'>
                    <li>
                        {props.kfeat}
                    </li>
                </ul>
                <br />
                <h4>Setup Instructions</h4>
                <h5><b>Unboxing: </b></h5>
                <ul className='unBx'>
                    <li>
                        {props.unbx}
                    </li>
                </ul>
                <h5><b>Connecting the Keyboard: </b></h5>
                <ul className='ctKey'>
                    <li>
                        {props.ctkey}
                    </li>
                </ul>
                <h5><b>Software Installation (Optional): </b></h5>
                <ul className='softIn'>
                    <li>
                        {props.softin}
                    </li>
                </ul>
                <h5><b>Keycap Removal and Replacement: </b></h5>
                <ul className='kRR'>
                    <li>
                        {props.krr}
                    </li>
                </ul>
                <br />
                <h4>Using the Keyboard</h4>
                <h5><b>Basic Typing: </b></h5>
                <ul className='bType'>
                    <li>
                        {props.btype}
                    </li>
                </ul>
                <h5><b>Customizing Backlighting: </b></h5>
                <ul className='cusBack'>
                    <li>
                        {props.cusback}
                    </li>
                </ul>
                <h5><b>Programming Keys: </b></h5>
                <ul className='progKey'>
                    <li>
                        {props.progkey}
                    </li>
                </ul>
                <h5><b>Using Media Controls: </b></h5>
                <ul className='uMedc'>
                    <li>
                        {props.umedc}
                    </li>
                </ul>
                <br />
                <h4>Troubleshooting</h4>
                <h5><b>Keyboard Not Responding: </b></h5>
                <ul className='knRes'>
                    <li>
                        {props.knres}
                    </li>
                </ul>
                <h5><b>Backlighting Not Working: </b></h5>
                <ul className='bnW'>
                    <li>
                        {props.bnw}
                    </li>
                </ul>
                <h5><b>Key Not Registering: </b></h5>
                <ul className='knReg'>
                    <li>
                        {props.knreg}
                    </li>
                </ul>
                <br />
                <h4>Maintenance and Care</h4>
                <h5><b>Cleaning: </b></h5>
                <ul className='cLean'>
                    <li>
                        {props.clean}
                    </li>
                </ul>
                <h5><b>Storage: </b></h5>
                <ul className='sTore'>
                    <li>
                        {props.store}
                    </li>
                </ul>
                <br /><br />
                <h4><b>Warranty and Support</b></h4>
                <ul className='waSup'>
                    <li>
                        {props.wasup}
                    </li>
                </ul>
                <h5>Manufacturer’s Website:  {props.mweb}</h5>
                <h5>Customer Support Email:  {props.csupm}</h5>
                <h5>Support Hotline:  {props.supphot}</h5>
            </div>
        </div>
    )
}
Body.PropTypes = {
    kbImg: PropTypes.string,
    kbModel: PropTypes.string,
    pOverview: PropTypes.string,
    specifics: PropTypes.string,
    itbox: PropTypes.string,
    kfeat: PropTypes.string,
    unbx: PropTypes.string,
    ctkey: PropTypes.string,
    softin: PropTypes.string,
    krr: PropTypes.string,
    btype: PropTypes.string,
    cusback: PropTypes.string,
    progkey: PropTypes.string,
    umedc: PropTypes.string,
    knres: PropTypes.string,
    bnw: PropTypes.string,
    knreg: PropTypes.string,
    clean: PropTypes.string,
    store: PropTypes.string,
    wasup: PropTypes.string,
    mweb: PropTypes.string,
    csupm: PropTypes.string,
    supphot: PropTypes.string,
}
Body.defaultProps = {
    kbImg: "https://placeholder.pics/svg/300x300",
    kbModel: null,
    pOverview: null,
    specifics: null,
    itbox: null,
    kfeat: null,
    unbx: null,
    ctkey: null,
    softin: null,
    krr: null,
    btype: null,
    cusback: null,
    progkey: null,
    umedc: null,
    knres: null,
    bnw: null,
    knreg: null,
    clean: null,
    store: null,
    wasup: null,
    mweb: null,
    csupm: null,
    supphot: null,
}