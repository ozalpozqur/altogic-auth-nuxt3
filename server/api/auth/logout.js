import altogic from '~/libs/altogic';

export default defineEventHandler(async event => {
	const token = getCookie(event, 'session_token');
	console.log({ sa: token });
	await altogic.auth.signOut(token);
	deleteCookie(event, 'session_token');
	await sendRedirect(event, '/login');
});
