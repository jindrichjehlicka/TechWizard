<template>

    <div>
        <adminnav></adminnav>
        <div class="container">
            <h1>User List</h1>
            <br>
            <table class="table" href="asd">
                <tr>
                    <th>Id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Admin</th>
                </tr>
                <tbody>
                <tr v-for="user in users">
                    <td>{{user.id}}</td>
                    <td>{{user.fname}}</td>
                    <td>{{user.lname}}</td>
                    <td>{{user.email}}</td>
                    <td v-if="user.admin == 1">Yes</td>
                    <td v-else>No</td>
                    <td><a class="btn-xs btn-info" v-bind:href="'/admin/user/edit/' + user.id" role="button">Edit</a></td>
                    <td><a class="btn-xs btn-danger" v-bind:href="'/admin/api/user/delete/' + user.id" role="button">Delete</a></td>
                </tr>
                </tbody>
            </table>
            <br>
            <center><h2>Add New User</h2></center>
            <br>
            <div class="row">
              <div class="col-md-4 col-md-offset-4">
                    <form action="/admin/user/new" method="post">
                        <div class="form-group">
                            <center><label for="fname">First Name</label></center>
                            <input type="text" id="fname" name="fname" class="form-control">
                            <center><label for="lname">Last Name</label></center>
                            <input type="text" id="lname" name="lname" class="form-control">
                            <center><label for="email">Email</label></center>
                            <input type="text" id="email" name="email" class="form-control">
                            <center><label for="password">Password</label></center>
                            <input type="text" id="password" name="password" class="form-control">
                            <center><button type="submit" class="btn btn-success">Add User</button></center>
                        </div>
                    </form>
            </div>
              </div>

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
