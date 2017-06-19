<template>
    <div>
        <adminnav></adminnav>
        <div class="container">
            <div class="row">
                <div class="col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-3 col-md-4 col-md-offset-4 col-lg-4 col-lg-offset-4">
                    <h2 class="text-center">Search for product</h2>
                    <input id="searchInput" clas="form-control" v-on:keyup="search(products)" placeholder="Search for product">
                    <ul id="dialog" class="dropdown-menu"></ul>
                    </div>
                </div>
                <br><br>
                <h3 class="text-center">Choose a Product To Update</h3>
                <br>
                <div class="row">
                    <div class="col-md-12">
                            <div class="col-sm-4 col-lg-4 col-md-4" v-for="product in products">
                                <div class="thumbnail">
                                    <img v-bind:src="'/images'+ product.image" alt="" style="max-width: 100%; height: auto;" class="img-fluid">
                                    <div class="caption">
                                        <h4><a v-bind:href="'/api/product/' + product.id">{{product.name}}</a></h4>
                                        <h4 class="">${{product.price}}</h4>
                                        <p>{{product.description | truncat(55)}}</p>
                                    </div>
                                    <center><a class="btn btn-warning" v-bind:href="'/admin/product/edit/' + product.id" role="button">Edit</a></center>
                                    <div style="clear:both"></div>
                                </div>
                            </div>
                    </div>
                </div>
                <center><a class="btn btn-primary" href="/admin" role="button">Go Back to Quick Access</a></center>
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