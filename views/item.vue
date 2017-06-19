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
                        <div class="col-lg-9">
                            <div class="card mt-4">
                                <img class="card-img-top img-fluid" v-bind:src="'/images'+ product.image" alt="">
                                    <div class="card-block">
                                        <h3 class="card-title">{{product.name}}</h3>
                                        <h4>${{product.price}}</h4>
                                        <p class="card-text">{{product.description}}</p>
                                            <div class="infoWrapper">
                                                <button class="btn btn-primary pull-right">Add to Cart</button>
                                                <span class="text-warning">&#9733; &#9733; &#9733; &#9733; &#9734;</span> 4.0 stars
                                            </div> <!-- end of infoWrapper -->
                                    </div> <!-- end of card-block -->
                            </div> <!-- end of card mt-4 -->
                                    <div class="card card-outline-secondary my-4">
                                        <div class="card-header">
                                            <h2>Product Reviews</h2>
                                        </div> <!-- end of card-header -->
                                        <div class="card-block">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam inventore, similique necessitatibus neque non! Doloribus, modi sapiente laboriosam aperiam fugiat laborum. Sequi mollitia, necessitatibus quae sint natus.</p>
                                            <small class="text-muted">Posted by Anonymous on 3/1/17</small>
                                            <hr>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam inventore, similique necessitatibus neque non! Doloribus, modi sapiente laboriosam aperiam fugiat laborum. Sequi mollitia, necessitatibus quae sint natus.</p>
                                            <small class="text-muted">Posted by Anonymous on 3/1/17</small>
                                            <hr>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam inventore, similique necessitatibus neque non! Doloribus, modi sapiente laboriosam aperiam fugiat laborum. Sequi mollitia, necessitatibus quae sint natus.</p>
                                            <small class="text-muted">Posted by Anonymous on 3/1/17</small>
                                            <hr>
                                            <a href="#" class="btn btn-success">Leave a Review</a>
                                        </div> <!-- end of card-block -->
                                    </div> <!-- end of card card-outline-secondary my-4 -->
                        </div> <!-- end of col-lg-9 -->
                    </div> <!-- end of row -->
                <myfoot></myfoot>
            </div> <!-- end of container -->
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
