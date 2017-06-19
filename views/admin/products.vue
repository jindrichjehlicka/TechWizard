<template>
    <div>
        <adminnav></adminnav>
        <div class="container">
            <div class="row">
                <a class="btn btn-success pull-right" href="/admin/products/new" role="button">Add Product</a>
                <div class="col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-3 col-md-4 col-md-offset-4 col-lg-4 col-lg-offset-4">
                    <h2 class="text-center">Search for product</h2>
                    <input id="searchInput" clas="form-control" v-on:keyup="search(products)" placeholder="Search for product">
                    <ul id="dialog" class="dropdown-menu"></ul>
                    </div>
                </div>
                <br />
                <div class="row">
                    <div class="col-md-3">
                        <p class="lead">Categories</p>
                        <div class="list-group">
                            <a v-bind:href="'/api/products/type/' + cate.id" class="list-group-item" v-for="cate in categories">{{cate.name}}</a>
                            <a v-bind:href="'/api/products'" class="list-group-item">All</a>
                        </div>
                    </div>
                    <div class="col-md-9">
                            <div class="col-sm-4 col-lg-4 col-md-4" v-for="product in products">
                                <div class="thumbnail">
                                    <img v-bind:src="'/images'+ product.image" alt="" style="width: 211; height: 136;">
                                    <div class="caption">
                                        <h4><a v-bind:href="'/api/product/' + product.id">{{product.name}}</a></h4>
                                        <h4 class="">${{product.price}}</h4>
                                        <p>{{product.description | truncat(55)}}</p>
                                    </div>
                                    <a class="btn btn-warning pull-right" v-bind:href="'/admin/api/product/delete/' + product.id" role="button">Delete</a>
                                    <a class="btn btn-danger pull-right" v-bind:href="'/admin/product/edit/' + product.id" role="button">Edit</a>
                                    <div style="clear:both"></div>
                                    <div class="ratings">
                                        <p class="pull-right">15 reviews</p>
                                        <p>
                                            <span class="glyphicon glyphicon-star"></span>
                                            <span class="glyphicon glyphicon-star"></span>
                                            <span class="glyphicon glyphicon-star"></span>
                                            <span class="glyphicon glyphicon-star"></span>
                                            <span class="glyphicon glyphicon-star"></span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
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