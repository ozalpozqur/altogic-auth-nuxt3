import altogic from '~/libs/altogic';

export default defineEventHandler(async (event) => {
	const { user } = await altogic.auth.getUserFromDBbyCookie(event.req, event.res);
	if (user) event.context.user = user;
});
