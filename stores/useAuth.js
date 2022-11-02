export const useAuthStore = defineStore('AuthStore', () => {
	const user = ref(null);
	const setUser = (_user) => (user.value = _user);
	return {
		user,
		setUser,
	};
});

if (import.meta.hot) {
	import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot));
}
