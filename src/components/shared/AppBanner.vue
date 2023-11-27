<script>
import feather from 'feather-icons';

export default {
  name: 'Home',
  data: () => {
    return {
      theme: '',
    };
  },
  created() {
    this.theme = localStorage.getItem('theme') || 'light';
  },
  mounted() {
    feather.replace();
    this.theme = localStorage.getItem('theme') || 'light';
  },
  updated() {
    feather.replace();
  },
  methods: {},
};
</script>

<template>
  <section class="flex flex-col sm:justify-between items-center sm:flex-row mt-12 sm:mt-10">
    <!-- Banner left contents -->
    <div id="box" class="w-full  md:w-2/3 text-left  float-left">
      <div id="content" >
        <img v-if="theme === 'light'" src="@/assets/images/profile1.jpg" alt="profile" />
        <img v-else src="@/assets/images/profile1.jpg" alt="profile" />
      </div>
    </div>

    <!-- Banner right illustration -->
    <div class="w-full md:w-1/2 text-right">
      <h1 class="font-general-semibold text-3xl md:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light uppercase">
        Hi, I am Angtry
      </h1>
      <p class="font-general-medium mt-2 text-lg sm:text-xl xl:text-2xl text-center sm:text-left leading-none text-gray-400">
        Bachelor of Digital Business at Cambodia Academy of Digital Technology
        <a href="https://www.cadt.edu.kh/">(CADT)</a>
      </p>
      <div class="flex justify-center sm:block">
        <a
          download="Angtry_CV.pdf"
          href="/files/Angtry_CV.pdf"
          class="flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
          aria-label="Download Resume"
        >
          <i data-feather="arrow-down-circle" class="ml-0 sm:ml-1 mr-2 sm:mr-3 w-5 sm:w-6 duration-100"></i>
          <span class="text-sm sm:text-lg font-general-medium duration-100">Download CV</span>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
#box {
  position: relative;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  overflow: hidden;
}

#box::before {
  position: absolute;
  content: '';
  inset: -10px 100px;
  background: linear-gradient(315deg, #00ccff, #d400d4);
  transition: 0.5s;
  animation: animate 4s linear infinite;
}

#box:hover::before {
  inset: -10px 0px;
}

@keyframes animate {
  0% {
    transform: rotate(0deg);
  }
  0% {
    transform: rotate(360deg);
  }
}

#box::after {
  position: absolute;
  content: '';
  inset: 6px;
  background: #162052;
  border-radius: 50%;
  z-index: 1;
}

#content {
  position: absolute;
  inset: 4px;
  z-index: 3;
  border-radius: 50%;
  overflow: hidden;
}

#content.img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: 0.5s;
  pointer-events: none;
}
</style>
