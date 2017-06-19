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
                <a href="/"><img src="/images/logo-brand.png" class="navbar-brand">
            </div>
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav">
                    <li>
                        <a href="/about">About</a>
                    </li>
                    <li>
                        <a href="/contacts">Contacts</a>
                    </li>
                </ul>
                <ul class="nav navbar-nav navbar-right" v-if="!auth">
                    <li><a href="/register"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
                    <li><a href="/login"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
                </ul>
                <ul class="nav navbar-nav navbar-right" v-else>
                    <li v-if="user.admin == 1"><a href="/admin"><span class="glyphicon glyphicon-king"></span>Admin</a></li>
                    <li><a>Hello, {{user.fname}}!</a></li>
                    <li><a href="/cart"><span class="glyphicon glyphicon-shopping-cart"></span>Cart<span id="badge" class="badge"></span></a></li>
                    <li><a href="/profile"><span class="glyphicon glyphicon-user"></span>My Profile</a></li>
                    <li><a href="/logout"><span class="glyphicon glyphicon-log-out"></span> Log Out</a></li>
                </ul>
            </div>
            <!-- /.navbar-collapse -->
            <!-- /.container -->
            <div class="fixedTop"><div v-bind:class="msg.type">{{msg.text}}</div></div>
        </nav>
    </div>
</template>

<script>
    export default {
        data: function() {
            return {
                auth,
                user,
                msg
            }
        }
    }
</script>

<style lang="css">
</style>