<template>

    <div>
        <adminnav></adminnav>
        <div class="container">

            <div class="row">
                <div class="col-md-12">
                    <center><h1>Edit user</h1></center>
                    <center><h3>Here you can edit user's personal information</h3></center><hr>
                </div>
            <div>
            <div class="row">
                    <div class="col-md-4">
                    <center><h4>Personal Information</h4></center>
                    <br/>
                        <ul class="list-group">
                            <li class="list-group-item"><strong>ID:</strong> {{user.id}}</li>
                            <li class="list-group-item"><strong>First Name:</strong> {{user.fname}}</li>
                            <li class="list-group-item"><strong>Last Name:</strong> {{user.lname}}</li>
                            <li class="list-group-item"><strong>Email:</strong> {{user.email}}</li>
                            <li class="list-group-item" v-if="user.admin == 1"><strong>Admin:</strong> Yes</li>
                            <li class="list-group-item" v-else><strong>Admin:</strong> No</li>
                          </ul>
                    </div>
                    <div class="col-md-6 col-md-offset-2">
                        <center><h4>Edit User Information</h4></center>
                        <br />
                        <form action="/admin/user/edit/" method="post">
                        <input type="hidden" id="id" name="id" :value="user.id">
                            <div class="form-group">
                                <label class="col-md-3 control-label">First Name:</label>
                                    <div class="col-md-8">
                                        <input type="text" id="fname" name="fname" class="form-control" :value="user.fname">
                                    </div>
                            </div>
                            <div class="form-group">
                                    <label class="col-md-3 control-label">Last Name:</label>
                                    <div class="col-md-8">
                                        <input type="text" id="lname" name="lname" class="form-control" :value="user.lname">
                                    </div>
                            </div>
                            <div class="form-group">
                                    <label class="col-md-3 control-label">Email:</label>
                                    <div class="col-md-8">
                                        <input type="text" id="email" name="email" class="form-control" :value="user.email">
                                    </div>
                            </div>
                            <div class="form-group">
                                <label class="col-md-3 control-label"></label>
                                    <div class="col-md-8">
                                    <br />
                                        <center><input type="submit" class="btn btn-primary" value="Update Information"></center>
                                    <span></span>
                            </div>
                            </form>
                        </div>
                    </div>
            </div>

            </div>
            <br />
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
