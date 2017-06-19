<template>
    <div>
        <navbar></navbar>
    <div class="container">
        <div class="row">

            <div class="col-md-3">
                <p class="lead">Categories</p>
                <div class="list-group">
                    <a v-bind:href="'/api/products/type/' + cate.id" class="list-group-item" v-for="cate in categories">{{cate.name}}</a>
                    <a v-bind:href="'/api/products'" class="list-group-item">All</a>
                </div>
            </div>
        <div class="col-md-9">

            <div class="row">

                <div class="col-sm-4 col-lg-4 col-md-4" v-for="product in products">
                    <div class="thumbnail">
                        <img v-bind:src="'/images'+ product.image" alt="" style="width: 211; height: 136;">
                        <div class="caption">
                            <h4 class="pull-right">${{product.price}}</h4>
                            <h4><a v-bind:href="'/api/product/' + product.id">{{product.name}}</a>
                            </h4>
                            <p>{{product.description}}</p>
                        </div>
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
    </div>
</div>
        <myfoot></myfoot>
<!-- /.container -->
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