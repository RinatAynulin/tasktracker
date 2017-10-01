import App from './App';
import LoginPage from './login/LoginPage';

const routes = {
	component: App,

	childRoutes: [
		{
			path: '/', 
			component: LoginPage,
		}, 

		// {
		// 	path: '/login',
		// 	component: 
		// }
	],
};

export default routes;