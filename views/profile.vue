<template>

    <div>
        <navbar></navbar>
        <div class="container">

            <div class="row">
                <div class="col-md-12">
                    <center><h1>{{user.fname}}, welcome to User Profile page</h1></center>
                    <center><h3>Here you can edit your personal information and see your previous orders</h3></center><hr>
                </div>
            <div>
            <div class="row">
                    <div class="col-md-4">
                    <center><h4>Personal Information</h4></center>
                    <br/>
                        <ul class="list-group">
                            <li class="list-group-item"><strong>First Name:</strong> {{user.fname}}</li>
                            <li class="list-group-item"><strong>Last Name:</strong> {{user.lname}}</li>
                            <li class="list-group-item"><strong>Email:</strong> {{user.email}}</li>
                        </ul>
                    </div>
                    <div class="col-md-6 col-md-offset-2">
                        <center><h4>Edit Personal Information</h4></center>
                        <br />
                        <form action="/api/user/edit/" method="post">
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
                                    <label class="col-md-3 control-label">New Password:</label>
                                    <div class="col-md-8">
                                        <input type="text" id="password" name="password" class="form-control" >
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
            <div class="row">
                    <div class="col-md-12">
                    <hr>
                        <center><h4>Your Previous Orders</h4></center>
                        <center><h5>Your previous orders are displayed below</h5></center>
                    </div>
            </div>
            <div class="row">
                <div class="col-md-8 col-md-offset-2">
                    <div class="panel panel-default">
                        <div class="panel-body">
                            <p>Items Purchased:</p>
                            <ul class="list-group">
                                <li class="list-group-item">
                                <span class="badge">Price</span>
                                Title | x Units
                                </li>
                            </ul>
                                <p>Order Details:</p>
                                    <div class="well well-sm">
                                        <p><strong>Delivery Address:</strong> </p>
                                        <p><strong>Payment ID:</strong> </p>
                                        <p><strong>Purchased by:</strong> </p>
                                    </div>
                        </div>
                            <div class="panel-footer">
                                <strong>Total Price:  </strong>
                            </div>
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
