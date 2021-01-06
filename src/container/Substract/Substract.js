import  React, { Component } from 'react'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'

class SubstractButton extends Component{
    render (){
        return(
            <Button 
                variant='contained' 
                color='primary'
                onClick={ this.props.substract }
            >
                Substract Five
            </Button>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        substract: () => {dispatch({ type: 'SUBSTRACT', value: 5 })}
    }
}

export default connect(null, mapDispatchToProps)(SubstractButton)