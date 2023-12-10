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
        <a href="https://web.facebook.com/smartforcambodia/posts/pfbid0jMjQE8hBUZphGjDypQAmuyNAmDu6HCn5neDGViaM4PhBbFmYNEJ5fhrZtGhhDVGil"><p class="text-left text-ternary-dark dark:text-primary-light"> Location: Battambang </p></a>
        <br>
      <img src="https://z-p3-scontent.fpnh5-4.fna.fbcdn.net/v/t39.30808-6/353442404_1368963980325896_6201571903841987607_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=a73e89&_nc_eui2=AeG8Hi_I8kqayYFsfrk-kOMgYWTZ1lGP8-dhZNnWUY_z53Ys_s3XIxWqf3FmwkAM4NsjI9TZNexG9d7ly72dOSlA&_nc_ohc=oHfOiEAOB1EAX9CnF_C&_nc_zt=23&_nc_ht=z-p3-scontent.fpnh5-4.fna&oh=00_AfDgcJ9E4KiugNqEKQM9t06F9XubnzjgDZ7JjDqc8RAZRA&oe=6579CF27">
      <br>

     
        <iframe width="560" height="315" src="https://www.youtube.com/embed/kNHb5sH4zTs?si=Jg9zXk0bQ3Jx14gH" frameborder="0" allowfullscreen></iframe><br>
      
        <h1 class=" text-3xl md:text-3xl xl:text-4xl text-center  ">
          Skills
        </h1>
    </div>
  </div>
  <!-- Video DL -->
  <div v-else-if="id===4">
    <div class="container">
        <h1 class=" text-3xl md:text-3xl xl:text-4xl text-center sm:text-left">
          Summarize video of <a class="link" href="">Digital Literacy</a> Seminar 3 days
        </h1>
        <p class="text-left "> </p>
        <br>

      
      <div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/kNHb5sH4zTs?si=Jg9zXk0bQ3Jx14gH" frameborder="0" allowfullscreen></iframe>
      </div>
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
        <p class="text-left "> Location: Bansay Traeng Secondary school  </p>
        <br>
      <img src="../assets/images/volunteer/soben-hero.jpg"><br>
      <p>កម្មវិធីអ្នកស្ម័គ្រចិត្ត <a href="https://khodinghero.org/">KHoding Hero 2023</a> នឹងធ្វើដំណើរទៅកាន់ភាគពាយ័ព្យ នៃព្រះរាជាណាចក្រកម្ពុជា។
  ទីតាំងគោលដៅគឺត្រូវបានជ្រើសរើសចំនួន ២ខេត្ត មានខេត្តបាត់ដំបង និងខេត្តបន្ទាយមានជ័យ ដែលក្នុងមួយខេត្តមានអ្នកស្ម័គ្រចិត្តចំនួន ១០ក្រុម។</p>
      <img src="https://khodinghero.org/wp-content/uploads/2023/08/tg_image_2330393017-980x551.jpeg">
      <br>

      <div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/kvzoNukxr4c?si=DBt-4lgAhe8_lJec" frameborder="0" allowfullscreen></iframe>
      </div><br>

          <!--Our team-->    
          <div class="flex flex-wrap -mx-3 mb-5">
            <div class="w-full max-w-full px-3 mb-6  mx-auto">      
                <!-- card body  -->
        
                    <div class="mb-9">
                      <h1 class="mb-2 text-[1.75rem] font-semibold text-dark">SOBEN-HERO Team</h1>
                      <span class="text-[1.15rem] font-medium text-muted"> We were to be a family there. </span>
                    </div>

                    <div class="flex flex-wrap w-full">

                      <div class="flex flex-col mr-5 text-center mb-11 lg:mr-16">
                        <div class="inline-block mb-4 relative shrink-0 rounded-[.95rem]">
                          <img class="inline-block shrink-0 rounded-[.95rem] w-[150px] h-[150px]" src="https://z-p3-scontent.fpnh5-1.fna.fbcdn.net/v/t39.30808-6/382383320_253355887693610_8237534788118351822_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeFJ_qhnaB25k3uMb5TMBPPCBmnkvkdo-WoGaeS-R2j5asWqwpffQbpnDaINKn7QTifV47fW4cVltp2rW7O246Et&_nc_ohc=setXzp_Q9nkAX9D0Ogm&_nc_zt=23&_nc_ht=z-p3-scontent.fpnh5-1.fna&oh=00_AfD37e1g0F-s7uoO0cy7lai7NgmSt8K81ZT0gN8I-rHzvQ&oe=657A4884" alt="avarat image">
                        </div>
                        <div class="text-center">
                          <a href="javascript:void(0)" class="text-dark font-semibold hover:text-primary text-[1.25rem] transition-colors duration-200 ease-in-out">Chhea Angtry</a>
                          <span class="block font-medium text-muted">Digital Business</span>
                        </div>
                      </div>

                      <div class="flex flex-col mr-5 text-center mb-11 lg:mr-16">
                        <div class="inline-block mb-4 relative shrink-0 rounded-[.95rem]">
                          <img class="inline-block shrink-0 rounded-[.95rem] w-[150px] h-[150px]" src="https://z-p3-scontent.fpnh5-2.fna.fbcdn.net/v/t39.30808-6/375316070_1089536369122368_7232828309954539695_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=9c7eae&_nc_eui2=AeEqHQNSbqNSZx_D7Gw5rwMgDfG3f44F-LQN8bd_jgX4tCp89ILE6RpzEPshxyzXwd7uROrdz64xgDK15syu8ZcD&_nc_ohc=38yS2raxPnAAX9d2tGG&_nc_zt=23&_nc_ht=z-p3-scontent.fpnh5-2.fna&oh=00_AfBLTKv4HYqJYcR91Nk0__Ycrq8e_YssdRqME5s2Nvnhsw&oe=657B158A" alt="avarat image">
                        </div>
                        <div class="text-center">
                          <a href="javascript:void(0)" class="text-dark font-semibold hover:text-primary text-[1.25rem] transition-colors duration-200 ease-in-out">Kong Darachin</a>
                          <span class="block font-medium text-muted">Computer Sience</span>
                        </div>
                      </div>

                      <div class="flex flex-col mr-5 text-center mb-11 lg:mr-16">
                        <div class="inline-block mb-4 relative shrink-0 rounded-[.95rem]">
                          <img class="inline-block shrink-0 rounded-[.95rem] w-[150px] h-[150px]" src="https://lh3.googleusercontent.com/pw/ADCreHcVynljqny7SUk_LEp1_5moO1H9TLZtQg-g1h0mLWr4Kj6ZWI_vfQI-RjOpLNMtGUy4rhhNwFfd-QDjlMF9Dc8wMAt6R3VxmFY2_6DEuQWG8uWec0GxM_0FT9ApLV_lb2asXO68aIl2h_R0yAmnuu8YaRGTv9BArZEPjL6eUwMdBKoQUhGZysTMGYuPqZp3XkhoaZQEY0aN2rBWVwCHkFip8El7on-uXVa-ZleDYGEFerCJ7bYuO7qi7Y17APMTYc0g_99kX9iIb9rpyaS8SFt1JmJn6Tyd8-xK-Xj2ArifSv-ol3S2P-0fEebVpAi1OT-SEZs7cpBRTEkrYd3wIJv0zuUR4rynZcZK71tKDuyKAoHEkwQClrdX57L8OlDfXLn3-4_We9-M9pthDyA91wAEObA0cVFeCL1Yj6vlVvMajfg-9qMggKRN63Iuhw67rOllDRchFJARpvhIrUSGW--IVeptpvPw5XFfKv6bFevy9yZvi5jB2zh6IbhOdvvPRPnlZBbPX08rIjfRLP3MW2az5RHi2LelHhlB5X0kjxDBPTWSpRnGem3nO3h4cWRWOY3Lkk72Vh02ey_qmerCVzK9C-BrF-tnfKuRheF-gjNEn7I3mgFaIGf-5Ay6IpzCD4AZq47WlrgQ26TOlqNapl3HFPAbmH22LzZbOYGxwLVm46gGQoheMeN8OTHZDusyhiN_OdZQ-yQVV4-bff-DxUjz_zIfkKczUYJZhblBqcyGgQNYhpdX2hrkbPfYnHhBlzX7r0DG72qMwcEgeP9D7aGTDIXgAoSCb3bNk_xfIKpOYhh37f4IrWl41B9zNOoMcSzgeg1EijFwo5_LftHTO8QMpZgdNtxtg0wkK2rPx_Cv-sN59Necht6OR2qaGSoL0g=w884-h884-s-no-gm?authuser=0" alt="avarat image">
                        </div>
                        <div class="text-center">
                          <a href="javascript:void(0)" class="text-dark font-semibold hover:text-primary text-[1.25rem] transition-colors duration-200 ease-in-out">Chhoeurt Udom</a>
                          <span class="block font-medium text-muted">Telecom & Networking</span>
                        </div>
                      </div>
                      
                      <div class="flex flex-col mr-5 text-center mb-11 lg:mr-16">
                        <div class="inline-block mb-4 relative shrink-0 rounded-[.95rem]">
                          <img class="inline-block shrink-0 rounded-[.95rem] w-[150px] h-[150px]" src="https://lh3.googleusercontent.com/pw/ADCreHfeGZL7TR5ZU5TVeHq6387C9j9WtaKHIMSm4ROEJ2OgErG9b3nKLWbrxyzi3sDHfsfkaA0Exu7ezGSnJZDU972RE-HUA-kqa5VXMGHuFyG6ayswsZG-XMRASabZpOaY7lRA598nN8NzHPhilVQdJBnAzQtVForFxgYSOdb97el3_qCaCadbxhwIkujL2XJdrDZjPjO8gdLqCAy7LuBZS6-r46zxPiIl1T8RJhtWKaPhuPcrbfy3vefJ_y1MJvjG3Osk7v55_ctJkwGtNEHWPFjdgjtM-EgbxAm4djkhATlEBl5VwoLPH2U20aCXIStDuq8QjpvlT1Q-yWEpDH8FI9955t8gcJXSXx0SZMRtDH5mUhTVFyR2BVERyQDKpswoGo6-7e-x36eAyF2ONxjFWL052tJtzJnShgrRO603V12eZDGKzxilX7L3UZIR3BXqY9UfOZwJiCR3CUc-UvCrr3-AX8755HDLm-PK1mOSehL2ltd7lqAtj2v-wc6xrGMhf9F4eswDG-PpOEhYeWskKNgFyJFjZNFTA1LIGk7WfxTJqry7HpZBo_29FA65wqeXcWNAiuAS5fWG5wKyOz8xSP6n_1rGOpFJjc6IVpjDmFIBNY_wEOinZi-Vz_tP2hfvyqmKU_mHnPL4mvqr8qv7ulBZXro-DUvG9wpzZLJr9dP0bTLK3BwHrukatYozzALYCcP9DBWZDZ3aLKVS6GGsCRzaCZS3koYxxkkbL0rhV4eaF4HJKNVZkHpgFHez3zOhuL9Q7j8vVDEBBC665vBRy8YCwo8CrVOgUKS1ZLFYQdaTBXMzZXQZvq_6ag7zdFOmx602Eee95VenMwKjrh_T94sm98-4aUa5RC_gz3W5oYG7Lj3agMCe0zjva48VNIjHMQ=w885-h884-s-no-gm?authuser=0" alt="avarat image">
                        </div>
                        <div class="text-center">
                          <a href="javascript:void(0)" class="text-dark font-semibold hover:text-primary text-[1.25rem] transition-colors duration-200 ease-in-out">Hou Bunleng</a>
                          <span class="block font-medium text-muted">Telecom & Networking</span>
                        </div>
                      </div>
                      
                     
                    </div>
              
            </div>
          </div>
    
    </div>
  </div>

  <!--V-LIVE-->
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
      </div><br>
      
      <div class="responsive-iframe">
        <iframe src="https://drive.google.com/file/d/1wupfO6ewbE1f8R1ThJT12cJAAz-UBfTm/preview" width="640" height="480" allow="autoplay"></iframe>
      </div><br>

        <h1 class=" text-3xl md:text-3xl xl:text-4xl text-center  ">
          Skills
        </h1>

        <span class="inline-grid grid-cols-3 gap-1 items-center">
          <span><img class="skill_img" src="https://1000logos.net/wp-content/uploads/2020/06/Illustrator-Logo.png"></span>        
          <span><img class="skill_img" src="https://logos-world.net/wp-content/uploads/2020/11/Adobe-Photoshop-Logo.png"></span>        
          <span><img class="skill_img" src="https://www.edigitalagency.com.au/wp-content/uploads/Canva-logo-png-circle-full-colour-white-font.png"></span>   
          
         </span>
        </div>
  </div>

   <!-- Video CADT -->
   <div v-else-if="id===8">
    <div class="container">
        <h1 class=" text-3xl md:text-3xl xl:text-4xl text-center sm:text-left">
          Video <a class="link" href="https://web.facebook.com/100034589164620/videos/569704218518665/?_rdc=1&_rdr">Promote CADT</a> 
        </h1>
        <p class="text-left "> </p>
        <br>

      
      <div>
        <video width="560" controls>
          <source src="..\assets\video\Done.mp4" type="video/mp4">
          Your browser does not support HTML video.
        </video>
      </div>
      <div class="description">
        <p>
          
        </p>
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
		:to="{ path: '/projects' }"
		class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Go back</router-link>
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

.responsive-iframe {
  position: relative;
  padding-bottom: 56.25%; /* You can adjust this percentage based on your needs */
  height: 0;
  overflow: hidden;
}

.responsive-iframe iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.skill_img{
  max-width: 100px;
  width: 100%;
  height: auto;

}
</style>
