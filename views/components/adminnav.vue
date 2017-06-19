<template>
    <div>
        <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="/admin">Admin Panel</a>
            </div>
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav">
                    <li>
                        <a href="/admin/products">Products</a>
                    </li>
                    <li>
                        <a href="/admin/categories">Categories</a>
                    </li>
                    <li>
                        <a href="/admin/users">Users</a>
                    </li>
                </ul>
                <ul class="nav navbar-nav navbar-right">
                    <li v-if="user.admin == 1"><a href="/"><span class="glyphicon glyphicon-shopping-cart"></span>Go To Shop</a></li>
                    <li><a href="/profile"><span class="glyphicon glyphicon-user"></span>My Profile</a></li>
                    <li><a href="/logout"><span class="glyphicon glyphicon-log-out"></span> Log Out</a></li>
                </ul>
            </div>
            <!-- /.navbar-collapse -->
            <!-- /.container -->
        </nav>
    </div>
</template> 

<script>
    export default {
        data: function() {
            return {
                auth,
                user
            }
        }
    }
</script>

<style lang="css">
</style>
