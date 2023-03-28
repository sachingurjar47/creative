import React from "react";
import "./Feature.css";
import people from "../utils/feature-svg/People.svg";
import devices from "../utils/feature-svg/Devices.svg";
import flash from "../utils/feature-svg/Flash.svg";
import global from "../utils/feature-svg/Global.svg";
import messages from "../utils/feature-svg/Messages.svg";
import refreshsqure from "../utils/feature-svg/RefreshSquare.svg";
import shield from "../utils/feature-svg/Shield.svg";
import trade from "../utils/feature-svg/Trade.svg";

const Feature = () => {
	return (
		<div className='feature-container'>
			<div className='feature'>
				<div className='feature-heading'>
					<div>Why we are the Best Proxy Providers</div>
					<div>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus
						augue sit amet mollis molestie.
					</div>
				</div>
				<div className='all-feature'>
					<div>
						<img src={people} alt='people' />
						<h3>Feature No 1</h3>
						<div>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
							ultricies interdum eros non suscipit.
						</div>
					</div>
					<div>
						<img src={refreshsqure} alt='refreshsqure' />
						<h3>Feature No 1</h3>
						<div>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
							ultricies interdum eros non suscipit.
						</div>
					</div>
					<div>
						<img src={devices} alt='devices' />
						<h3>Feature No 1</h3>
						<div>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
							ultricies interdum eros non suscipit.
						</div>
					</div>
					<div>
						<img src={messages} alt='messages' />
						<h3>Feature No 1</h3>
						<div>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
							ultricies interdum eros non suscipit.
						</div>
					</div>
					<div>
						<img src={global} alt='global' />
						<h3>Feature No 1</h3>
						<div>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
							ultricies interdum eros non suscipit.
						</div>
					</div>
					<div>
						<img src={shield} alt='shield' />
						<h3>Feature No 1</h3>
						<div>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
							ultricies interdum eros non suscipit.
						</div>
					</div>
					<div>
						<img src={trade} alt='trade' />
						<h3>Feature No 1</h3>
						<div>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
							ultricies interdum eros non suscipit.
						</div>
					</div>
					<div>
						<img src={flash} alt='flash' />
						<h3>Feature No 1</h3>
						<div>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
							ultricies interdum eros non suscipit.
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Feature;
