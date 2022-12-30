import React from "react";
import prodImage from "../../assets/images/product1.jpg";
import { BiDownArrowCircle } from "react-icons/bi";

const Product = () => {
	return (
		<div className="container my-20 px-6 mx-auto">
			<section className="mb-32 text-gray-800 text-center">
				<h2 className="flex justify-center text-center text-lime-500 mb-12 animate-bounce">
					<BiDownArrowCircle size={100} />
				</h2>

				<div className="grid md:grid-cols-2 gap-x-6 lg:gap-x-12">
					<div className="flex justify-center">
						<div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
							<img
								className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
								src={prodImage}
								alt=""
							/>
							<div className="p-6 flex flex-col justify-start">
								<h5 class="text-lime-500 text-xl font-medium mb-2">
									STEMCELLINE VIAL - WJ- EXO
								</h5>
								<p className="text-slate-900 text-lg text-left mb-4">
									One of the subpopulations of EVs is referred to as "exosomes."
									Apoptotic bodies and microvesicles/shedding particles are the
									other two subpopulations (both larger than 100 nm). Exosomes
									are created when late endosomes, or so-called multivesicular
									structures, sprout intraluminal vesicles (ILVs) in their
									luminal region (MVBs).
								</p>
							</div>
						</div>
					</div>
					<div className="flex justify-center">
						<div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
							<img
								className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
								src={prodImage}
								alt=""
							/>
							<div className="p-6 flex flex-col justify-start">
								<h5 class="text-lime-500 text-xl font-medium mb-2">
									STEMCELLINE VIAL - UC XENO - FREE MSCs
								</h5>
								<p className="text-slate-900 text-lg text-left mb-4">
									The majority of MSC applications include the therapy of
									immune- and inflammation-mediated disorders as well as tissue
									degradation, with MSCs showing significant promise for the
									treatment of incurable diseases.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Product;
