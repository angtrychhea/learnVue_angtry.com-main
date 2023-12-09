<script>
export default {
	setup() {
		return {
			bios: [
				{
					id: 1,
					bio:
					'Chhea Angtry'
				},
				{
					id: 2,
					bio:
						'My name is Angtry. I am a 3rd year of Digital Business specialized E-commerce Univertisty student at CADT. I am a web development learner who is excited about building websites and online experiences. I love taking on challenges and making my own projects. Throughout my academic journey, I have developed a strong foundation in Database management, web development and technologies. I am fluently using computer M.S office and I have experience building simple web application ( E-commerce site). ',
				},
			],
		};
	},
};
</script>

<template>
	<div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
		<!-- About profile image -->
		<div class="w-full sm:w-1/4 mb-7 sm:mb-0">
			<img
				src="@/assets/images/profile1.jpg"
				class="rounded-xl w-96"
				alt=""
			/>
		</div>

		<!-- About details -->
		<div class="w-full sm:w-3/4 text-left">
			<p
				v-for="bio in bios"
				:key="bio.id"
				class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg"
			>
				{{ bio.bio }}
			</p>
			<h2> Skills:</h2>
			
		</div>

		

	</div>

	
</template>
