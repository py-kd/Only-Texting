$(document).ready(function() {

      // Mouse Events Practice
      // $("button").click(function(){
      //       console.log(`with Element selector`);
      // });

      // $("#with-id").click(function(){
      //       console.log(`with ID selector`);
      // });

      // $(".with-class").click(function(){
      //       console.log(`with Class selector`);
      // });

      // $(".with-class").dblclick(function(){
      //       console.log(`with Class selector Double clicked`);
      // });

      // $(".my-box").mouseenter(function(){
      //       console.log(`mouseEntered in box`);
      // });

      // $(".my-box").mouseleave(function(){
      //       console.log(`mouseLeaveed box`);
      // });

      // KeyBoard Events Practice
      // $("#name").keypress(function(){
      //       console.log(`Key Pressed`);
      // });

      // $("#name").keydown(function(){
      //       console.log(`Key Down`);
      // });

      // $("#name").keyup(function(){
      //       console.log(`Key Up`);
      // });

      // NOTE ---> sequence is:: KeyDown, KeyPress & KeyUp

      // Form Events
      // $("#fname").focus(function(){
      //       console.log(`input Focused`);
      // });

      // $("#fname").blur(function(){
      //       console.log(`input Blur`);
      // });
      
      // // $("#test-from").submit(function(){
      // //       console.log(`Form Submited`);
      // // });

// submit buttons byDefault reload the web page preventDefault() method prevent page reloading

      // $("#test-from").submit(function(e){
      //       e.preventDefault()
      //       console.log(`Form Submitted`);
      // });

      // Window Events
      // $(window).resize(function(){
      //       console.log(`Window Resized`);
      // });

      // Hide, Show & Toggle 
      // $("img").hide();

      // $("#disp-img").click(function(){
      //       $("img").show();
      // });

      // $("#hide-img").click(function(){
      //       $("img").hide(5000, function () {
      //             console.log(`image hidding...`);
      //       });
      // });

      // $("#toggler").click(function(){
      //       $("img").toggle(2000);
      // });

      // Feading - Fade In, Fade Out, Fade Toggle & FadeTo
      // $("#fade-in").click(function(){
      //       $("img").fadeIn(2000, function () {
      //             console.log(`image fade in...`);
      //       });
      // });
      
      // $("#fade-out").click(function(){
      //       $("img").fadeOut(2000);
      // });

      // $("#fade-toggle").click(function(){
      //       $("img").fadeToggle(function () {
      //             console.log(`fade toggle...`);
      //       });
      // });
      
      // $("#fade-to").click(function(){
      //       $("img").fadeTo(1000, 0.3); // second arg is:: Opacity(Fade Leve)
      // });

      // Slideing - Slide Up, Slide Down & Slide Toggle
      // $("#slide-down").click(function(){
      //       $("img").slideDown(1000, function () {
      //             console.log(`sliding down...`);
      //       });
      // });

      // $("#slide-up").click(function(){
      //       $("img").slideUp(1000);
      // });

      // $("#slide-toggle").click(function(){
      //       $("img").slideToggle(function () {
      //             console.log(`toggleing slide...`);
      //       });
      // });

      // Animate Methods
      // $("#animate").click(function(){
      //       $("img").animate({left: `+=500px`}, 1000, function () {
      //             console.log(`Operation Done`);
      //       });
      // });

      // Text Data / get Text
      // $("#data-fetcher").click(function(){
      //       let data = $("P").text();
      //       console.log(data);
      //       $("p").text(`Data Fetched`);
      // });

      // set text
      // $("#set-text").click(function(){
      //       let value = $("h1").text();
      //       $("h1").text(`i am Chaman`);
      // });

      // get & set HTML
      // let html = $(".list-item").html();
      // // let html = $("li").html();
      // console.log(html);

      // let newHtmlString = "<b>html is <u> changed </u> </b>";
      // $("ul").html(newHtmlString);
      // // $("li").html(newHtmlString);

      // get Value
      // let userName = $("#name").val();
      // console.log(`${userName}`);
      // $("h1").html(`${userName}`)

      // $("#submit").click(function(){
      //       userName = $("#name").val();
      //       console.log(`${userName}`);
      //       $("h1").html(`Hello, ${userName}`)
      //       // set value
      //       $("#name").val(`ok`)
      // });

      // get & set Attributes value
      // let attrList = $("#my-link").attr("href");
      // console.log(attrList);

      // let classList = $("#my-link").attr("class");
      // console.log(classList);

      // console.log($("img").attr("src"));
      // console.log($("img").attr("alt"));
      // console.log($(".box").attr("data-text"));

      // set attribute's value
      // $("selector").attr("attributeName", "newValue")
      // $("#class-changer").click(function() {
      //       $("div").attr("class", "my-box");
      // })

      // on click image changer
      // $("#changer").click(function() {
      //       $("img").attr("src", "assets/bg.jpg")
      // });

      // add Css class
      // $("#shapper").click(function() {
      //       $("img").addClass("circle");
      // });

      // // remove Css class
      // $("#reshaper").click(function() {
      //       $("img").removeClass("circle");
      // });

      // // toggle Css class
      // $("#toggle-shaper").click(function() {
      //       $("img").toggleClass("circle");
      // });

      // get css property's value
      let val = $("#my-box").css("color");
      console.log(val);

      // set css property's value
      $("#color-changer").click(function() {
            $("#my-box").css("color", "red");
            $("#my-box").css("backgroundColor", "#000");
            $("#my-box").css("fontSize", "1.3rem");
      });

      // chante multiple css property's value at a time
      // $("#color-changer").click(function() {
      //       $("#my-box").css({"color": "red", "backgroundColor": "#000", "fontSize": "1.3rem"});
      // });

});