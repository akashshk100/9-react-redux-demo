import React from 'react'
import { connect } from 'react-redux' 

const Display = (props) => {
    return(
        <div style={{display:'flex', justifyContent: 'center'}}>
            <p>Count: <b>{props.cnt}</b></p>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        cnt: state.count
    }
}

export default connect(mapStateToProps)(Display)