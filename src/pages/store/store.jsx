import * as React from "react";
import Products from "../../components/products/products";
import style from "./store.module.css"
import {products} from "../../data/products.data"

class Store extends React.Component {
    state = {
        products: [],
        sortProducts: [],
    }

    componentDidMount() {
        // функция по сокращению названий!
        // let renderName = products.forEach(product => {
        //     if (product.name.length > 20) {
        //          let n = product.name.length ...; // просчет разницы
        //         product.name.substring(n, str.length - 1);
        //     }
        // })
        this.setState({
            ...this.state,
            products: products
        })
    }

    render() {
        const {products} = this.state
        return (
            <div>
                {/* компонента по сортировке и т.п. */}
                <div className={style.container}>
                    {products.map((product, id) => (
                            <Products
                                key={id}
                                name={product.name}
                                price={product.price}
                            />
                        )
                    )

                    }
                </div>
            </div>
        )
    }
}

export default Store;
