import React from "react";
import "./Pricing.css";
import rightarrow from "../utils/rightarrow.svg";
import crown from "../utils/feature-svg/crown.svg";

const Pricing = () => {
	return (
		<div>
			<div className='price-heading'>
				<div>
					You choose, we <span style={{ color: "#077BFF" }}>Deliver!</span>
				</div>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus
					augue sit amet mollis molestie.
				</p>
			</div>
			<div className='price-container'>
				<div className='ipv4'>
					<div className='ipv'>
						<div>
							<div className='v4'>v4</div>
							<h3>IPvP Proxies</h3>
							<p className='staticPrice'>Static/Rotating</p>
						</div>
						<div className='price'>
							<p>FROM</p>
							<p>
								<span>$4.75</span>/day
							</p>
							<p>OR</p>
							<p>
								<span>$116.75</span>/mo
							</p>
						</div>
					</div>
					<hr style={{ border: "1px solid #D9D8D6", width: "100%" }} />
					<div>
						<div className='staticPrice'>Plan Includes :</div>
						<div className='plan-includes'>
							<div>
								<span>&#10003;</span> 100 Threads
							</div>
							<div>
								<span>&#10003;</span> Dedicated IP Pool
							</div>
							<div>
								<span>&#10003;</span> Residential Proxy
							</div>
							<div>
								<span>&#10003;</span> Unlimited Bandwidth
							</div>
							<div>
								<span>&#10003;</span> Worldwide Locations
							</div>
							<div>
								<span>&#10003;</span> 40 GBps
							</div>
						</div>
					</div>
					<hr style={{ border: "1px solid #D9D8D6", width: "100%" }} />
					<div>
						<button className='price-button'>
							<p>View Pricing</p>
							<img src={rightarrow} alt='price' />
						</button>
					</div>
				</div>

				<div id='ipv6' className='ipv4'>
					<div className='ipv'>
						<div>
							<div
								className='v4'
								style={{
									background:
										"linear-gradient(135deg, #25CD08 0%, #09B32B 100%)",
								}}
							>
								v6
							</div>
							<h3>IPvP Proxies</h3>
							<p className='staticPrice'>Static/Rotating</p>
						</div>
						<div className='price'>
							<p>FROM</p>
							<p>
								<span style={{ color: "#16D113" }}>$4.75</span>/day
							</p>
							<p>OR</p>
							<p>
								<span style={{ color: "#16D113" }}>$116.75</span>/mo
							</p>
						</div>
					</div>
					<hr style={{ border: "1px solid #D9D8D6", width: "100%" }} />
					<div>
						<div className='staticPrice'>Plan Includes :</div>
						<div className='plan-includes'>
							<div>
								<span>&#10003;</span> 100 Threads
							</div>
							<div>
								<span>&#10003;</span> Dedicated IP Pool
							</div>
							<div>
								<span>&#10003;</span> Residential Proxy
							</div>
							<div>
								<span>&#10003;</span> Unlimited Bandwidth
							</div>
							<div>
								<span>&#10003;</span> Worldwide Locations
							</div>
							<div>
								<span style={{ color: "#16D113" }}>&#10003;</span> Dedicated
								Subnets
							</div>
							<div>
								<span style={{ color: "#16D113" }}>&#10003;</span> 1 Octilion
								IPS
							</div>
							<div>
								<span style={{ color: "#16D113" }}>&#10003;</span> Septiltion
								per Location
							</div>
						</div>
					</div>
					<hr style={{ border: "1px solid #D9D8D6", width: "100%" }} />
					<div>
						<button
							style={{
								background: "#2CE617",
								borderBottom: "5px solid #0EB726",
							}}
							className='price-button'
						>
							<p>View Pricing</p>
							<img src={rightarrow} alt='price' />
						</button>
					</div>
				</div>
			</div>
			<div id='become-a-reseller'>
				<div>
					<div>
						<img src={crown} alt='crown' />
					</div>
					<h3>Become a Reseller</h3>
					<p className='staticPrice'>200+ Happy Resellers</p>
				</div>
				<div>
					<div className='staticPrice'>Plan Includes :</div>
					<div id='plan-includes' className='plan-includes'>
						<div>
							<span>&#10003;</span> Whitelabel IP Pool
						</div>
						<div>
							<span>&#10003;</span> Whitelabel Subnets
						</div>
						<div>
							<span>&#10003;</span> Residential Proxy
						</div>
						<div>
							<span>&#10003;</span> Custom Bandwidth
						</div>
						<div>
							<span>&#10003;</span> Priority Support
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Pricing;
