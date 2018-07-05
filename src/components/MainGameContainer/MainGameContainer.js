import React, { Component } from 'react';
import MemoryCard from '../MemoryCard';
import images from "../../images.json";
import "./MainGameContainer.css";


//Main Game Container component
class MainGameContainer extends Component {
	//States that we set and are passed down to the render function
	state = {
		message: "Click on an image to begin",
		score: 0,
		topScore: 0,
		images
	};
	
	//Handle click function - determines what happens once an image is clicked
	handleClick = (id, clicked) => {

		const imageOrder = this.state.images;

		//If the image clicked has already been clicked, apply message in this.setState
		if (clicked) {
			imageOrder.forEach((img, index) => {
				imageOrder[index].clicked = false;
			});
			return this.setState({
				image: imageOrder.sort(() => Math.random() - 0.5),
				message: "You Already Guessed This Image!",
				score: 0
			})
		}

		/*Otherwise, a new message will return, and images will be shuffled, new score becomes
		top score if it is greater than the current top score*/
		else {
			imageOrder.forEach((img, index) => {
				if (id === img.id) {
					imageOrder[index].clicked = true;
				}
			});

			const { topScore, score } = this.state;
			const newScore = score + 1;
			const newTopScore = newScore > topScore ? newScore : topScore;

			return this.setState({
				image: imageOrder.sort(() => Math.random() - 0.5),
				message: "You Guessed Correctly!",
				score: newScore,
				topScore: newTopScore,
			})
		}
	};


	//Render all of the state of messages, scores and images
	render() {
		return (
			<div className="container-fluid mainCardContainer">
			<div className="gameMessage text-center">
						<p>{this.state.message}</p>
					</div>
					<div className="gameScores text-center">
						<p>Score: {this.state.score} | Top Score: {this.state.topScore}</p>
					</div>
				<div className="container">
					
					<div className="row">
					{this.state.images.map(img => (
						//imported from MemoryCard.js file
						<MemoryCard
							key={img.id}
							id={img.id}
							name={img.name}
							clicked={img.clicked}
							image={img.image}
							handleClick={this.handleClick}
							/>
					))}
					</div>
				</div>
			</div>
		);
	}
};

export default MainGameContainer;