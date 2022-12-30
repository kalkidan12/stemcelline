import React from "react";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Profile from "../components/DRProfile/Profile";
import Footer from "../components/Footer/Footer";
import NavHeader from "../components/Header/NavHeader";
import Product from "../components/Product/Product";
import Services from "../components/Services/Services";
import Testimonial from "../components/Testimonials/Testimonial";
const HomePage = () => {
	return (
		<>
			<NavHeader />
			<div className="home w-screen"></div>
			<About />
			<div>
				<Services />
			</div>
			<div>
				<Product />
			</div>
			<div>
				<Testimonial />
			</div>
			<div>
				<Profile />
			</div>
			<div>
				<Contact />
			</div>
			<div>
				<Footer />
			</div>
		</>
	);
};

export default HomePage;
