import React, { Component } from 'react';

export default class EyesOnMe extends Component {
    render() {
        return <button onFocus={(event) => console.log('Good!')} onBlur={(event) => console.log('Hey! Eyes on me!')}></button>
    }
}
