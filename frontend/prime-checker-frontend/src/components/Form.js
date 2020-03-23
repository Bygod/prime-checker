import React from 'react'
import ToggleMessage from './ToggleMessage'
import Answer from './Answer'
import axios from 'axios'

class Form extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            value: '',
            error: false,
            lastValue: '',
            divisors: [],
            prime: ''
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
                error: false,
                lastValue: n
            })
            
            axios.post("/", {value: n})
            .then((response) => {
                this.setState({
                    divisors: response.data.divisors,
                    prime: response.data.prime
                })
            })
            .catch((error) => {
                console.log(error);
            })
        } else {
            this.setState({
                error: true
            })
        }


        event.preventDefault()
    }

    render() {
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
                <Answer
                    value={this.state.lastValue}
                    divisors={this.state.divisors}
                    prime={this.state.prime}/>
            </div>
        )
    }

}

export default Form
