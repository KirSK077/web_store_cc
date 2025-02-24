import React from "react";

class ShopItemClass extends React.Component {
    render() {
        const { item } = this.props;
        return (
            <div className="main-content">
                <h2>{item.brand}</h2>
                <h1>{item.title}</h1>
                <h3>{item.description}</h3>
                <div className="description">{item.descriptionFull}</div>
                <div class="highlight-window mobile"><div class="highlight-overlay"></div></div>
                <div class="divider"></div>
                <div class="purchase-info">
                    <div className="price">{item.currency}{item.price.toFixed(2)}</div>
                    <button>Добавить в корзину</button>
                </div>
            </div>
        );
    }
}

export default ShopItemClass;
