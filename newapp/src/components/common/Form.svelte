<script>
  import { onMount } from "svelte";
  let name = "";
  let email = "";
  let message = "";
  let captchaValid = false;
  let errors = {};

  function validateForm(event) {
    event.preventDefault();
    errors = {};

    if (!name.trim()) errors.name = "Name is required.";
    if (!email.trim() || !email.match(/^\S+@\S+\.\S+$/))
      errors.email = "Valid email is required.";
    if (!message.trim()) errors.message = "Message cannot be empty.";
    if (!captchaValid) errors.captcha = "Please verify the CAPTCHA.";

    if (Object.keys(errors).length === 0) {
      alert("Form submitted successfully!");
    }
  }

  function recaptchaCallback(response) {
    captchaValid = !!response;
  }

  onMount(() => {
    const script = document.createElement("script");
    script.src = "https://www.google.com/recaptcha/api.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  });
</script>

<form
  on:submit|preventDefault={validateForm}
  class="space-y-4 max-w-lg mx-auto p-6 border rounded-lg shadow-md"
>
  <div>
    <label for="name" class="block font-semibold">Your Name:</label>
    <input type="text" id="name" bind:value={name} class="w-full p-2 border rounded" />
    {#if errors.name}<p class="text-red-500">{errors.name}</p>{/if}
  </div>
  <div>
    <label for="email" class="block font-semibold">Email Address:</label>
    <input type="email" name="email" bind:value={email} class="w-full p-2 border rounded" />
    {#if errors.email}<p class="text-red-500">{errors.email}</p>{/if}
  </div>
  <div>
    <label for="message" class="block font-semibold">Message:</label>
    <textarea id="message" bind:value={message} class="w-full p-2 border rounded"></textarea>
    {#if errors.message}<p class="text-red-500">{errors.message}</p>{/if}
  </div>
  <div
    class="g-recaptcha"
    data-sitekey="YOUR_RECAPTCHA_SITE_KEY"
    data-callback="recaptchaCallback"
  ></div>
  {#if errors.captcha}<p class="text-red-500">{errors.captcha}</p>{/if}
  <button type="submit" class="bg-blue-500 text-white p-2 rounded w-full"
    >SEND INQUIRY</button
  >
</form>
