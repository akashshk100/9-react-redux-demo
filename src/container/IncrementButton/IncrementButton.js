import  React, { Component } from 'react'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'

class IncrementButton extends Component{
    render (){
        return(
            <Button 
                variant='contained' 
                color='primary'
                onClick={ this.props.increment }
            >
                Increment 
            </Button>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        increment: () => {dispatch({ type: 'INCREMENT' })}
    }
}

export default connect(null, mapDispatchToProps)(IncrementButton)