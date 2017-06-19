<template>
    <div>
        <adminnav></adminnav>
        <center><h1>Welcome to the Admin Panel {{user.fname}}</h1></center>
        
        <div class="container">
        <center><h2>Quick Access Panel<h2></center>
            <div class="row">
                <div class="col-md-4">
                    <table class="table table-responsive table-bordered">
                        <tr class="bg-success">
                            <th class="qa-title">Products</th>
                        </tr>
                        <tr class="centered-qa-item">
                            <a class="btn btn-success" href="/admin/products/new" role="button">Add Product</a>
                        </tr>
                        <tr class="centered-qa-item">
                            <a class="btn btn-warning" href="/admin/editproductlist" role="button">Update Product</a>
                        </tr>
                        <tr class="centered-qa-item">
                            <a class="btn btn-danger" href="/admin/deleteproductlist" role="button">Delete Product</a>
                        </tr>
                        <tr class="qa-item">
                            <a class="btn btn-primary" href="/admin/products" role="button">Go to Product Panel</a>
                        </tr>
                    </table>
                </div> <!-- end of col-md-4 -->
                <div class="col-md-4">
                    <table class="table table-responsive table-bordered">
                        <tr class="bg-success">
                            <th class="qa-title">Categories</th>
                        </tr>
                        <tr class="centered-qa-item">
                            <a class="btn btn-primary" href="/admin/categories" role="button">Go to Category Panel</a>
                        </tr>
                    </table>
                </div> <!-- end of col-md-4 -->
                <div class="col-md-4">
                    <table class="table table-responsive table-bordered">
                        <tr class="bg-success">
                            <th class="qa-title">Users</th>
                       </tr>
                        <tr class="centered-qa-item">
                            <a class="btn btn-primary" href="/admin/users" role="button">Go to User Panel</a>
                        </tr>
                    </table>
                </div> <!-- end of col-md-4 -->
            </div> <!-- end of container -->
 </div> <!-- end of container -->
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