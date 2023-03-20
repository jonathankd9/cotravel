import React, { useState } from "react";
import "./App.css";
import Features from "./components/Features";
import logo from "./assets/logo.png";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

// const Menu = () => {
// 	<>
// 		<p>Destinations</p>
// 		<p>Members</p>
// 		<p>About us</p>
// 		<p>Testimonials</p>
// 		<p>Gallery</p>
// 	</>;
// };

const App = () => {
	const [toggleMenu, setToggleMenu] = useState(false);
	return (
		<div className="cotravel">
			<div className="cotravel__navbar">
				<div className="cotravel__navbar-logo">
					<img src={logo} alt="logo" />
				</div>

				<div className="cotravel__navbar-button">
					<p>Sign in</p>
				</div>

				<div className="cotravel__navbar-links">
					<p>Destinations</p>
					<p>Members</p>
					<p>About us</p>
					<p>Testimonials</p>
					<p>Gallery</p>
				</div>
				<div className="cotravel__navbar-menu">
					{toggleMenu ? (
						<RiCloseLine
							color="#fff"
							size={30}
							onClick={() => setToggleMenu(false)}
						/>
					) : (
						<RiMenu3Line
							color="#fff"
							size={30}
							onClick={() => setToggleMenu(true)}
						/>
					)}
					{toggleMenu && (
						<div className="cotravel__navbar-menu_container scale-up-center">
							<div className="cotravel__navbar-menu_container-links">
								<p>Destinations</p>
								<p>Members</p>
								<p>About us</p>
								<p>Testimonials</p>
								<p>Gallery</p>
							</div>
						</div>
					)}
				</div>
			</div>

			<div className="cotravel__midsection">
				<h1>
					Explore{" "}
					<span style={{ color: "#DDDC86" }}>the world with exciting </span>
					people
				</h1>
				<p>We help people to find ideal company for the joint trip</p>
			</div>

			<div className="cotravel__footer">
				<div className="cotravel__footer-button">
					<button>Start to explore</button>
				</div>

				<div className="cotravel__footer-features">
					<Features
						number="01"
						tag="Choose place, activity and time"
						text="Everyone can choose a root and activity according to his taste and possibilities."
					/>
					<Features
						number="02"
						tag="Find people who have the same travel plans"
						text="You can find people with the same interests, who know the routes you've never traveled."
					/>
					<Features
						number="03"
						tag="Start chat and offer to go on a joint advennure"
						text="Discuss the details of your trip and have a great time! You might find a great friend for life."
					/>
				</div>
			</div>
		</div>
	);
};

export default App;
