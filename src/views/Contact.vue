<script>
import feather from 'feather-icons';
import ContactForm from '@/components/contact/ContactForm.vue';
import ContactDetails from '@/components/contact/ContactDetails.vue';

export default {
	components: {
		ContactForm,
		ContactDetails,
	},
	data: () => {
		return {
			contacts: [
				{
					id: 1,
					name: 'Sangkat Prek Leap, Khan Chroy Changva, Phnom Penh',
					icon: 'map-pin',
					url:'',
				},
				{
					id: 2,
					name: 'angtrychhea@gmail.com',
					icon: 'mail',
					url:'',
				},
				{
					id: 3,
					name: '093 36 90 97 ',
					icon: 'phone',
					url:'',
				},
			],
		};
	},
	mounted() {
		feather.replace();
	},
	updated() {
		feather.replace();
	},
	methods: {},
};
</script>

<template>
	<div
		class="container mx-auto flex flex-col-reverse md:flex-row py-5 md:py-10 md:mt-10"
	>
		<!-- Contact form -->
		<ContactForm />

		<!-- Contact details -->
		<ContactDetails :contacts="contacts" />
	</div>
</template>
