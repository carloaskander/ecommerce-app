# DripLine E-commerce Platform

DripLine is a modern e-commerce platform built with Next.js, MongoDB, and Tailwind CSS. It allows customers to browse and search products, while admins can manage inventory and orders.

## Features
- Customer-facing interface for browsing products.
- Admin dashboard for managing products and orders (in progress).
- Responsive design for mobile and desktop users.
- Search bar for quick product lookup.

## Technologies Used
- **Next.js**: Framework for server-side rendering and React-based UI.
- **MongoDB**: Database for storing product and user data.
- **Tailwind CSS**: For modern and responsive UI styling.
- **Heroicons**: Icons for a clean and consistent look.

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- MongoDB database (local or cloud, e.g., MongoDB Atlas)

### Installation
1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/dripline.git

2. **Navigate to the project directory:**
    cd dripline

3. **Install dependencies:**
    npm install

4. **Add a .env.local file for environment variables:**
    MONGODB_URI=your-mongodb-uri

5. **Run the development server:**
    npm run dev

6. **Open http://localhost:3000 to view the app.**

## Project Structure
├── src
│   ├── app
│   │   ├── layout.js      # Global layout for the application
│   │   ├── page.js        # Homepage
│   ├── components
│   │   ├── navbar         # Folder for the Navbar component
│   │   │   ├── Navbar.js  # Navbar component file
│   │   │   ├── Navbar.module.css  # Optional CSS module for Navbar (if used)
│   │   ├── footer         # Folder for the Footer component
│   │   │   ├── Footer.js  # Footer component file
│   │   │   ├── Footer.module.css  # Optional CSS module for Footer (if used)
│   ├── utils              # Utility files (e.g., MongoDB connection)
│   ├── styles             # Global and component-specific styles
├── public                 # Static assets (e.g., images, fonts)
├── scripts                # Seed scripts for the database
├── .env.local             # Environment variables
├── tailwind.config.js     # Tailwind CSS configuration
├── package.json           # Project dependencies and scripts
└── README.md              # Project documentation

## Planned Features
- User authentication for login and signup.
- Shopping cart and checkout functionality.
- Admin dashboard for managing orders.

## Credits
This project was made possible by the following tools and libraries:
- [Next.js](https://nextjs.org/) - Framework for server-side rendering and React-based UI.
- [MongoDB](https://www.mongodb.com/) - Database for storing product and user data.
- [Tailwind CSS](https://tailwindcss.com/) - For modern and responsive UI styling.
- [Heroicons](https://heroicons.com/) - Icons for a clean and consistent look.

### Design Inspiration
- This project’s UI design is inspired by [Ronas IT UI/UX Team's E-commerce Website design](https://dribbble.com/shots/22402874-E-commerce-Website) on Dribbble.

Special thanks to [Fontshare](https://www.fontshare.com/) for providing the **Satoshi** font.