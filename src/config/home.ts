import type { HomeConfig } from "@/types";
import Profile from "../icons/profile.jpg";

export const homeConfig: HomeConfig = {
	avatar: Profile.src,
	name: "Sharukh Rahman",
	title: "Full Stack Developer",
	summary:
		"A full stack developer, simple problem solver, quick learner and a future game developer. Familiar with MVC patterns, Docker, Kubernetes, microservice architecture and more. Want to know more? Let’s have a chat.",
	place: "Chennai,India",
	mail: "mailto:sharukhrahman.sr@gmail.com",
	url: "https://dashdrop.app/",
	dob: "04/10/1997",
	gender: "Male",
	contacts: [
		{
			title: "LinkedIn",
			icon: "linkedin",
			url: "https://www.linkedin.com/in/sharukh-rahman-a411641a1/",
		},
		{
			title: "GitHub",
			icon: "github",
			url: "https://github.com/sharukhrahman97",
		},
	],
	works: [
		{
			title: "Full Stack Developer",
			subtitle: "Zedbyte Software Solutions",
			duration: "May 2021 - Dec 2023",
			place: "Chennai,India.",
			desc: "Responsible to design, develop, and deploy mobile applications and web servers applications, especially in Flutter, ReactJS, Node.js, Python with both SQL and NoSQL databases. Handled client meets, onboarded new developers, meet product deliveries were my goals.",
			list: [
				"Developed a high-performance room/home searching app with Rest APIs (Python-Starlette), AWS S3, MongoDB, and a Flutter/Dart mobile app. The app can handle 10k requests/min and searches over 100,000 houses in less than 100ms. The app is hosted on EC2 and available on the Google Play Store.",
				"Engineered a comment system using Node.js and MongoDB, featuring a capability to delete entire comment/blog structures through Airflow jobs.",
				"Implemented a live location tracking and monitoring tool using Redis and Python, capable of handling nearly 10k messages/second for 10K simultaneous connections.",
				"Designed and deployed a robust Airflow job, integrating with PySpark for efficient and automated extraction, transformation, and loading (ETL) of daily trip data stored in MongoDB.",
				"Collaborated on the development of a social media app with versatile post/comment structures and follow logic",
				"Led sprint reviews, code reviews, and mentored junior developers to maintain high-quality code standards,fostering a culture of excellence and continuous improvement.",
			],
		},
	],
	frontend: [
		{
			name: "Flutter",
			icon: "flutter",
			desc: "Dio, Riverpod, Bloc(sometimes), Hive & go router. Worked on ReactNative.",
		},
		{
			name: "ReactJS",
			icon: "reactjs",
			desc: "Redux, Vite, shadcn-ui, tailwind, sometimes encapsulate with MillionJS, learning angular. Worked in threeJS, TheatreJS, Hugo and Astro.",
		},
		{
			name: "ElectronJS",
			icon: "electronjs",
			desc: "Vite, electron-builder, written a tech blog to ease publishing mac app store builds.",
		},
	],
	backend: [
		{
			name: "Python 3",
			icon: "python",
			desc: "FastAPI developer, also worked in Django & starlette. Made basic ai projects involving dnn & cnn. Familiar with FFMPEG.",
		},
		{
			name: "NodeJS",
			icon: "nodejs",
			desc: "Express developer, learning bun. Typescript, PrismaORM & Jest are my goto.",
		},
		{
			name: "Spring Boot",
			icon: "spring",
			desc: "Familiar not proficient, JPA with mongodb, Lombok.",
		},
		{
			name: "MongoDB",
			icon: "mongodb",
		},
		{
			name: "PostgreSQL",
			icon: "postgresql",
		},
		{
			name: "Redis",
			icon: "redis",
			desc: "Used as a message queue for  workers.",
		},
	],
	devops: [
		{
			name: "Docker",
			icon: "docker",
			desc: "To host MinIO, Redis, ScyllaDB and use development environment to develop inside the container using volume bridge.",
		},
		{
			name: "Kubernetes",
			icon: "kubernetes",
			desc: "Used minikube to orchestrate docker containers locally and used k9s cmd utility to monitor the cluster.",
		},
	],
	personalWorks: [
		{
			title: "Apple macOS Developer Tech Blog ",
			duration: "Jan 2024",
			url: "https://dashdrop.app/blog/apple-macos-developer-guide-from-purchase-to-production/",
			desc: "Written a massively detailed tech blog for electron macOS developers which explains from purchase to production",
		},
		{
			title: "DashDrop",
			duration: "Mar 2022 - Oct 2022",
			desc: "DashDrop is your go-to high-speed data sharing solution, offering unparalleled security and blazing-fast transfer speeds.",
			url: "https://dashdrop.app/",
			list: [
				"Built server routines for CRON jobs and transactions to manage expiration and cleanup of transfers in AWS S3 and MongoDB, reducing service costs.",
				"Crafted a Desktop app with Electron.js, integrating multiple APIs and IPC calls within Redux state management.",
				"Developed a Parallel Disk Cloner for simultaneous copying of footage across multiple drives.",
				"Automated codesigning and notarizing tasks for non-Xcode MacOS apps.",
				"Deployed apps to Microsoft Partner Center, App Store platforms.",
			],
		},
	],
	education: [
		{
			title: "M.Tech - Computer Science & Engineering",
			subtitle:
				"B.S Abdur Rahman Crescent Institute of Science & Technology",
			duration: "Jun 2019 - Mar 2021",
			desc: "Thesis on comparing the decentralized consensus algorithms",
			place: "Chennai,India.",
		},
		{
			title: "B.E - Computer Science & Engineering",
			subtitle: "St. Peter’s College of Engineering and Technology",
			duration: "Aug 2015 - May 2019",
			desc: "Project on drone collision avoidance system (DCAS).",
			place: "Chennai,India.",
		},
	],
	languages: ["English (Fluent)", "Tamil (Native)"],
};
