import React, { Component } from 'react';
import {
    TextField, Button
} from '@material-ui/core'

export class Calculator extends Component {
    state = {
        firstNumber: 0,
        secondNumber: 0,
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value
        });
    };

    render() {
        const { firstNumber, secondNumber } = this.state;
        return (
            <React.Fragment>
                <div>
                    <TextField
                        id='firstNumber'
                        placeholder='Enter first number'
                        value={firstNumber}
                        onChange={this.handleChange('firstNumber')}
                        autoComplete='off'
                    />
                    <TextField
                        id='secondNumber'
                        placeholder='Enter second number'
                        value={secondNumber}
                        onChange={this.handleChange('secondNumber')}
                        autoComplete='off'
                    />
                    <Button
                        id='add'
                        variant='contained'
                        //onClick={this.performAddition}
                    >
                        Add
                    </Button>
                    <Button
                        id='multiply'
                        variant='contained'
                        //onClick={this.performMultiplication}
                    >
                        Multiply
                    </Button>
                </div>
            </React.Fragment>
        );
    }
}