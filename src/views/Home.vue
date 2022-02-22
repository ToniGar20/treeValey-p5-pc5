<template>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="css/custom.css">
    <title>Home</title>
</head>
<body>
  <Header/>
  <div id="body" class="m-0 m-auto py-5 w-index body-h justify-content-center --bs-body-bg">
		<div class="blog container d-flex flex-lg-row flex-column align-items-md-center overflow-hidden p-1">
			<div class="w-p">
				<img src="../assets/house.png" alt="">
			</div>
			<div class="float-end w-p text-lg-end text-justify">
				<img src="../assets/kayamura.png" alt="">
				<h3 class="fs-h3">This is just a place holder</h3>
				<p>
					This website template has been designed by <a href="http://www.freewebsitetemplates.com/">Free Website Templates</a> for you, for free. You can replace all this  text with your own text. You can remove any link to our website  from this website template, you're free to use this website template  without linking back to us. If you're having problems editing this  website template, then don't hesitate to ask for help on the  <a href="http://www.freewebsitetemplates.com/forums/">Forums</a>.
				</p>
			</div>
		</div>
    <div id="carouselExampleIndicators" class="container carousel slide pt-5 mt-4" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="carrousel d-block mw-100 rounded-4" id="slide1" src="@/assets/deco/deco1.jpg" alt="First slide">
        </div>
        <div class="carousel-item">
          <img class="d-block mw-100 rounded-4" id="slide2" src="@/assets/deco/deco2.jpg" alt="Second slide">
        </div>
        <div class="carousel-item">
          <img class="d-block mw-100 rounded-4" id="slide3" src="@/assets/deco/deco3.jpg" alt="Third slide">
        </div>
      </div>
      <a class="carousel-control-prev" v-on:click="prevImg()" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only"></span>
      </a>
      <a class="carousel-control-next" role="button" v-on:click="nextImg()" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only"></span>
      </a>
    </div>
		<div class="news container d-flex flex-lg-row flex-column align-items-md-center overflow-hidden pt-5 mt-4">
			<div class="w-p ms-5" >
				<img class="ms-5" src="../assets/eco-park.png" alt="">
			</div>
			<div class="float-end w-p text-lg-end text-justify">
				<h3 class="fs-h3">This is just a place holder</h3>
				<p>
					This website template has been designed by  <a href="http://www.freewebsitetemplates.com/">Free Website Templates</a> for you, for free. You can replace all this  text with your own text. You can remove any link to our website  from this website template, you're free to use this website template  without linking back to us.
				</p>
				<p>
					If you're having problems editing this website template, then don't hesitate to ask for help on the <a href="http://www.freewebsitetemplates.com/forums/">Forums</a>.
				</p>
			</div>
		</div>
	</div>
</body>
</html>
</template>

<script>
// @ is an alias to start from /src
import Header from '@/components/Header.vue'

export default {
  name: 'Home',
  slideIndex: 0,
  components: {
    Header,
  },
  data() {
    return {
      slideIndex: 0,
    }
  },
  methods: {
    prevImg() {
      var items = document.getElementsByClassName("carousel-item");
      if (this.slideIndex !== 0) {
        let currentItem = items[this.slideIndex];
        currentItem.classList.remove("active");
        this.slideIndex--;

        let previousItemShown = items[this.slideIndex];
        previousItemShown.classList.add("active");
      } else if (this.slideIndex === 0) {
        this.slideIndex = 2;
        items[0].classList.remove("active");
        items[2].classList.add("active");
      }
    },
    nextImg() {
      var items = document.getElementsByClassName("carousel-item");
      if (this.slideIndex !== 2) {
        {
          let currentItem = items[this.slideIndex];
          currentItem.classList.remove("active");
          this.slideIndex++;

          let nextItemShown = items[this.slideIndex];
          nextItemShown.classList.add("active");
        }
      } else if (this.slideIndex === 2) {
          this.slideIndex = 0;
          items[2].classList.remove("active");
          items[0].classList.add("active");
      }
    },
  }
}



</script>

