import React, {Component} from 'react';
import ReactSVG from 'react-svg';

class JourneyBoard extends Component {
	// state = {
	// 	popUp: null
	// };

	displayHover(item) {
		return () => {
			// Display below item somehow
			// this.setState({popUp: item.key});
			// console.log(item.hover);
			this.props.callback(item.key);
		}
	}

	getItems(items) {
		return items.map(item => {
			return (
				<li className='JourneyListItem' onMouseEnter={this.displayHover(item)} onMouseLeave={() => this.props.callback(null)}>
					<a href={item['url']} target="_blank">
						<ReactSVG src={item['img']} />
						<div className='JourneyBoardListItemTitle'>{item['name']}</div>
					</a>
					<div className='JourneyBoardDate'>{item['date']}</div>
				</li>
			);
		});
	}

	render() {
		const items = this.getItems(this.props.items);
		// this.props.callback(this.state.popUp)

		return (
			<div>
				<div className='JourneyBoard'>
					<ul className='JourneyList'>
						{items}
					</ul>
				</div>
				{/*this.state.popUp != null &&
					<div className='JourneyPopUp'>{this.props.items[this.state.popUp].hover}</div>
				*/}
			</div>
		)
	}
}

export default JourneyBoard;