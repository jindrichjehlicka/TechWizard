<template>

    <div>
        <navbar></navbar>
        <div class="container">
            <h1>Your Cart</h1>
            <a class="btn btn-danger pull-right" href="/emptyCart" role="button">Empty My Cart</a>
            <table class="table" href="asd">
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Qty</th>
                </tr>
                <tbody>
                <tr v-for="product in cartArr" v-bind:id="'product-' + product.id">
                    <td>{{product.name}}</td>
                    <td>{{product.price}}</td>
                    <td v-bind:id="'qty-' + product.id">{{product.qty}}</td>
                    <td><div class="btn btn-danger" v-on:click="delFromCart(product.id)">Delete</div></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td id="cartTotal"></td>
                </tr>
                </tbody>
            </table>
            <a class="btn btn-success pull-right" href="/checkout" role="button">Checkout</a>
        </div>
        <center><a class="btn btn-primary" href="/" role="button">Go Back To Shop</a></center>
        <myfoot></myfoot>
    </div>

</template>

<script>
    export default {
        data: function() {
            return {
            }
        }
    }
</script>

<style lang="css">
</style>