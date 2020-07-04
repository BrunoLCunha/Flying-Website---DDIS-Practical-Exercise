import React, {Component} from 'react';
import ShoppingStuff from './ShoppingStuff';


class ShoppingCart extends Component {  
    
    constructor(props) {
        super(props)
        
        this.state = {
            shopping: []
        }
    }
    
    componentDidMount() {

        const proxyUrl = "https://cors-anywhere.herokuapp.com/";
        const url = 'https://us-central1-dsid-gp5.cloudfunctions.net/api/cart/';
        
        fetch(proxyUrl + url) 
            .then(response => response.json())
            .then(data => {
                this.setState({ shopping: data, loading: false });
                return data;
            })
            .catch(error =>  this.setState({ error: error, loading: false }));

    }
    
    render() {
        return (
        <div id="fh5co-tours" className="fh5co-section-gray">
        <div className="container">
            <div className="row">
                <div className="col-md-8 col-md-offset-2 text-center heading-section animate-box">
                    <h3>Seu Carrinho</h3>
                    <p>Nesta seção você encontrará todos os produtos que demonstrou interesse até então. Que tal finalizar estas compras?</p>
                </div>
            </div>
            {this.state.shopping.map((shopping, index) => {
                console.log(shopping);
                if(shopping.username == this.props.username){
                    return  <ShoppingStuff key={index}
                                name={shopping.name}
                                price={shopping.price}
                                description={shopping.description}
                                img={shopping.img}  
                            />
                }     
            })}
            </div>
        </div>
        )
    }
}

export default ShoppingCart;