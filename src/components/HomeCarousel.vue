<template>
  <div id="carouselExampleIndicators" class="container carousel slide pt-5 mt-4" data-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img class="carrousel d-block mw-100 rounded-4" id="slide1" src="@/assets/resources/deco1-edited.jpg" alt="First slide">
      </div>
      <div class="carousel-item">
        <img class="d-block mw-100 rounded-4" id="slide2" src="@/assets/resources/deco2-edited.jpg" alt="Second slide">
      </div>
      <div class="carousel-item">
        <img class="d-block mw-100 rounded-4" id="slide3" src="@/assets/resources/deco3-edited.jpg" alt="Third slide">
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
</template>

<script>
export default {
  name: "HomeCarousel",
  slideIndex: 0,
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

<style scoped>

</style>