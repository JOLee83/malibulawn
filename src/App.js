import React, { Component } from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'

import Heading from './Components/Heading'
import Home from './Components/Home'
import Gallery from './Components/Gallery'
import About from './Components/About'
import Services from './Components/Services'

class App extends Component {
	render() {
		return (
			<>
				<aside>
					<Heading />
				</aside>
				<Router>
					<main className="content">
						<Switch>
							<Route exact path="/" component={Home} />
							<Route exact path="/gallery" component={Gallery} />
							<Route path="/about" component={About} />
							<Route path="/services" component={Services} />
						</Switch>
					</main>
				</Router>
			</>
		)
	}
}

export default App