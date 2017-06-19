<template>

    <div>
        <adminnav></adminnav>
        <div class="container">

            <div class="row">



                <div class="col-md-6">
                    <h1>Add new Product</h1>
                    <form action="/admin/api/newProduct" method="post">
                        <div class="form-group">
                            <label for="name">Name</label>
                            <input type="text" id="name" name="name" class="form-control">
                        </div>
                        <div class="form-group">
                            <label for="price">Price</label>
                            <input type="text" id="price" name="price" class="form-control">
                        </div>
                        <div class="form-group">
                            <label for="type">Category (Number)</label>
                            <input type="text" id="type" name="type" class="form-control" placeholder='Pick a category ID. See table on the right side'>
                        </div>
                        <div class="form-group">
                            <label for="desc">Description</label>
                            <textarea type="text" id="desc" name="desc" class="form-control">
                        </div>
                        <div class="form-group">
                            <label for="img">Image</label>
                            <input type="text" id="img" name="img" class="form-control" placeholder="/images/products/example.jpg">
                        </div>
                        <button type="submit" class="btn btn-success">Add Product</button>
                    </form>
                </div>
          
                    <div class="col-md-4 col-md-offset-2">
                        <h1>Product Categories</h1>
                        <br />
                             <div class="list-group">
                                <li class="list-group-item" v-for="cate in categories"><strong>{{cate.id}} -</strong> {{cate.name}}</li>
                            </div>
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