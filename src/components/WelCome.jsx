import React from "react";
import "./WelCome.css";
import rightarrow from "../utils/rightarrow.svg";
import star from "../utils/star.svg";
import starfill from "../utils/starfill.svg";
import square from "../utils/3square.svg";
import lock from "../utils/lock.svg";
import dollar from "../utils/dollar-square.svg";
import safe from "../utils/security-safe.svg";
const WelCome = () => {
	return (
		<div className='welcome-container'>
			<div>
				<p>WELCOME TO CREATIVE PROXIES</p>
				<h1 className="h-div">
					We are the <span>Fastest </span> and the <span>Most Reliable </span>{" "}
					Proxy Service since 2020
				</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus
					augue sit amet mollis molestie.
				</p>
			</div>
			<div className='welcome-2'>
				<button className='get-start-arrow'>
					Get Started <img src={rightarrow} alt='' />
				</button>
				<div className='rating-container'>
					<div className='rating'>
						<input type='radio' name='rating' value={1} />
						<label for={1}>
							<img src={star} alt='' />
						</label>
						<input type='radio' name='rating' value={2} />
						<label for={2}>
							<img src={star} alt='' />
						</label>
						<input type='radio' name='rating' value={3} />
						<label for={3}>
							<img src={star} alt='' />
						</label>
						<input type='radio' name='rating' value={4} />
						<label for={4}>
							<img src={star} alt='' />
						</label>
						<input type='radio' name='rating' value={5} />
						<label for={5}>
							<img id='hlaf-star' src={star} alt='' />
						</label>
					</div>
					<div className='trustpilot'>
						<p>
							Rated 4.5 on{" "}
							<img style={{ marginBottom: "-6px" }} src={starfill} alt='' />{" "}
							Trustpilot
						</p>
					</div>
				</div>
            </div>
            <div className="solid-bar"></div>
			<div className='security-container'>
				<div id='square'>
					<img src={square} alt='' />
					<p>Lorem Ipsum Dolor Sit Amet Top</p>
				</div>
				<div id='lock'>
					<img src={lock} alt='' />
					<p>Lorem Ipsum Dolor Sit Amet Top</p>
				</div>
				<div id='dollar'>
					<img src={dollar} alt='' />
					<p>Lorem Ipsum Dolor Sit Amet Top</p>
				</div>
				<div id='safe'>
					<img src={safe} alt='' />
					<p>Lorem Ipsum Dolor Sit Amet Top</p>
				</div>
			</div>
		</div>
	);
};

export default WelCome;
