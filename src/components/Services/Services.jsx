import React from "react";
import "./style.css";
const Services = () => {
	return (
		<div className="container  mx-auto flex flex-wrap my-8">
			<h1 className="mb-2 mx-10 text-slate-900 text-left">
				Our stem cell vials are designed to provide the most effective and safe
				treatments for a range of medical conditions. Our stem cell vials offer
				a range of benefits, including:
			</h1>
			<div className="container mx-auto flex flex-wrap my-8 justify-center">
				<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
					<div className="max-w-sm rounded overflow-hidden shadow-xl cursor-pointer rounded card">
						<div className="px-4 py-5">
							{/* <i className="fa fa-cog"></i> */}
							<h1 className="text-lime-500 mb-2">IMPROVED RECOVERY TIME</h1>
							<hr />
						</div>
					</div>
					<div className="max-w-sm rounded overflow-hidden shadow-xl cursor-pointer rounded card">
						<div className="px-4 py-5">
							{/* <i className="fa fa-cog"></i> */}
							<h1 className="text-lime-500 mb-2">
								REDUCED RISK OF COMPLICATIONS
							</h1>
							<hr />
						</div>
					</div>
					<div className="max-w-sm rounded overflow-hidden shadow-xl cursor-pointer rounded card">
						<div className="px-4 py-5">
							{/* <i className="fa fa-cog"></i> */}
							<h1 className="text-lime-500 mb-2">IMPROVED QUALITY OF LIFE</h1>
							<hr />
						</div>
					</div>
					<div className="max-w-sm rounded overflow-hidden shadow-xl cursor-pointer rounded card">
						<div className="px-4 py-5">
							{/* <i className="fa fa-cog"></i> */}
							<h1 className="mb-2  text-lime-500">
								INCREASED ENERGY AND VITALITY
							</h1>
							<hr />
						</div>
					</div>
					<div className="max-w-sm rounded overflow-hidden shadow-xl cursor-pointer rounded card">
						<div className="px-4 py-5">
							{/* <i className="fa fa-cog"></i> */}
							<h1 className="mb-2 text-lime-500">FASTER HEALING TIMES</h1>
							<hr />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Services;
