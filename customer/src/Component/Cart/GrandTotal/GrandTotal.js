import React,{Component} from 'react'

class GrandTotal extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <>
            <div class="col-lg-12 col-md-12 col-sm-12 u-s-m-b-30">
                <form class="f-cart">
                    <div class="row">
                    <div class="col-lg-12 col-md-12 u-s-m-b-30">
                            <div class="f-cart__pad-box">
                                <div class="u-s-m-b-30">
                                    <table class="f-cart__table">
                                        <tbody>
                                            <tr>
                                                <td>DELIVERY CHARGES</td>
                                                <td>2RS.</td>
                                            </tr>
                                            <tr>
                                                <td>SUBTOTAL</td>
                                                <td>40Rs.</td>
                                            </tr>
                                            <tr>
                                                <td>GRAND TOTAL</td>
                                                <td>42.00Rs.</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div>

                                    <button class="btn btn--e-brand-b-2" type="submit"> PROCEED TO CHECKOUT</button></div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            </>
        );
    }
}

export default GrandTotal;