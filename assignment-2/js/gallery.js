// iamge select

var img = document.querySelector('#image');

var thumbnail = document.querySelectorAll('.img-thumbnails');

for (var i = 0; i < thumbnail.length; i++) {
    thumbnail[i].addEventListener('click', function () {
      var currentColor = this.getAttribute("src");

   img.setAttribute("src", currentColor);
  });
}
