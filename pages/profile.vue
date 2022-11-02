<script setup>
import { useAuthStore } from '../stores/useAuth';
const auth = useAuthStore();

definePageMeta({
	middleware: ['auth'],
});

useHead({
	title: `${auth.user.name} - Profile`,
});
</script>

<template>
	<section class="h-screen py-4 space-y-4 flex flex-col text-center items-center">
		<Avatar />
		<h1 class="text-3xl">Hello, {{ auth.user.name }}</h1>
		<a href="/api/auth/logout" class="bg-gray-400 rounded py-2 px-3 text-white"> Logout </a>
	</section>
</template>
