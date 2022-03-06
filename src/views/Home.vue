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
				<img class="img-fluid" src="../assets/Silla-e.webp" alt="Casa">
			</div>
			<div class="float-end w-p text-lg-end text-justify">
				<img class="img-fluid" src="../assets/kayamura.webp" alt="Kayamura">
				<h3 class="fs-h3">This is just a place holder</h3>
				<p>
					This website template has been designed by <a href="http://www.freewebsitetemplates.com/">Free Website Templates</a> for you, for free. You can replace all this  text with your own text. You can remove any link to our website  from this website template, you're free to use this website template  without linking back to us. If you're having problems editing this  website template, then don't hesitate to ask for help on the  <a href="http://www.freewebsitetemplates.com/forums/">Forums</a>.
				</p>
			</div>
		</div>
    <!-- Inserting image carousel of home -->
    <HomeCarousel/>

		<div class="news container d-flex flex-lg-row flex-column align-items-md-center overflow-hidden pt-5 mt-4">
			<div class="w-p ms-5" >
				<img class="ms-5 img-fluid" src="../assets/eco-park.webp" alt="Eco Park">
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
	<Footer/>
</body>
</html>
</template>

<script>
// @ is an alias to start from /src
import Header from '@/components/Header.vue'
import HomeCarousel from "@/components/HomeCarousel";
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Header,
    HomeCarousel,
	Footer
  }
}

</script>

