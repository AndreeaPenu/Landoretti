$(document).ready(function() {
    $('select').niceSelect();
});

$(function(){
    $("#big-image img:eq(0)").nextAll().hide();
    $(".small-images img").click(function(e){
        var index = $(this).index();
        $("#big-image img").eq(index).show().siblings().hide();
    });
});

$(document).ready(function() {
    $('#user-form').validate({
   rules: {
     email: {
       required: true,
       email: true
     },
   },
   
   highlight: function(element, errorClass, validClass) { 
     $(element).nextAll('.form-control-feedback').show().removeClass('glyphicon-ok').addClass('glyphicon-remove');
     $(element).addClass(errorClass).removeClass(validClass);
     $(element).closest('.form-group').removeClass('has-success').addClass('has-error');
   },
   success: function(element) {
     $(element).nextAll('.form-control-feedback').show().removeClass('glyphicon-remove').addClass('glyphicon-ok');
  element.closest('.form-group').removeClass('has-error').addClass('has-success');
     $(element).remove();
   }
 });
});

var loginBtn = document.querySelector('#login-button');
var goBtn = document.querySelector('#go-button');
var logoutBtn = document.querySelector('#logout-button');
var nav1 = document.querySelector('#nav1');
var nav2 = document.querySelector('#nav2');
var nav3 = document.querySelector('#nav3');

loginBtn.addEventListener('click', function(){
    nav2.classList.remove('inactive');
    nav1.classList.add('inactive');
});

goBtn.addEventListener('click', function(){
    nav3.classList.remove('inactive');
    nav2.classList.add('inactive');
});

logoutBtn.addEventListener('click', function(){
    nav1.classList.remove('inactive');
    nav3.classList.add('inactive');
});

var nlBtn = document.querySelector('#nl');
var enBtn = document.querySelector('#en');
var frBtn = document.querySelector('#fr');

nlBtn.addEventListener('click', function(){
    nlBtn.classList.add('active');
    frBtn.classList.remove('active');
    enBtn.classList.remove('active');
});

enBtn.addEventListener('click', function(){
    enBtn.classList.add('active');
    frBtn.classList.remove('active');
    nlBtn.classList.remove('active');
});

frBtn.addEventListener('click', function(){
    frBtn.classList.add('active');
    nlBtn.classList.remove('active');
    enBtn.classList.remove('active');
});

var closeBtn = document.querySelector('#close-pop');
var openBtn = document.querySelector('#open-pop');
var pop2 = document.querySelector('#pop2');
var pop1 = document.querySelector('#pop1');

closeBtn.addEventListener('click', function(){
    pop2.classList.remove('inactive');
    pop1.classList.add('inactive');
});

openBtn.addEventListener('click', function(){
    pop1.classList.remove('inactive');
    pop2.classList.add('inactive');
});
