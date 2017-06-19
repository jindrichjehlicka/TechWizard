<template>

    <div>
        <adminnav></adminnav>
        <div class="container">

            <div class="row">

                <div class="col-md-4">
                <h1>Current Product</h1>
                    <br/>
                    <ul class="list-group">
                                <li class="list-group-item"><strong>Name:</strong> {{product.name}}</li>
                                <li class="list-group-item"><strong>Price:</strong> {{product.price}}</li>
                                <li class="list-group-item"><strong>Type:</strong> {{product.type}}</li>
                                <li class="list-group-item"><strong>Description:</strong> {{product.description}}</li>
                                <li class="list-group-item"><strong>Image:</strong> {{product.image}}</li>
                    </ul>
                </div>

                <div class="col-md-4">
                <h1>Product Preview</h1>
                <div class="thumbnail">
                        <img v-bind:src="'/images'+ product.image" alt="Responsive image" style="max-width: 100%; height: auto;" class="img-fluid">
                        <div class="caption">
                            <h4><a v-bind:href="'#' + product.id">{{product.name}}</a></h4>
                            <h4 class="">${{product.price}}</h4>
                            <p>{{product.description | truncat(55)}}</p>
                        </div>
                    </div>
                </div>

                <div class="col-md-4">
                    <h1>Update Product</h1>
                    <form action="/admin/api/product/edit/" method="post">
                        <input type="hidden" id="id" name="id" :value="product.id">
                        <div class="form-group">
                            <label for="name">New Name</label>
                            <input type="text" id="name" name="name" class="form-control" :value="product.name">
                        </div>
                        <div class="form-group">
                            <label for="price">New Price</label>
                            <input type="text" id="price" name="price" class="form-control" :value="product.price">
                        </div>
                        <div class="form-group">
                            <label for="type">New Type</label>
                            <input type="text" id="type" name="type" class="form-control" :value="product.type">
                        </div>
                        <div class="form-group">
                            <label for="desc">New Description</label>
                            <textarea type="text" id="desc" name="desc" class="form-control" :value="product.description">
                        </div>
                        <div class="form-group">
                            <label for="img">New Image</label>
                            <input type="text" id="img" name="img" class="form-control" :value="product.image">
                        </div>
                        <center><button type="submit" class="btn btn-success">Update Product</button></center>
                    </form>
                </div>
                <!-- /.col -->
            </div>
            <!-- /.row -->
        </div>
        <!-- /.container -->
        <br><br>
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