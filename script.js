var name = prompt("Register Your Name For The Quiz");

if (name != "null") {
  var recieve = "true";
} else {
  var recieve = "false";
  var name = prompt("Try Again");
}

//    document.getElementById("navdiv").style.backgroundImage = "url(
//     'https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/rm218batch10-mynt-11.jpg?w=1200&h=1200&dpr=1&fit=clip&crop=default&fm=jpg&q=75&vib=3&con=3&usm=15&cs=srgb&bg=F4F4F3&ixlib=js-2.2.1&s=6fea82b106c374dff9ad7ece92afbee7')";

if (recieve == "true") {
  var navdiv = document.getElementById("body");
  body.style.backgroundImage =
    "url(https://wallpapercave.com/wp/wp5876975.jpg)";
  var h1 = document.getElementById("welcomeh1");
  h1.textContent = `Welcome, ${name}! `;
  var welcome = document.getElementById("welcome");
  welcome.style.backgroundColor = "magenta";
} else {
  alert("Invalid Name");
}
