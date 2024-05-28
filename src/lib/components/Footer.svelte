<footer class="bg-gray-900">
	<div class="mx-auto max-w-6xl px-6">
		<div class="grid sm:grid-cols-2 py-6 gap-8">
			<hgroup class="grow">
				<h4 class="mb-4 text-lg uppercase tracking-widest text-cyan-100">Subscribe</h4>
				<p class="mb-4 text-gray-200">From £0/month</p>
				<div class="flex flex-wrap gap-4">
					<button>Mailing list</button>
					<button>Paper edition</button>
				</div>
			</hgroup>
			<hgroup class="grow">
				<h4 class="mb-4 text-lg uppercase tracking-widest text-cyan-100">Write</h4>
				<p class="mb-4 text-gray-200">Become an editor maybe</p>
				<button>Apply</button>
			</hgroup>
			<hgroup class="grow">
				<h4 class="mb-4 text-lg uppercase tracking-widest text-cyan-100">Contact</h4>
				<p class="mb-4 text-gray-200">Why would you want to contact us</p>
				<button>Contact</button>
			</hgroup>
			<hgroup class="grow">
				<h4 class="mb-4 text-lg uppercase tracking-widest text-cyan-100">Social</h4>
				<p>
					<img class="inline mr-1 size-4" src="/icons/instagram.png" alt="Instagram logo" width={20} />
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
		</div>
		<hr class="mb-4 border-neutral-600" />
		<ul class="mb-4 flex gap-x-8 text-sm text-gray-400">
			<li>
				<a href="/about">About</a>
			</li>
			<li>
				<a href="/privacy-policy">Privacy policy</a>
			</li>
			<li>
				<a href="/cookies">Cookies</a>
			</li>
			<li>
				<a href="/advertising">Advertising</a>
			</li>
			<li>
				<a href="/user-agreement">Boring legal stuff</a>
			</li>
		</ul>
		<p class="mb-4 text-sm tracking-wide text-gray-400">© 2024. All rights reserved.</p>
	</div>
</footer>

<style lang="postcss">
	button {
		@apply block h-10 px-4 items-center
        text-cyan-800
        transition-colors bg-amber-100 hover:bg-amber-100/80
        rounded-full tracking-wider;
	}
</style>
