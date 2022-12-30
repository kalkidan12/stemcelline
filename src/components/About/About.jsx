import React from "react";
import abtImg from "../../assets/images/abt-img.png";
const About = () => {
	return (
		<div className="container my-24 px-6 mx-auto">
			<section className="mb-32 text-gray-800 text-center">
				<div className="grid md:grid-cols-2 gap-x-6 lg:gap-x-12">
					<div className="mb-12 md:mb-0">
						<img src={abtImg} class="object-cover rounded-lg" />
					</div>
					<div className="mb-12 md:mb-0">
						<h1 className="font-bold text-left text-lime-500 text-3xl pb-4">
							ABOUT US
						</h1>
						<h2 className="text-left">
							We specialize in providing high-quality STEMCELL vials to
							customers all over the world. Our STEMCELL vials are made using
							the latest technology and are designed to maximize efficiency and
							reliability. We provide a wide range of vials to suit all your
							needs, from small-scale to large-scale projects. Our prices are
							competitive, and our customer service is top-notch. Whether you're
							looking for a single vial or a bulk order, we can provide you with
							the perfect solution for your STEMCELL needs.
						</h2>
					</div>
				</div>
			</section>
		</div>
	);
};

export default About;
