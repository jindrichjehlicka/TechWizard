<template>

    <div>
        <navbar></navbar>
        <div class="container">
            <div class="row">
                <div class="col-md-4 col-md-offset-4">
                    <h1>Sign Up</h1>
                    <form action="/api/user/register" method="post" name="register">
                        <div class="form-group">
                            <label for="fname">First Name</label>
                            <input type="text" id="fname" name="fname" class="form-control">
                        </div>
                        <div class="form-group">
                            <label for="lname">Last Name</label>
                            <input type="text" id="lname" name="lname" class="form-control">
                        </div>
                        <div class="form-group">
                            <label for="email">E-Mail</label>
                            <input type="text" id="email" name="email" class="form-control">
                        </div>
                        <div class="form-group">
                            <label for="password">Password</label>
                            <input type="password" id="password" name="password" class="form-control">
                        </div>

                             <button type="submit" class="btn btn-primary" onclick="slert('Something')">Sign Up</button>
                    </form>
                </div>
                <!-- /.col -->
            </div>
            <!-- /.row -->
          </div>
        <!-- /.container -->
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
