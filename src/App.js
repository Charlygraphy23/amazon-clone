import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";

function App() {
	return (
		<Router>
			<Header />
			<Switch>
				<Route path='/' component={HomePage} />
			</Switch>
		</Router>
	);
}

export default App;
