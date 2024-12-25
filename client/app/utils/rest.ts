import axios from "axios";

type ServerRoutes = '/events' | '/users' | '/user-groups';

export const getRoute = <T>(
	route: ServerRoutes,
	fallbackIdentity: T
) => async () => {
	const url = 'http://localhost:80' + route;
	try {
		const usersRequest = await axios.get<T>(url);
		const users = usersRequest?.data;
		return users;
	} catch (err) {
		console.log(err);
		return fallbackIdentity;
	}
}
