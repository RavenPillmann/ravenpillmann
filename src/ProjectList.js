import React, {Component} from 'react';
import ReactSVG from 'react-svg';


const PROJECTS = [
	{
		"title": "Chef Turing: Recipe-to-Image Generative Adversarial Network",
		"description": "Personal Project",
		"date": "Summer 2019",
		"abstract": "As the first part of an overall series of projects to develop an AI-powered food blog, I trained a generative adversarial network to produce images based on lists of ingredients. This included fetching recipes, parsing and tallying text to get the most common ingredients, training a GAN, and deploying the model with a callable API. To accomplish this, I was able to explore the Google Cloud Platform, Apache Spark, Flask, Docker, and Kubernetes.",
		"link": "https://github.com/RavenPillmann/foodgan",
	},
	{
		"title": "Implementation of Large Scale Direct Monocular SLAM",
		"description": "Class Project",
		"date": "Spring 2019",
		"abstract": "Simultaneous localization and mapping (SLAM) refers to a class of algorithms that discern information of an agents location and surrounding environment from visual imagery, used largely in autonomous robotics. Several approaches to SLAM are first discussed and compared. LSD-SLAM is referenced in greater detail, and key components to LSD-SLAM are implemented to varying degrees of success. Finally, future implementation details are discussed.",
		"link": require("./ai-lsd-slam.pdf"),
		"filename": "ai-lsd-slam.pdf",
	},
	{
		"title": "Petfinder.my Adoption Prediction",
		"description": "Kaggle Competition",
		"date": "Winter 2019",
		"abstract": "As part of a kaggle competition, I created a model to predict adoptability of animals based on their online profiles.",
		"link": "https://www.kaggle.com/c/petfinder-adoption-prediction",
	},
	{
		"title": "Machine Learning in Renewable Resource Production",
		"description": "Class Project",
		"date": "Fall 2018",
		"abstract": "In this literature review, several papers are analyzed for their approaches to solar and wind energy prediction. Direct and indirect approaches to solar energy prediction are examined in detail, which encompass popular machine learning models such as support vector machines and regression, artificial neural networks, autoregressive moving averages, and least absolute shrinkage and selection operators. Point prediction and prediction interval approaches to wind energy prediction are analyzed, and the benefits of each method are compared. Common limitations to these approaches are discussed, such as their sensitivity to weather conditions and narrow focus on particular locations. Finally, suggestions for future work are made based on the current limitations of popular approaches.",
		"link": require("./ml-renewable-resources.pdf"),
		"filename": "machine-learning-in-renewable-resource-production.pdf",
	},
	{
		"title": "Defect Learning in Manufacturing",
		"description": "Class Project",
		"date": "Fall 2018",
		"abstract": "Defect detection in manufacturing is an important task to achieve efficiently and accurately. Leveraging machine learning models to detect defects has been done in a variety of ways previously, achieving acceptably high levels of accuracy. This project aims to apply machine learning to the task of defect detection and evaluate the results of the implemented models. We use Decision trees, naive Bayes, Word2Vec, and LSTM techniques on real-world data to explore and determine the effectiveness of each approach with the F1 score metric. Processing the data into useful feature sets for input into various models turned into one of the primary focal points of the project. It is shown that with specific models we can attain high F1 scores, such as 0.970 for Decision Trees, which suggests high feasibility for potential implementation in real-world applications.",
		"link": require("./defect-learning-in-manufacturing.pdf"),
	}, 
	{
		"title": "Convolutional Neural Network on Hot Dog/Not Hot Dog",
		"description": "Practice",
		"date": "Summer 2018",
		"abstract": "Based on the Silicon Valley application, I used Keras to explore convolutional neural network architectures in an attempt to predict whether given images were of hot dogs or not.",
		"link": "https://github.com/RavenPillmann/ML/blob/master/practice/cnn/Hot-Dog-Not-Hot-Dog.ipynb"
	},
	{
		"title": "Supervised Learning on Wine Quality",
		"description": "Practice",
		"date": "Summer 2018",
		"abstract": "For practice using Scikit-learn and applying supervised learning principles, I made a few basic models predicting wine quality.",
		"link": "https://github.com/RavenPillmann/ML/blob/master/practice/supervised-learning/red-wine-quality.ipynb",
	},
	{
		"title": "Convolutional Neural Network on MNIST Dataset",
		"description": "Udacity Machine Learning Nanodegree",
		"date": "Summer 2018",
		"abstract": "Using Keras with the TensorFlow backend, I built a convolutional neural network on the MNIST dataset for Udacity's Machine Learning Nanodegree.",
		"link": "https://github.com/RavenPillmann/machine-learning/blob/master/projects/practice_projects/cnn/mnist-mlp/mnist_mlp.ipynb",
	},
	{
		"title": "Unsupervised Learning for Creating Customer Segments",
		"description": "Udacity Machine Learning Nanodegree",
		"date": "Summer 2018",
		"abstract": "I used unsupervised learning techniques and algorithms, like principle component analysis and clustering, to create customer segments as part of Udacity's Machine Learning Nanodegree.",
		"link": "https://github.com/RavenPillmann/machine-learning/blob/master/projects/customer_segments/customer_segments.ipynb",
	},
	{
		"title": "Supervised Learning for Finding Donors for CharityML",
		"description": "Udacity Machine Learning Nanodegree",
		"date": "Spring 2018",
		"abstract": "Using Scikit-Learn, I implemented and compared several supervised learning algorithms in order to classify likely donors as part of Udacity's Machine Learning Nanodegree.",
		"link": "https://github.com/RavenPillmann/machine-learning/blob/master/projects/finding_donors/finding_donors.ipynb",
	},
	{
		"title": "Regression for Predicting Boston Housing Prices",
		"description": "Udacity Machine Learning Nanodegree",
		"date": "Spring 2018",
		"abstract": "An early introduction to regression as applied to UCI's boston housing prices through Udacity's Machine Learning Nanodegree.",
		"link": "https://github.com/RavenPillmann/machine-learning/blob/master/projects/boston_housing/boston_housing.ipynb",
	},
	{
		"title": "Titanic Survival Exploration",
		"description": "Udacity Machine Learning Nanodegree",
		"date": "Spring 2018",
		"abstract": "An early introduction to Jupyter Notebooks and data exploration through Udacity's Machine Learning Nanodegree.",
		"link": "https://github.com/RavenPillmann/machine-learning/tree/master/projects/titanic_survival_exploration",
	}
]

class ProjectList extends Component {
	state = {
		expandedProject: null,
	};

	expandProject = (index) => {
		// if (this.state.expandedProject === null) {
		// 	this.setState({expandedProject: index});
		// } else {
		// 	this.setState({expandedProject: null});
		// }
		this.setState({expandedProject: index});
	}

	getProjects = () => {
		return PROJECTS.map((project, index) => {
			const content = this.state.expandedProject === index ? 
				(
					<div>
						<h3>{project['title']}</h3>
						<p className="ProjectDate">{project['date']}</p>
						<p className="ProjectAbstract">{project['abstract']}</p>
						<div className='ProjectLink'>
							<a className='ProjectLinkText' href={project['link']} download={project['filename']} target="_blank">Click here for more</a>
						</div>
					</div>
				) :
				(
					<div>
						<h3>{project['title']}</h3>
						<p className="ProjectDate">{project['date']}</p>
					</div>
				)

			return (
				<li onClick={() => this.expandProject(index)} className='ProjectListItem'>
					{content}
				</li>
			);
		});
	}

	// Somehow need to make resume downloadable
	render() {
		const projects = this.getProjects();

		return (
			<ul className="ProjectList">
				{projects}
			</ul>
		)
	}
}

export default ProjectList;