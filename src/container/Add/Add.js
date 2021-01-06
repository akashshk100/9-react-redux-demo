import  React, { Component } from 'react'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'

class AddButton extends Component{
    render (){
        return(
            <Button 
                variant='contained' 
                color='primary'
                onClick={ this.props.add }
            >
                Add Five
            </Button>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        add: () => {dispatch({ type: 'ADD', value: 5 })}
    }
}

export default connect(null, mapDispatchToProps)(AddButton)