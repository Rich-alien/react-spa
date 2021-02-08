import * as React from "react";
import style from './cart-line.module.css';

class CartLine extends React.Component {
    state = {
        count: 0
    }

    componentDidMount() {
        const {count} = this.props
        this.setState({
            ...this.state,
            count,
        })
    }

    render() {
        return (
            <div className={style.container}>
                {this.props.name}
                {this.props.price * this.state.count}
                <div>
                    <div onClick={this.increment}>
                        +
                    </div>
                    <div className={style.counter}>
                        {this.state.count}
                    </div>
                    <div onClick={this.decrement}>
                        -
                    </div>
                </div>
            </div>
        )
    }

    increment = () => {
        this.setState({
            ...this.state,
            count: this.state.count + 1
        })
    }
    decrement = () => {
        this.setState({
            ...this.state,
            count: this.state.count - 1
        })
    }
}

export default CartLine;
