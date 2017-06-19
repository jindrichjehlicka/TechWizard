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

            <div class="col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-3 col-md-4 col-md-offset-4 col-lg-5 col-lg-offset-4">
                <h2 class="text-center"><span class="glyphicon glyphicon-search"></span>Search for product</h2>
                    <input id="searchInput" clas="form-control" v-on:keyup="search(products)" placeholder="Search for product by name">
                    <ul id="dialog" class="dropdown-menu"></ul>
                    <br><br>
            </div>
            <div class="row carousel-holder">

                <div class="col-md-12">
                    <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
                        <ol class="carousel-indicators">
                            <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
                            <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                            <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                        </ol>
                        <div class="carousel-inner">
                            <div class="item active">
                                <img class="slide-image img-fluid" src="images/slides/desktops.jpg" alt="">
                            </div>
                            <div class="item">
                                <img class="slide-image img-fluid" src="images/slides/monitors.jpg" alt="">
                            </div>
                            <div class="item">
                                <img class="slide-image img-fluid" src="images/slides/phones.jpg" alt="">
                            </div>
                        </div>
                        <a class="left carousel-control" href="#carousel-example-generic" data-slide="prev">
                            <span class="glyphicon glyphicon-chevron-left"></span>
                        </a>
                        <a class="right carousel-control" href="#carousel-example-generic" data-slide="next">
                            <span class="glyphicon glyphicon-chevron-right"></span>
                        </a>
                    </div>
                </div>

            </div>

            <div class="row">

                <div class="col-sm-4 col-lg-4 col-md-4" v-for="product in products">
                    <div class="thumbnail">
                        <img v-bind:src="'/images'+ product.image" alt="" style="width: 211px; height: 136px;">
                        <div class="caption">
                            <h4><a v-bind:href="'/api/product/' + product.id">{{product.name}}</a></h4>
                            <h4 class="">${{product.price}}</h4>
                            <p>{{product.description | truncat(55)}}</p>
                        </div>
                        <div v-if="auth == 1" class="btn btn-success pull-right" v-on:click="addToCart(product)">Add to cart</div>
                        <div v-else class="btn btn-success pull-right"><a href="/login">Add to cart</a></div>
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
    </div>
</div>
        <!-- /.container -->
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
