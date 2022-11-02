import { useAuthStore } from '~/stores/useAuth';

export default defineNuxtRouteMiddleware(() => {
	const store = useAuthStore();
	const event = useRequestEvent();

	if (process.server && event.context.user) {
		store.setUser(event.context.user);
	}
});
