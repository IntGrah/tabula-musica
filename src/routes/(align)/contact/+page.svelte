<script lang="ts">
    import { enhance } from "$app/forms";
</script>

<h2>Contact</h2>

<form method="POST" action="?/contact" use:enhance>
    <h4>Details</h4>
    <input
        class="input"
        type="text"
        name="name"
        placeholder="Name"
        required
    />
    <input
        class="input"
        type="text"
        name="email"
        placeholder="Email"
        required
    />
    <input class="input" type="tel" name="phone" placeholder="Phone number (optional)" />

    <h4>Message</h4>
    <input class="input" type="text" name="subject" placeholder="Subject" required />
    <textarea
        class="py-2 mb-4 w-full max-w-2xl min-h-24 max-h-80 input"
        name="message"
        placeholder="Message"
        required
    ></textarea>
    <button class="btn">Submit</button>
</form>
