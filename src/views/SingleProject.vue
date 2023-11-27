<script>
export default {
  
  data() {
    return {
      id:1,
    };
  },
//   computed: {
//     header() {
//       const headerMappings = {
//         1: "Volunteer as Trainer of Digital Literacy Seminar",
//         2: "Logo Design",
//         // Add more mappings as needed
//       };

//       return headerMappings[this.id] || "Default Header";
//     },
    
//     image() {
//   const imageMappings = {
//     1: () => require("@/assets/images/SOBEN-HERO.jpg"),
//     2: () => require("@/assets/images/v-live.png"),
//     3: () => require("@/assets/images/v-live.png"),
//     4: () => require("@/assets/images/v-live.png"),
//     // Add more mappings as needed
//   };
    

//   const imageSource = imageMappings[this.id];
//   return imageSource ? imageSource() : "Default Image";
// },
// videoLink() {
//         const videoMappings = {
//           1: "https://www.youtube.com/embed/kNHb5sH4zTs?si=Jg9zXk0bQ3Jx14gH",
        
//           // Add more mappings as needed
//         };
//         return videoMappings[this.id] || "";
//       },
      
//       externalLink() {
//         const videoMappings = {
//           1: "https://github.com/angtrychhea/VueJS_CRUD_using-Laravel_API",
        
//           // Add more mappings as needed
//         };
//         return videoMappings[this.id] || "";
//       },

//   },
  mounted() {
    this.id = Number(this.$route.params.id);
    console.log("ID from route:", this.id);
  },

};

</script>

<template>
<div class="container mx-auto mt-10 sm:mt-20 text-ternary-dark dark:text-primary-light"> 
  <!-- Digital literacy Seminar -->
  <div v-if="id===1">
    <div class="container">
        <h1 class=" text-3xl md:text-3xl xl:text-4xl text-center sm:text-left">
          Volunteer as Trainer of Digital Literacy Seminar
        </h1>
        <p class="text-left text-ternary-dark dark:text-primary-light"> Location: Battambang </p>
        <br>
      <img src="../assets/images/digital_literacy.jpg">
      <br>

     
        <iframe width="560" height="315" src="https://www.youtube.com/embed/kNHb5sH4zTs?si=Jg9zXk0bQ3Jx14gH" frameborder="0" allowfullscreen></iframe>
      
      <div class="description">
        <p>
          
        </p>
      </div>
    </div>
  </div>

  <!-- KHoding Hero -->
  <div v-else-if="id===5">
    <div class="container">
        <h1 class=" text-3xl md:text-3xl xl:text-4xl text-center sm:text-left">
          1 month Trainer of <a class="link" href="https://khodinghero.org/">KHoding Hero 2023</a>  program
        </h1>
        <p class="text-left "> Team: SOBEN-HERO </p>
        <br>
      <img src="../assets/images/volunteer/soben-hero.jpg"><br>
      <p>កម្មវិធីអ្នកស្ម័គ្រចិត្ត <a href="https://khodinghero.org/">KHoding Hero 2023</a> នឹងធ្វើដំណើរទៅកាន់ភាគពាយ័ព្យ នៃព្រះរាជាណាចក្រកម្ពុជា។
  ទីតាំងគោលដៅគឺត្រូវបានជ្រើសរើសចំនួន ២ខេត្ត មានខេត្តបាត់ដំបង និងខេត្តបន្ទាយមានជ័យ ដែលក្នុងមួយខេត្តមានអ្នកស្ម័គ្រចិត្តចំនួន ១០ក្រុម។</p>
      <img src="https://khodinghero.org/wp-content/uploads/2023/08/tg_image_2330393017-980x551.jpeg">
      <br>

      <div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/kvzoNukxr4c?si=DBt-4lgAhe8_lJec" frameborder="0" allowfullscreen></iframe>
      </div>
      <div class="description">
        <p>
          
        </p>
      </div>
    </div>
  </div>

  <div v-else-if="id===2">
    <div class="container">
        <h1 class=" text-3xl md:text-3xl xl:text-4xl text-center sm:text-left ">
          Logo Design
        </h1>
        <p class=""> Team project </p>
        <br>
      <img src="../assets/images/v-live.png">
      <br>

      <div class="description ">
        <p>
          The brand name, "V-Live Better Living," suggests a commitment to improving various aspects of life, possibly including health, wellness, and overall well-being.
        </p>
        <h3>App using:</h3>
      </div>
    </div>
  </div>
  
  <div v-else>
    <div class="text-center">
      <p class="text- font-semibold "> sorry, This page is Developing </p>
      <h1 class="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">Page under Construction</h1>
      <p class="mt-6 text-base leading-7 ">Coming soon...</p>
      <div class="mt-10 flex items-center justify-center gap-x-6">
        
        <router-link
		:to="{ path: '/' }"
		class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Go back home</router-link>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>
.link {
  color: #337DFF;
  text-decoration: underline;
}
</style>
