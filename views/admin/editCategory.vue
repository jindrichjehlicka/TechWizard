<template>

    <div>
        <adminnav></adminnav>
        <div class="container">

            <div class="row">

                <div class="col-md-4">
                <h1>Current Category</h1>
                    <br/>
                    <ul class="list-group">
                                <li class="list-group-item"><strong>Name:</strong> {{cate.name}}</li>
                    </ul>
                </div>

                <div class="col-md-4">
                    <h1>Update Category</h1>
                    <form action="/admin/api/category/edit/" method="post">
                        <input type="hidden" id="id" name="id" :value="cate.id">
                        <div class="form-group">
                            <label for="name">New Name</label>
                            <input type="text" id="name" name="name" class="form-control" :value="cate.name">
                        </div>
                        <center><button type="submit" class="btn btn-success">Update Category</button></center>
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
