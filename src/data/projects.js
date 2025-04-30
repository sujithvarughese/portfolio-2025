import medscopeCoverIMG from "../assets/images/projects/medscope/cover.png"
import medscopeCoverGIF from "../assets/images/projects/medscope/cover.gif"
import medscopeHomeIMG from "../assets/images/projects/medscope/screenshot-home.png"
import medscopeProfileIMG from "../assets/images/projects/medscope/screenshot-profile.png"
import medscopeDrugIMG from "../assets/images/projects/medscope/screenshot-drug.png"

import moduloCoverIMG from "../assets/images/projects/modulo/cover.png"
import moduloCoverGIF from "../assets/images/projects/modulo/cover.gif"
import moduloHomeIMG from "../assets/images/projects/modulo/home.png"
import moduloResultsIMG from "../assets/images/projects/modulo/results.png"
import moduloInfoIMG from "../assets/images/projects/modulo/info.png"

import bookstaxCoverIMG from "../assets/images/projects/bookstax/cover.png"
import bookstaxCoverGIF from "../assets/images/projects/bookstax/cover.gif"
import bookstaxHomeIMG from "../assets/images/projects/bookstax/screenshot-home.png"
import bookstaxLibraryIMG from "../assets/images/projects/bookstax/screenshot-library.png"
import bookstaxDiscoverIMG from "../assets/images/projects/bookstax/screenshot-discover.png"

import simplerFitnessCoverIMG from "../assets/images/projects/simpler-fitness/cover.png"
import simplerFitnessCoverGIF from "../assets/images/projects/simpler-fitness/cover.gif"
import fitnessBrowseIMG from "../assets/images/projects/simpler-fitness/browse.png"
import fitnessSearchIMG from "../assets/images/projects/simpler-fitness/search.png"
import fitnessInstructionsIMG from "../assets/images/projects/simpler-fitness/instructions.png"

import realtyCoverIMG from "../assets/images/projects/realty-solutions/cover.png"
import realtyCoverGIF from "../assets/images/projects/realty-solutions/cover.gif"
import fmrIMG from "../assets/images/projects/realty-solutions/lw-fmr.png"
import messagesIMG from "../assets/images/projects/realty-solutions/lw-messages.png"
import galleryModeIMG from "../assets/images/projects/realty-solutions/lw-gallery.png"
import listModeIMG from "../assets/images/projects/realty-solutions/lw-listmode.png"
import dashboardIMG from "../assets/images/projects/realty-solutions/lw-dashboard.png"

import onTheBooksCoverIMG from "../assets/images/projects/on-the-books/cover.jpeg"
import onTheBooksCoverGIF from "../assets/images/projects/on-the-books/cover.gif"
import bookDiscoverIMG from "../assets/images/projects/on-the-books/discover.png"
import notebookIMG from "../assets/images/projects/on-the-books/notebook.png"
import bookPreviewIMG from "../assets/images/projects/on-the-books/preview.png"
import bookSearchIMG from "../assets/images/projects/on-the-books/search.png"

import blackjackCoverIMG from "../assets/images/projects/blackjack/cover.jpeg"
import blackjackCoverGIF from "../assets/images/projects/blackjack/cover.gif"
import blackjackMobileIMG from "../assets/images/projects/blackjack/bj-mobile2.png"
import blackjackDesktopIMG from "../assets/images/projects/blackjack/bj-desktop.jpg"

import triviaCoverIMG from "../assets/images/projects/trivia/cover.jpeg"
import triviaCoverGIF from "../assets/images/projects/trivia/cover.gif"
import trivia1IMG from "../assets/images/projects/trivia/ss1.png"
import trivia2IMG from "../assets/images/projects/trivia/ss2.png"
import trivia3IMG from "../assets/images/projects/trivia/ss3.png"

import rsDesktop from "../assets/images/projects/realty-solutions/home-desktop.png"
import rsMobile from "../assets/images/projects/realty-solutions/home-mobile.png"
import otbDesktop from "../assets/images/projects/on-the-books/on-the-books-desktop.png"
import otbMobile from "../assets/images/projects/on-the-books/on-the-books-mobile.png"
import bjDesktop from "../assets/images/projects/blackjack/bj-desktop.jpg"
import bjMobile from "../assets/images/projects/blackjack/bj-mobile.png"

export const projects = [
	{
		title: "MedScope",
		coverImage: medscopeCoverIMG,
		coverGif: medscopeCoverGIF,
		heading: "A comprehensive health and medical information app that allows users to look up detailed drug and medical condition information, receive personalized health assessments, identify possible conditions based on symptoms, and calculate BMI along with other useful health metrics.",
		description: "Tired of relying on medical advice from internet strangers? Simply enter your symptoms and basic profile details, and let AI provide you with potential conditions and treatment options.",
		captions: [
			"Built in TypeScript in both React and React Native with React Router, Redux Toolkit for seamless navigation and efficient state management.",
			"Search any drug or health condition with autocompletion using National Institute of Health's RX-Terms API.",
			"Open AI chat completion API uses custom prompts based on user's age, sex, and symptoms to return drug information, interactions, health tips, and latest health news.",
		],
		images: [medscopeHomeIMG, medscopeDrugIMG, medscopeProfileIMG],
		link: 'https://medscope.app',
		github: 'https://github.com/sujithvarughese/medscope-info',
		appStore: '',
		tech: ["TypeScript", "OpenAI", "React Native", "Expo", "NodeJS", "HTML", "CSS"],
		featured: false,
		isMobile: false,
		width: "50%"
	},
	{
		title: "LeaseWise",
		coverImage: realtyCoverIMG,
		coverGif: realtyCoverGIF,
		heading: "Streamline your real estate management: Track finances, explore nationwide housing listings and rental market rates, and connect seamlessly with a built-in messaging client.",
		description: "While working in real estate, I recognized the need for a more efficient system to manage payments and facilitate tenant-owner communication.\n\nLeaseWise simplifies property management by allowing you to track profits and losses, monitor recent and upcoming payments, and access real-time nationwide listings and rental rates.",
		captions: [
			"Supports distinct user roles for tenants and managers, with secure authentication via JSON Web Tokens embedded in signed HTTP cookies.",
			"Comprehensive MLS listing search and fair market rental rates powered by APIs from HUD.gov and Realty-in-US.",
			"Secure data storage and retrieval powered by MongoDB, Mongoose, and ExpressJS."
		],
		images : [dashboardIMG, galleryModeIMG, messagesIMG, listModeIMG, fmrIMG],
		desktop: rsDesktop,
		mobile: rsMobile,
		link: 'https://lease-wise.com',
		github: 'https://github.com/sujithvarughese/leasewise-api',
		appStore: '',
		tech: ["JavaScript", "NodeJS", "React", "MongoDB", "Mantine UI", "HTML", "CSS"],
		featured: true,
		isMobile: false,
		width: "50%"
	},
	{
		title: "Modulo AI",
		coverImage: moduloCoverIMG,
		coverGif: moduloCoverGIF,
		heading: "Smart Ways to use the Remainder of your time: By analyzing open slots in your calendar, Modulo uses AI to suggest meaningful and personalized activities based on your interests.",
		description: "Modulo is a smart productivity assistant that syncs with your phone’s calendar to identify free time in your day and uses AI to suggest meaningful activities.\n\nWhether it's a quick workout, a mindfulness break, or a skill-building task, Modulo helps you make the most of every moment.",
		captions: [
			"Built in React Native using Expo that integrates with the device’s system calendar to analyze daily schedules in real time.",
			"Utilized OpenAI’s API to generate personalized, productive activity suggestions during gaps in a user’s calendar.",
			"Implemented seamless calendar syncing and intelligent time-slot detection to enhance daily planning."
		],
		images : [moduloHomeIMG, moduloResultsIMG, moduloInfoIMG],
		desktop: rsDesktop,
		mobile: rsMobile,
		link: '',
		github: 'https://github.com/sujithvarughese/modulo',
		appStore: 'https://apps.apple.com/us/app/modulo-ai/id6743953454',
		tech: ["JavaScript", "NodeJS", "React", "MongoDB", "Mantine UI", "HTML", "CSS"],
		featured: true,
		isMobile: false,
		width: "50%"
	},
	{
		title: "Simpler Fitness",
		coverImage: simplerFitnessCoverIMG,
		coverGif: simplerFitnessCoverGIF,
		heading: "Personalized AI-Powered Fitness: Custom Workout Routines Tailored to You and Your Equipment Using OpenAI.",
		description: "Explore thousands of workouts and leverage AI to create personalized routines tailored to your fitness goals, whether you're at home or in the gym.",
		captions: [
			"Uses React Router, reducers, and Context API for navigation and state management.",
			"Uses OpenAI chat completion API which creates custom prompts based on your personal information.",
			"Data returned from OpenAI in JSON format , which is then used to query workout details from Mongo Database.",
			"Workouts are efficiently loaded: Front end utilizes infinite-type scrolling which fetches paginated results as user scrolls."
		],
		images: [fitnessBrowseIMG, fitnessSearchIMG, fitnessInstructionsIMG],
		link: 'https://simpler-fitness.com',
		github: 'https://github.com/sujithvarughese/simple-fitness',
		appStore: '',
		tech: ["JavaScript", "OpenAI", "NodeJS", "React", "MongoDB", "ChakraUI", "HTML", "CSS"],
		featured: true,
		isMobile: false,
		width: "20%"
	},
	{
		title: "Trivia Night AI",
		coverImage: triviaCoverIMG,
		coverGif: triviaCoverGIF,
		heading: "Challenge Your Knowledge, while getting AI-powered explanations to learn the \"why\" behind every answer!",
		description: "Test your knowledge and challenge your friends with fun and engaging trivia questions across a variety of topics, with detailed explanations for the answers!\n\n",
		captions: [
			"Utilizes Redux Toolkit for efficient state management and score tracking.",
			"Features thousands of questions across customized categories using the Open Trivia Database.",
			"Uses OpenAI Chat Completions API to generate explanations for every answer.",
		],
		images: [trivia1IMG, trivia2IMG, trivia3IMG],
		link: 'https://ultimate-trivia.netlify.app',
		github: 'https://github.com/sujithvarughese/ultimate-trivia',
		appStore: 'https://apps.apple.com/us/app/trivia-night-ai/id6741895843',
		tech: ["TypeScript", "React", "Expo", "OpenAI", "HTML", "CSS"],
		featured: false,
		isMobile: false,
		width: "40%"
	},
	{
		title: "Beat Blackjack",
		coverImage: blackjackCoverIMG,
		coverGif: blackjackCoverGIF,
		heading: "Master your strategy with live move-by-move feedback, helpful hints, and real-time ROI calculations.",
		description: "Beat Blackjack is designed to teach blackjack strategy while having fun trying to beat the house. Use the optional hint feature at any time to get the correct book play, or choose to get live feedback after every move.\n\n",
		captions: [
			"Customizable settings- Choose number of decks, blackjack payouts, your bankroll, number of splits allowed, and more.",
			"Live stat tracker that updates every hand with the amount won or lost and calculated return on investment.",
			"Context API for global variables and reducers for global state management",
		],
		images: [blackjackMobileIMG, blackjackDesktopIMG],
		desktop: bjDesktop,
		mobile: bjMobile,
		link: 'https://beat-blackjack.com',
		github: 'https://github.com/sujithvarughese/beat-blackjack',
		appStore: '',
		tech: ["JavaScript", "React", "ChakraUI", "HTML", "CSS"],
		featured: false,
		isMobile: false,
		width: "40%"
	},
	{
		title: "BookStax (Mobile App)",
		coverImage: bookstaxCoverIMG,
		coverGif: bookstaxCoverGIF,
		heading: "Track your reading journey with ease—log past and current books while discovering new favorites through the New York Times Best Sellers API.",
		description: "While most current reading apps are simply online stores to buy e-books, this app is geared toward organization and efficient note-taking, while still having the ability to discover and purchase books through Apple and Amazon.",
		captions: [
			"Integration with New York Times Best Sellers API and OpenLibrary's search API",
			"Nested navigators with several stacks and tabs using react-native-navigation.",
			"Google Firebase to manage and log in users."
		],
		images: [bookstaxHomeIMG, bookstaxLibraryIMG, bookstaxDiscoverIMG],
		link: 'https://bookstax.pages.dev/',
		github: 'https://github.com/sujithvarughese/bookstax',
		appStore: '',
		tech: ["JavaScript", "OpenAI", "React Native", "Expo", "NodeJS", "Firebase", "HTML", "CSS"],
		featured: false,
		isMobile: true,
		width: "20%"
	},
	{
		title: "On the Books",
		coverImage: onTheBooksCoverIMG,
		coverGif: onTheBooksCoverGIF,
		heading: "A personal reading web app built early in my development journey, designed to help users organize their library, discover new titles through the OpenLibrary API, and take notes seamlessly. This project strengthened my skills in API integration, state management, and user-focused design.",
		description: "One of the first full-stack web applications I designed and created. This is the original version of the BOOKSTAX app, and performs much of the same functionality.",
		captions: [
			"OpenLibrary API integration to search books by genre and get previews and recommendations.",
			"CRUD operations in database using mongoose models while front end state is simultaneously updated and rendered.",
			"Navigation using react router with loader functions and state management with context API and reducer.",
		],
		images: [bookDiscoverIMG, notebookIMG, bookSearchIMG, bookPreviewIMG],
		desktop: otbDesktop,
		mobile: otbMobile,
		link: 'https://on-the-books.netlify.app',
		github: 'https://github.com/sujithvarughese/on-the-books',
		appStore: '',
		tech: ["JavaScript", "NodeJS", "React", "MongoDB", "Styled Components", "HTML", "CSS"],
		featured: false,
		isMobile: false,
		width: "20%"
	},

]

