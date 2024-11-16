<nav class="max-sm:hidden flex gap-x-4 md:gap-x-8">
	<a class="nav-link" href="/about">About</a>
	<a class="nav-link" href="/issues">Issues</a>
	<a class="nav-link" href="/events">Events</a>
</nav>

<style lang="postcss">
	.nav-link {
		@apply relative py-3 text-center
		tracking-wider text-cyan-800 hover:text-cyan-600;
	}

	.nav-link::after {
		content: '';
		@apply absolute bottom-1 left-1/2 w-0 h-0.5
		bg-cyan-600 transition-all;
	}

	.nav-link:hover::after {
		@apply left-0 w-full;
	}
</style>
