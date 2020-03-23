import React from 'react'
import ToggleMessage from './ToggleMessage'

class Form extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            value: '',
            error: false
        }

    }

    handleValueChange = event => {
        this.setState({
            value: event.target.value
        })
    }

    handleSubmit = event => {
        let n = + this.state.value

        if (Number.isInteger(n) &&  n  > 0) {
            this.setState({
                value: n,
                error: false
            })
        } else {
            this.setState({
                error: true
            })
        }

        event.preventDefault()
    }

    render() {
        console.log(this.state)
        return (
            <div className="Form">
                <form onSubmit={this.handleSubmit}>
                    <input type="text"
                        value={this.state.value}
                        onChange={this.handleValueChange}
                        placeholder="Número"
                    />
                    <button><b> Dividir </b></button>
                    <ToggleMessage 
                        show={this.state.error}
                        type="Error"
                        message="Por favor, insira um número inteiro e positivo"
                    />
                </form>
            </div>
        )
    }

}

export default Form
