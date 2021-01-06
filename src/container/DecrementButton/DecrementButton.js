import  React, { Component } from 'react'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'

class DecrementButton extends Component{
    render (){
        return(
            <Button 
                variant='contained' 
                color='primary'
                onClick={ this.props.decrement }
            >
                Decrement 
            </Button>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        decrement: () => {dispatch({ type: 'DECREMENT' })}
    }
}

export default connect(null, mapDispatchToProps)(DecrementButton)