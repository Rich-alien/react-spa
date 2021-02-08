import * as React from "react";
import style from './product-counter.module.css'

class ProductCounter extends React.Component {
    state = {
        value: 0
    }

    componentDidMount() {
        const value = this.props.count;
        this.setState({
            ...this.state,
            value
        })
    }

    render() {
        const {value} = this.state;
        return (
            <div>
                <div onClick={this.increment}>
                    +
                </div>
                <div className={style.counter}>
                    {value}
                </div>
                <div onClick={this.decrement}>
                    -
                </div>
            </div>

        )
    }

    increment = () => {
        this.setState({
            ...this.state,
            value: this.state.value + 1
        })
    }
    decrement = () => {
        this.setState({
            ...this.state,
            value: this.state.value - 1
        })
    }
}

export default ProductCounter;
