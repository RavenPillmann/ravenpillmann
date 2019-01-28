import React, { Component } from 'react';
import logo from './logo.svg';
import carleton from './carleton.svg';
import im from './im.svg';
import minnesota from './minnesota.svg';
import sprout from './sprout.svg';
import stroll from './stroll.svg';
import ait from './ait.svg';
import github from './GitHub-Mark-Light-32px.png';
import linkedin from './In-White-34px-R.png';

import './App.css';
import JourneyBoard from './JourneyBoard';
import Resume from './Resume';
import ProjectList from './ProjectList';
import AboutMe from './AboutMe';

const careerItems = [
  {
	key: 0,
	name: 'Carleton College',
	hover: 'I began studying Computer Science at Carleton College as a freshman. About half of my total coursework was devoted to computer science and mathematics, with the other half being comprised of a variety of other fields, including Astronomy and Arabic. I also DJed for the college radio station, co-led a running club, ran two marathons, and was a head organizer for the school\'s first and second Major League Hacking sanctioned hackathons.',
	img: carleton,
	url: 'https://www.carleton.edu/',
	date: 'Fall 2012 - Spring 2016'
  },
  {
	key: 1,
	name: 'Intelligent Mobiles',
	hover: 'My first software internship was at Intelligent Mobiles, located in Wilhelmshaven, Germany. The team was comprised of a dozen developers and designers who built mobile applications for various clients. I was allowed to work on my own application over the course of the summer, in which users could track their work-related driving routes for company reimbursement purposes. Through this opportunity, I developed my very first application while learning the basics of iOS development.',
	img: im,
	url: 'https://www.intelligentmobiles.com/',
	date: 'Summer 2014'
  },
  {
  	key: 2,
  	name: 'AIT Budapest',
  	hover: 'I studied abroad in Budapest my Junior year of undergrad. Surrounded by tech companies in Graphisoft Park, AIT Budapest gave me a chance to take classes in computer science theory, data mining, graphics, and quantum computing. Living in the center of Europe offered me a unique opportunity to travel to different parts of the continent, experience new cultures, and even reconnect with my Hungarian roots. To this day, I am still connected with friends that I met while studying abroad.',
  	img: ait,
  	url: 'https://www.ait-budapest.com/',
  	date: 'Fall 2014'
  },
  {
	key: 3,
	name: 'Stroll Health',
	hover: 'Interning at Stroll Health was a unique opportunity to work on a small team of 6 developers. At Stroll, I worked with another intern to build a web application that allows patients to find, compare, and book radiology procedures based on costs tailored to their own health insurance plans.',
	img: stroll,
	url: 'https://strollhealth.com/',
	date: 'Summer 2015'
  },
  {
	key: 4,
	name: 'Sprout Social',
	hover: 'I originally joined Sprout Social as a front-end web developer after I graduated from Carleton. Over my two years, I grew into full-stack development, mentored interns and new hires, and worked on cross-team products that remain in use today. I saw the company more than double in size, change office space three times, and acquire another start-up. The experiences I had at Sprout Social, both from a technical standpoint as well as a professional development one, shaped my thinking when it comes to the kind of career and work environment I appreciate the most.',
	img: sprout,
	url: 'https://sproutsocial.com/',
	date: 'Summer 2016 - Summer 2018'
  },
  {
	key: 5,
	name: 'The University of Minnesota',
	hover: 'My interest in artificial intelligence and machine learning eventually led me to pursue a Master of Science degree in Computer Science. At the University of Minnesota, I have had the opportunity to study the data-driven fields I am most interested in, including data mining, machine learning, artificial intelligence, computer vision, and computational biology. I will complete my program by the end of 2019.',
	img: minnesota,
	url: 'https://twin-cities.umn.edu/',
	date: 'Fall 2018 - Present'
  }
]

class App extends Component {
  state = {
	popUp: null,
	tab: 'resume'
  };

  setPopUp = (key) => {
  	this.setState({popUp: key});
  };

  render() {
  	const aboutMeSectionClassname = this.state.tab === 'about_me' ? "SectionHeaderAboutMeSelected" : "SectionHeaderAboutMe";
  	const resumeSectionClassname = this.state.tab === 'resume' ? "SectionHeaderResumeSelected" : "SectionHeaderResume";
  	const projectSectionClassname = this.state.tab === 'projects' ? "SectionHeaderProjectsSelected" : "SectionHeaderProjects";

	return (
	  <div className="App">
		  <div className="Banner">
			<h1 className="Banner-text">
			  Raven Pillmann
			</h1>
		  </div>

		  <div className="SectionSelection">
		  	{/*<div className={aboutMeSectionClassname} onClick={() => this.setState({tab: 'about_me'})}>About Me</div>*/}
		  	<div className={resumeSectionClassname} onClick={() => this.setState({tab: 'resume'})}>About Me</div>
		  	<div className={projectSectionClassname} onClick={() => this.setState({tab: 'projects'})}>Projects</div>
		  </div>


		  {
		  	//this.state.tab === 'about_me' &&
		  	//<div />
		  }

		  {this.state.tab === 'resume' && 
			  <div className="ResumeSection">
			  	  <AboutMe />

				  <div className="Row">
					<JourneyBoard items={careerItems} callback={this.setPopUp} />
					{/* <Resume /> */}
				  </div>

				  {this.state.popUp !== null && 
				  	<div className="JourneyPopUp">
				  		{careerItems[this.state.popUp].hover}
				  	</div>
				  }
			  </div>
		  }

		  {this.state.tab === 'projects' &&
		  	<div className="ProjectsSection">
		  		<ProjectList />
		  	</div>
		  }

		  <div className="Footer">
		  	<div className="Social-links">
			  <a className="Social-link" href='https://github.com/ravenpillmann'>
				<img src={github} />
			  </a>
			  <a className="Social-link" href='https://www.linkedin.com/in/ravenpillmann/'>
				<img src={linkedin} />
			  </a>
			</div>
		  </div>
	  </div>
	);
  }
}

export default App;
