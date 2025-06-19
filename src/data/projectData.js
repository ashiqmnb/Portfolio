import petfeast1 from "../assets/project/petfeast/petfeast1.png"
import petfeast2 from "../assets/project/petfeast/petfeast2.png"
import petfeast3 from "../assets/project/petfeast/petfeast3.png"
import petfeast4 from "../assets/project/petfeast/petfeast4.png"

import plotlink1 from "../assets/project/plotlink/plotlink1.png"
import plotlink2 from "../assets/project/plotlink/plotlink2.png"
import plotlink3 from "../assets/project/plotlink/plotlink3.png"
import plotlink4 from "../assets/project/plotlink/plotlink4.png"
import plotlink5 from "../assets/project/plotlink/plotlink5.png"
import plotlink6 from "../assets/project/plotlink/plotlink6.png"
import plotlink7 from "../assets/project/plotlink/plotlink7.png"

import parkease1 from "../assets/project/parkease/parkease1.png"
import parkease2 from "../assets/project/parkease/parkease2.png"
import parkease3 from "../assets/project/parkease/parkease3.png"
import parkease4 from "../assets/project/parkease/parkease4.png"
import parkease5 from "../assets/project/parkease/parkease5.png"
import parkease6 from "../assets/project/parkease/parkease6.png"



export const projects = [
    {
        name: "PetFeast",
        title: "Full Stack E-Commerce WebApp With Admin Panel",
        duration: "Nov 2024 - Dec 2024",
        images: [petfeast1, petfeast2, petfeast3, petfeast4],
        stack: "JavaScript, Reactjs, Redux, Tailwind CSS, JWT, ASP.NET Core, Entity Framework, SQL Server, Razorpay",
        description: "Developed a fully functional e-commerce web application with secure user authentication, dynamic product listings, and integrated payment processing. Included a robust admin panel with role-based access for super admin and local admins to manage users, products, and orders efficiently. Focused on performance optimization, security, and a responsive UI for a seamless user experience."
    },
    {
        name: "PlotLink",
        title: "Real Estate Listing Platform",
        duration: "Jan 2025 - Feb 2025",
        images: [plotlink1, plotlink2, plotlink3, plotlink4, plotlink5, plotlink6, plotlink7],
        stack: "React.js, TypeScript, React Query, Material UI, ASP.NET Core, Entity Framework, PostgreSQL, JWT, SignalR",
        description: "PlotLink is a modern real estate listing platform designed to connect property buyers with agents through a seamless and interactive interface. The frontend was developed using React.js, TypeScript, and Material UI to deliver a responsive and user-friendly experience. The application features an advanced property search system with filtering options and map integration to help users easily discover listings that match their preferences. On the backend, ASP.NET Core and Entity Framework were used to build secure and scalable APIs, while PostgreSQL served as the database. Real-time communication between users and agents was made possible through SignalR, significantly improving engagement and reducing response delays. A role-based authentication system was implemented using JWT to manage access for users, agents, and admins securely. Additionally, automated notifications were integrated to alert users of updates and inquiry responses, increasing lead conversion and user retention. The platform was performance-optimized using LINQ for efficient database querying and fast load times."
    },
    {
        name: "ParkEase",
        title: "Semi Automated Parking Management System",
        duration: "March 2025 - May 2025",
        images: [parkease1, parkease2 ,parkease3, parkease4, parkease5, parkease6],
        stack: "React.js, TypeScript, Material UI, ASP.NET Core, Entity Framework, Razorpay, RabbitMQ, PostgreSQL",
        description: "ParkEase is a scalable smart parking management system designed to streamline the parking experience for users and enable comprehensive control for company and super admins. The application features a multi-role system, allowing users to reserve slots, company admins to manage subscriptions and slot statuses, and super admins to oversee platform-wide operations. Built with a microservices architecture, each module was independently developed and deployed to improve maintainability and scalability. A background worker was implemented to automatically verify the validity of parking subscriptions, ensuring real-time access control for over 100 users. The backend follows the CQRS pattern within a Clean Architecture approach, promoting modularity and ease of testing while simplifying code management. A coin-based wallet system was integrated with Razorpay to facilitate user payments, processing over 150 successful transactions during the project phase. On the frontend, responsive interfaces were developed using React.js and Material UI, optimized for mobile use and achieving a 35% improvement in mobile responsiveness. Data consistency and transactional integrity were ensured using Entity Framework and PostgreSQL across all three core services."
    },
]