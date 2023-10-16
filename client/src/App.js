import './App.css';
import {
	createBrowserRouter,
	RouterProvider,
} from "react-router-dom";
import Home from './Home';
import Create from './Create';
import News from './News';
import Edit from './Edit';

const router = createBrowserRouter([
	{
	  path: "/",
	  element: <Home />,
	},
	{
		path: "/news/:newsId",
		element: <News />,
	},
	{
		path: "/news/edit/:newsId",
		element: <Edit />,
	},
	{
		path: "/create",
		element: <Create />,
	},
]);

const App = () => {

	return (
		<RouterProvider router={router} />
	)
}

export default App

