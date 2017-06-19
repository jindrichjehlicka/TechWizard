<template>

    <div>
        <adminnav></adminnav>
      <div class="container">
      <div class="row">
              <div class="col-md-2 col-md-offset-5">
                  <center><h4>Add new Category</h4></center>
                  <form action="/admin/api/newCategory" method="post">
                      <div class="form-group">
                          <center><label for="name">Name</label></center>
                          <input type="text" id="name" name="name" class="form-control">
                          <center><button type="submit" class="btn btn-success">Add Category</button></center>
                      </div>
                  </form>
              </div>
          </div>
        <div class="row">
          <div class="col-md-6">
              <p class="lead"><center>Categories</center></p>
              <div class="list-group">
                  <li class="list-group-item clearfix" v-for="cate in categories"><strong>{{cate.id}} -</strong> {{cate.name}}
                    <a class="btn btn-danger pull-right" v-bind:href="'/admin/api/category/delete/' + cate.id" role="button">Delete</a>
                    <a class="btn btn-success pull-right" v-bind:href="'/api/products/type/' + cate.id" role="button">Show All {{cate.name}}</a>
                  </li>
              </div>
          </div>
          <div class="col-md-6">
              <p class="lead"><center>Change Category Name</center></p>
              <div class="list-group">
                  <li class="list-group-item clearfix" v-for="cate in categories">
                        <form action="/admin/api/category/edit/" method="post">
                        <input type="hidden" id="id" name="id" :value="cate.id">
                            <div class="form-group">
                                    <div class="col-md-2">
                                        {{cate.name}}
                                    </div> 
                                    <div class="col-md-6">
                                        <input type="text" id="name" name="name" class="form-control" :value="cate.name">
                                    </div>
                                    <div class="col-md-4">
                                        <input type="submit" class="btn btn-primary" value="Update Name">
                                    </div>  
                            </div>
                        </form>
                  </li>
              </div>
          </div>
        </div>
      </div>
      <!-- end of container -->

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



