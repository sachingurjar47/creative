import React from "react";
import logo from "../utils/logo.svg";
import downarrow from "../utils/downarrow.svg";
import discordLogo from "../utils/discordLogo.svg";
import "./NavBar.css";

const NavBar = () => {
	return (
		<div className='nav-container'>
			<nav className='navbar-container'>
				<div className='logo-container'>
					<img src={logo} alt='logo' />
					<div>CreativeProxies</div>
				</div>
				<div>
					<ul>
						<li>Pricing</li>
						<li>
							Explore Tools <img src={downarrow} alt='downarrow' />
						</li>
						<li>
							Resources <img src={downarrow} alt='downarrow' />
						</li>
						<li>FAQs</li>
						<li>Blogs</li>
					</ul>
				</div>
				<div className='login-container'>
					<button>
						<img
							src={discordLogo}
							alt='downarrow'
							style={{
								height: "16px",
								alignItems: "center",
								marginBottom: "-3px",
							}}
						/>{" "}
						Join Discord
					</button>
					<button>Log in</button>
				</div>
				<button className='get-started-button'>Get Started</button>
			</nav>
		</div>
	);
};

export default NavBar;
