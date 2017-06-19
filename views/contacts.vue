<template>
    <div>
        <navbar></navbar>
   <div class="container">
    <div clas = "row">

    <div class= "col-md=12">
    <center><h1><strong>Contacts</strong></h1></center>
    </div>
    <br>
    <hr>
    </div><!-- /.row -->
<div class="row">

    <div class="col-md-4">
    <center><img src="/images/profile-pics/profile.png" alt="" class="img-responsive"></center>
    <br>
    <ul>
    <li>Jindrich Jehlicka</li>
    <li>Email: jindrichjehlicka@teachwizard.com</li>
    <li>Phone number:(+45) 91 86 91 64</li>
    </ul> 
</div>

 <div class="col-md-4">
    <center><img src="/images/profile-pics/profile.png" alt="" class="img-responsive"></center>
    <br>
    <ul>
    <li>Joosep Sisas</li>
    <li>Email: joosepsisas@techwizard.com</li>
    <li>Phone number:(+45) 11 22 33 44</li>
    </ul> 
</div>

 <div class="col-md-4">
    <center><img src="/images/profile-pics/profile.png" alt="" class="img-responsive"></center>
    <br>
    <ul>
    <li>Arnas Sokolovas</li>
    <li>Email: arnassokolovas@techwizard.com</li>
    <li>Phone number:(+45) 55 66 77 88</li>
    </ul> 
</div>
    
    </div><!-- /.row -->
<hr>



    <br/><br>
    



<div class="row">
 
<div class="col-md-6">
<h3><strong>Where can you find us?</strong></h3>
<center><img src="/images/adress/ucn.jpg" alt="" class="img-thumbnail"></center>
<center><strong><h3><a href="https://goo.gl/maps/fdiY5W6Zdt42"><img src="images/adress/google-pin.png" alt="" class="google-pin"></a>Sofiendalsvej 60, 9200 Aalborg SV</h3></strong></center>
</div>

<div class="col-md-5 col-md-offset-1">

<h3><strong>Send us a message:</strong></h3>
<br>

<form class="form-horizontal">
  <div class="form-group">
    <label class="control-label col-sm-2" for="email">Email:</label>
    <div class="col-sm-6">
      <input type="email" class="form-control" id="email" placeholder="Enter email">
    </div>
  </div>
  <div class="form-group">
    <label class="control-label col-sm-2" for="name">Name:</label>
    <div class="col-sm-6"> 
      <input type="text" class="form-control" id="name" placeholder="Enter name">
    </div>
  </div>
  <div class="form-group"> 
    <div class="col-sm-6">
      </div>
  </div>
  <div class="form-group">
    <label class="control-label col-sm-2" for="msg">Message:</label>
    <div class="col-sm-10"> 
      <textarea class="form-control" rows="5" id="msg"></textarea>
    </div>
  </div>
  <div class="form-group"> 
    <div class="col-sm-6">
     <center> <button type="submit" class="btn btn-default">Submit</button></center>
    </div>
  </div>
</form>
</div>

</div><!-- /.row -->
<br>


   </div><!-- /.container -->
        
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