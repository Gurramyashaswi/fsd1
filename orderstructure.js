
(function( $ ) {
    $.Shop = function( element ) {
        this.$element = $( element ); 
        this.init();
    };

    $.Shop.prototype = {
        init: function() {
        }
    };

    $(function() {
        var shop = new $.Shop( "#site" ); 
    });

})( jQuery );

$(function() {
    var shop = new $.Shop( "#site" );
    console.log( shop.$element );
});

$.Shop.prototype = {
    init: function() {
            this.cartPrefix = "winery-"; 
            this.cartName = this.cartPrefix + "cart"; 
            this.shippingRates = this.cartPrefix + "shipping-rates"; 
            this.total = this.cartPrefix + "total"; 
            this.storage = sessionStorage; 
            this.$formAddToCart = this.$element.find( "form.add-to-cart" ); 
            this.$formCart = this.$element.find( "#shopping-cart" ); 
            this.$checkoutCart = this.$element.find( "#checkout-cart" ); 
            this.$checkoutOrderForm = this.$element.find( "#checkout-order-form" ); 
            this.$shipping = this.$element.find( "#sshipping" ); 
            this.$subTotal = this.$element.find( "#stotal" ); 
            this.$shoppingCartActions = this.$element.find( "#shopping-cart-actions" );
            this.$updateCartBtn = this.$shoppingCartActions.find( "#update-cart" ); 
            this.$emptyCartBtn = this.$shoppingCartActions.find( "#empty-cart" ); 
            this.$userDetails = this.$element.find( "#user-details-content" ); 
            this.$paypalForm = this.$element.find( "#paypal-form" ); 
            this.currency = "&euro;"; 
            this.currencyString = "€"; 
            this.paypalCurrency = "EUR"; 
            this.paypalBusinessEmail = "yourbusiness@email.com";              
            this.paypalURL = "https://www.sandbox.paypal.com/cgi-bin/webscr"; 

            this.requiredFields = {
                expression: {
                    value: /^([w-.]+)@((?:[w]+.)+)([a-z]){2,4}$/
                },

                str: {
                    value: ""
                }

            };    
    }
};
