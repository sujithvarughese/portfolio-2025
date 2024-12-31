import medscopeCoverIMG from "../assets/images/projects/medscope/cover.jpeg"
import medscopeCoverGIF from "../assets/images/projects/medscope/cover.gif"
import medscopeCoverMP4 from "../assets/images/projects/medscope/cover.mp4"
import medscopeHomeIMG from "../assets/images/projects/medscope/screenshot-home.png"
import medscopeProfileIMG from "../assets/images/projects/medscope/screenshot-profile.png"
import medscopeDrugIMG from "../assets/images/projects/medscope/screenshot-drug.png"

import bookstaxCoverIMG from "../assets/images/projects/bookstax/cover.png"
import bookstaxCoverGIF from "../assets/images/projects/bookstax/cover.gif"
import bookstaxCoverMP4 from "../assets/images/projects/bookstax/cover.mp4"
import bookstaxHomeIMG from "../assets/images/projects/bookstax/screenshot-home.png"
import bookstaxLibraryIMG from "../assets/images/projects/bookstax/screenshot-library.png"
import bookstaxDiscoverIMG from "../assets/images/projects/bookstax/screenshot-discover.png"

import simplerFitnessCoverIMG from "../assets/images/projects/simpler-fitness/cover.png"
import simplerFitnessCoverGIF from "../assets/images/projects/simpler-fitness/cover.gif"
import simplerFitnessCoverMP4 from "../assets/images/projects/simpler-fitness/cover.mp4"
import fitnessBrowseIMG from "../assets/images/projects/simpler-fitness/browse.png"
import fitnessSearchIMG from "../assets/images/projects/simpler-fitness/search.png"
import fitnessInstructionsIMG from "../assets/images/projects/simpler-fitness/instructions.png"

import realtyCoverIMG from "../assets/images/projects/realty-solutions/cover.png"
import realtyCoverGIF from "../assets/images/projects/realty-solutions/cover.gif"
import realtyCoverMP4 from "../assets/images/projects/realty-solutions/cover.mp4"
//import fmrIMG from "../assets/images/projects/realty-solutions/fmr.png"
//import messagesIMG from "../assets/images/projects/realty-solutions/messages.png"
//import receiptsIMG from "../assets/images/projects/realty-solutions/receipts.png"
//import mobileFinancesIMG from "../assets/images/projects/realty-solutions/mobile-finances.png"
//import searchIMG from "../assets/images/projects/realty-solutions/search.png"

import fmrIMG from "../assets/images/projects/realty-solutions/lw-fmr.png"
import messagesIMG from "../assets/images/projects/realty-solutions/lw-messages.png"
import galleryModeIMG from "../assets/images/projects/realty-solutions/lw-gallery.png"
import listModeIMG from "../assets/images/projects/realty-solutions/lw-listmode.png"
import dashboardIMG from "../assets/images/projects/realty-solutions/lw-dashboard.png"


import onTheBooksCoverIMG from "../assets/images/projects/on-the-books/cover.jpeg"
import onTheBooksCoverGIF from "../assets/images/projects/on-the-books/cover.gif"
import onTheBooksCoverMP4 from "../assets/images/projects/on-the-books/cover.mp4"
import bookDiscoverIMG from "../assets/images/projects/on-the-books/discover.png"
import notebookIMG from "../assets/images/projects/on-the-books/notebook.png"
import bookPreviewIMG from "../assets/images/projects/on-the-books/preview.png"
import bookSearchIMG from "../assets/images/projects/on-the-books/search.png"

import blackjackCoverIMG from "../assets/images/projects/blackjack/cover.jpeg"
import blackjackCoverGIF from "../assets/images/projects/blackjack/cover.gif"
import blackjackCoverMP4 from "../assets/images/projects/blackjack/cover.mp4"
import blackjackMobileDoubleIMG from "../assets/images/projects/blackjack/mobile-double.png"
import blackjackPlayerWinIMG from "../assets/images/projects/blackjack/player-win.png"
import blackjackMobileIMG from "../assets/images/projects/blackjack/bj-mobile2.png"
import blackjackDesktopIMG from "../assets/images/projects/blackjack/bj-desktop.png"

import rsDesktop from "../assets/images/projects/realty-solutions/home-desktop.png"
import rsMobile from "../assets/images/projects/realty-solutions/home-mobile.png"
import otbDesktop from "../assets/images/projects/on-the-books/on-the-books-desktop.png"
import otbMobile from "../assets/images/projects/on-the-books/on-the-books-mobile.png"
import bjDesktop from "../assets/images/projects/blackjack/bj-desktop.png"
import bjMobile from "../assets/images/projects/blackjack/bj-mobile.png"

export const projects = [
	{
		title: "LeaseWise",
		coverImage: realtyCoverIMG,
		coverVideo: realtyCoverMP4,
		coverGif: realtyCoverGIF,
		heading: "Real estate app to help you manage finances. APIs to search nationwide housing listings and market rental rates, along with a full-featured messaging client.",
		description: "Through my experience in property management, I realized the lack of an efficient system for managing payments and handling tenant-owner communication.\n\nWith LeaseWise, you can calculate your profits/losses, view recent and upcoming payments, and get nationwide listings and rental rates in real time.",
		captions: [
			"Uses React Router, Redux Toolkit, reducers, and Context API for navigation and state management.",
			"Separate user roles for tenants and managers authenticated using JSON web tokens securely attached to signed HTTP cookies.",
			"Full MLS listing search and fair market rental rates using APIs from HUD.gov API and Realty-in-US.",
			"Data securely stored and retrieved using MongoDS with mongoose and ExpressJS."
		],
		images : [dashboardIMG, galleryModeIMG, messagesIMG, listModeIMG, fmrIMG],
		desktop: rsDesktop,
		mobile: rsMobile,
		link: 'https://lease-wise.com',
		github: 'https://github.com/sujithvarughese/leasewise-api',
		tech: ["JavaScript", "NodeJS", "React", "MongoDB", "Styled Components", "HTML", "CSS"],
		featured: true,
		isMobile: false,
		width: "50%"
	},
	{
		title: "Simpler Fitness",
		coverImage: simplerFitnessCoverIMG,
		coverVideo: simplerFitnessCoverMP4,
		coverGif: simplerFitnessCoverGIF,
		heading: "This AI-powered mobile exercise app uses OpenAI to creates detailed customized routines based on your profile and your available equipment.",
		description: "Get detailed information on thousands of workouts and use artificial intelligence to create personalized workouts, whether you're working out from home or the gym.",
		captions: [
			"Uses React Router, reducers, and Context API for navigation and state management.",
			"Uses OpenAI chat completion API which creates custom prompts based on your personal information.",
			"Data returned from OpenAI in JSON format , which is then used to query workout details from Mongo Database.",
			"Workouts are efficiently loaded: Front end utilizes infinite-type scrolling which fetches paginated results as user scrolls."
		],
		images: [fitnessBrowseIMG, fitnessSearchIMG, fitnessInstructionsIMG],
		link: 'https://simpler-fitness.com',
		github: 'https://github.com/sujithvarughese/simple-fitness',
		tech: ["JavaScript", "OpenAI", "NodeJS", "React", "MongoDB", "ChakraUI", "HTML", "CSS"],
		featured: true,
		isMobile: false,
		width: "20%"
	},
	{
		title: "Beat Blackjack",
		coverImage: blackjackCoverIMG,
		coverVideo: blackjackCoverMP4,
		coverGif: blackjackCoverGIF,
		heading: "Learn perfect strategy with hints and live feedback after every move, along with real-time ROI calculations.",
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
		tech: ["JavaScript", "React", "ChakraUI", "HTML", "CSS"],
		featured: false,
		isMobile: false,
		width: "40%"
	},
	{
		title: "MedScope (Mobile App)",
		coverImage: medscopeCoverIMG,
		coverVideo: medscopeCoverMP4,
		coverGif: medscopeCoverGIF,
		heading: "Tired of getting medical advice from the resident reddit doctor? Just plug in your symptoms and and basic info, and AI will lay out your best treatment options.",
		description: "Enter up to five symptoms, along with your age and sex. With the help of AI, you will get several options of reliable treatment, sorted in order of effectiveness.\n\nAPI from DrugBank to further improve accuracy and detail, along with added features such as drug interactions. ",
		captions: [
			"Built with React Native, along with Expo for App Store publishing",
			"Search through drug list with autocompletion using National Institute of Health's RX-Terms API.",
			"Open AI chat completion API uses custom prompts based on user's age, sex, and symptoms to return drug information, interactions, health tips, and latest health news.",
		],
		images: [medscopeHomeIMG, medscopeDrugIMG, medscopeProfileIMG],
		link: 'https://medscope.pages.dev/',
		github: 'https://github.com/sujithvarughese/medscope',
		tech: ["JavaScript", "OpenAI", "React Native", "Expo", "NodeJS", "Firebase", "HTML", "CSS"],
		featured: false,
		isMobile: true,
		width: "50%"
	},
	{
		title: "BookStax (Mobile App)",
		coverImage: bookstaxCoverIMG,
		coverVideo: bookstaxCoverMP4,
		coverGif: bookstaxCoverGIF,
		heading: "A reading app to keep track of your past and current books, while helping you discover new books using the New York Times Best Sellers API.",
		description: "While most current reading apps are simply online stores to buy e-books, this app is geared toward organization and efficient note-taking, while still having the ability to discover and purchase books through Apple and Amazon.",
		captions: [
			"Integration with New York Times Best Sellers API and OpenLibrary's search API",
			"Nested navigators with several stacks and tabs using react-native-navigation.",
			"Google Firebase to manage and log in users."
		],
		images: [bookstaxHomeIMG, bookstaxLibraryIMG, bookstaxDiscoverIMG],
		link: 'https://bookstax.pages.dev/',
		github: 'https://github.com/sujithvarughese/bookstax',
		tech: ["JavaScript", "OpenAI", "React Native", "Expo", "NodeJS", "Firebase", "HTML", "CSS"],
		featured: false,
		isMobile: true,
		width: "20%"
	},
	{
		title: "On the Books",
		coverImage: onTheBooksCoverIMG,
		coverVideo: onTheBooksCoverMP4,
		coverGif: onTheBooksCoverGIF,
		heading: "The original reading application built early in my development journey. This web app is designed to help you organize, discover new books, and take notes.",
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
		tech: ["JavaScript", "NodeJS", "React", "MongoDB", "Styled Components", "HTML", "CSS"],
		featured: false,
		isMobile: false,
		width: "20%"
	},

]

