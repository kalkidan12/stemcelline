import React from "react";
import drImage from "../../assets/images/drimage.jpg";
const Profile = () => {
	return (
		<div className="container my-24 px-6 mx-auto">
			<section className="mb-32 text-center">
				<div className="grid md:grid-cols-2">
					<div className="mb-12 sm:mx-auto lg:ml-10 md:mb-0">
						<img src={drImage} class="object-fill rounded-lg" />
					</div>
					<div className="sm:ml-5 mb-12 md:mb-0">
						<h3 className="text-left text-xl pt-4">
							Our stem cell vials are made from the highest quality materials
							and are backed by our money-back guarantee. We guarantee that our
							stem cell vials will provide you with the best possible care and
							results.
						</h3>
						<h1 className="text-left text-lime-500 text-3xl pt-4">
							DR.SHOUVIK PINE, MEDICAL DIRECTOR
						</h1>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Profile;
