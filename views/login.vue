<template>

    <div>
        <navbar></navbar>
        <div class="container">

            <div class="row">

                <div class="col-md-4 col-md-offset-4">
                    <h1>Sign In</h1>
                    <form action="/login" method="post">
                        <div class="form-group">
                            <label for="email">E-Mail</label>
                            <input type="text" id="email" name="email" class="form-control">
                        </div> <!-- end of form-group -->
                        <div class="form-group">
                            <label for="password">Password</label>
                            <input type="password" id="password" name="password" class="form-control">
                        </div> <!-- end of form-group -->
                        <button type="submit" class="btn btn-primary">Sign In</button>
                    </form>
                        <br><p>Don't have an account? <a href="/register">Sign Up Instead!</a></p>
                </div> <!-- end of col -->
            </div> <!-- end of row -->
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
