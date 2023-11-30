// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [
	{
		id: 5,
		title: 'Volunteer as Trainer of KHoding Hero',
		category: 'Volunteer',
		img: require('@/assets/images/SOBEN-HERO.jpg'),
	},
	{
		id: 1,
		title: 'Volunteer as Trainer of Digital literacy',
		category: 'Volunteer',
		img: require('@/assets/images/digital_literacy.jpg'),
	},
	{
		id: 2,
		title: 'Logo design',
		category: 'Graphic Design',
		img: require('@/assets/images/v-live.png'),
	},
	{
		id: 3,
		title: 'Java CRUD app',
		category: 'Application',
		img: require('@/assets/images/java_crud.png'),
	},
	{
		id: 4,
		title: 'Digital literacy workshop',
		category: 'Video Editing',
		img: require('@/assets/images/video.png'),
	},
	{
		id: 6,
		title: 'E-commerce Site ',
		category: 'Application',
		img: require('@/assets/images/default.png'),
	},
	
	
];

export default projects;
