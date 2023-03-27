import React from "react";
import "./Footer.css";
import logo from "../utils/logo.svg";
import discordLogo from "../utils/discordLogo.svg";

const Footer = () => {
	return (
		<div className='footer-container'>
			<div className='jod'>
				<div className='logo-container'>
					<img src={logo} alt='logo' />
					<div>CreativeProxies</div>
				</div>
				<p className='copyright'>
					Copyright © 2023 Creative Proxies.
					<br />
					All rights reserved.
				</p>
				<button className='discord-button'>
					<img
						src={discordLogo}
						alt='downarrow'
						style={{
							height: "16px",
							alignItems: "center",
							marginBottom: "-3px",
						}}
					/>{" "}
					Join Our Discord
				</button>
			</div>
			<div className='company-info-container'>
				<div className='explore'>
					<h2>Explore</h2>
					<ul>
						<li>Proxy Location Checker</li>
						<li>IPv6 Comptability</li>
						<li>Blogs</li>
					</ul>
				</div>
				<div className='resources'>
					<h2>Resources</h2>
					<ul>
						<li>FAQs</li>
						<li>Branding</li>
						<li>Network Information</li>
						<li>Imprint</li>
					</ul>
				</div>
				<div className='support'>
					<h2>Support</h2>
					<ul>
						<li>Status</li>
						<li>Terms of Service</li>
						<li>Privacy Policy</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Footer;
