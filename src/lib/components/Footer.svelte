<script>
	import { footerLinks } from '$lib/components/navigation/links';
</script>

<footer class="bg-gray-900">
	<div class="util-restrict px-6">
		<div class="grid sm:grid-cols-2 py-6 gap-8">
			<hgroup>
				<h4>Subscribe</h4>
				<p class="text-gray-200">Subscribe to the mailing list</p>
				<a class="button" href="/">Mailing list</a>
			</hgroup>
			<hgroup>
				<h4>Contact</h4>
				<p class="text-gray-200">Have any questions, or fancy writing for us?</p>
				<a class="button" href="/">Contact</a>
			</hgroup>
			<hgroup>
				<h4>Social</h4>
				<p>
					<img
						class="inline mr-1 size-4"
						src="/icons/instagram.png"
						alt="Instagram logo"
						width={20}
					/>
					<a
						class="tracking-wide transition-colors text-gray-200 hover:text-white"
						href="https://www.instagram.com/tabula_musica"
					>
						@tabula_musica
					</a>
				</p>
				<p>
					<img class="inline mr-1 size-4" src="/icons/email.png" alt="Email icon" />
					<a
						class="tracking-wide transition-colors text-gray-200 hover:text-white"
						href="mailto:tabulamusica@cambridgesu.co.uk"
					>
						tabulamusica@cambridgesu.co.uk
					</a>
				</p>
			</hgroup>
			<hgroup>
				<h4>Donate</h4>
				<p class="text-gray-200">Give money</p>
				<a class="button" href="/">Donate</a>
			</hgroup>
		</div>
		<hr class="border-neutral-600" />
		<ul class="flex gap-x-8 text-sm text-gray-400">
			{#each footerLinks as { href, name }}
				<li>
					<a {href} class="tracking-wider">{name}</a>
				</li>
			{/each}
		</ul>
		<p class="text-sm text-gray-400">&copy; 2024 Tabula Musica</p>
	</div>
</footer>

<style lang="postcss">
	h4 {
		@apply text-lg uppercase text-cyan-100;
	}

	.button {
		@apply inline-flex h-10 px-4 items-center
        text-cyan-800
        transition-colors bg-amber-100 hover:bg-amber-100/80
        rounded-full tracking-wider;
	}
</style>
