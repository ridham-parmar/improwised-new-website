<script lang="ts">
  import { onMount } from "svelte";
  import { writable } from "svelte/store";
  export let siteKey: string;
  export let contactUsURL: string;
  import Button from "../ui/button/button.svelte";

  let name = "";
  let email = "";
  let message = "";
  let captchaValid = false;

  // Define the type for errors
  interface FormErrors {
    name?: string;
    email?: string;
    message?: string;
    captcha?: string;
  }

  // Using a reactive store for error handling
  let errors = writable<FormErrors>({});

  function recaptchaCallback(response: string) {
    captchaValid = !!response;
    errors.update(e => ({ ...e, captcha: "" }));
  }

  async function validateForm(event: SubmitEvent) {
    event.preventDefault();

    // Reset errors
    errors.set({});

    let newErrors: FormErrors = {};

    if (!name.trim()) newErrors.name = "Name is required.";
    if (!email.trim() || !email.match(/^\S+@\S+\.\S+$/))
      newErrors.email = "Valid email is required.";
    if (!message.trim()) newErrors.message = "Message cannot be empty.";
    if (!captchaValid) newErrors.captcha = "Please verify the CAPTCHA.";

    errors.set(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // console.log("Form submitted successfully!");

      const formData = new FormData(event.currentTarget as HTMLFormElement);

      if (formData.get("g-recaptcha-response")) {
        const captchaResponse = formData.get("g-recaptcha-response") as string
        formData.append("recaptcha_response", captchaResponse)
        formData.delete("g-recaptcha-response");
      }

      // console.log("Form Data:", Object.fromEntries(formData.entries()));

      const options = {
        method: "POST",
        body: JSON.stringify(formData),
      }
      // const response = await fetch("/api/contactus", options);
      // const data = await response.json();
      const response = await fetch(contactUsURL, options)
      const d = await response.json()
      // console.log("data ------------------------------ ", d);

      // Reset form on successful validation
      name = "";
      email = "";
      message = "";
    }
  }

  onMount(() => {
    const checkGrecaptcha = setInterval(() => {
      if (window.grecaptcha) {
        clearInterval(checkGrecaptcha);
        window.grecaptcha.render("g-recaptcha", {
          sitekey: siteKey,
          callback: recaptchaCallback,
        });
      }
    }, 500);
  });
</script>

<svelte:head>
  <script src="https://www.google.com/recaptcha/api.js" async defer></script>
</svelte:head>

<form on:submit|preventDefault={validateForm} class="w-full md:w-1/2 bg-[#F5F7F6] p-8 rounded-2xl shadow-lg space-y-6">
  <div>
    <label for="name" class="block font-semibold text-gray-900">Name</label>
    <input
      type="text"
      id="name"
      name="name"
      bind:value={name}
      class="w-full bg-transparent border-b border-gray-300 focus:outline-hidden py-2 text-gray-700 placeholder-gray-400"
      placeholder="Your Name"
    />
    {#if $errors.name}<p class="text-red-500 text-sm mt-1">{$errors.name}</p>{/if}
  </div>

  <div>
    <label for="email" class="block font-semibold text-gray-900">Email</label>
    <input
      type="email"
      id="email"
      name="email"
      bind:value={email}
      class="w-full bg-transparent border-b border-gray-300 focus:outline-hidden py-2 text-gray-700 placeholder-gray-400"
      placeholder="Your Email"
    />
    {#if $errors.email}<p class="text-red-500 text-sm mt-1">{$errors.email}</p>{/if}
  </div>

  <div>
    <label for="message" class="block font-semibold text-gray-900">Message</label>
    <textarea
      id="message"
      name="message"
      bind:value={message}
      class="w-full bg-transparent border-b border-gray-300 focus:outline-hidden py-2 text-gray-700 placeholder-gray-400"
      placeholder="Add Your Message Here"
    ></textarea>
    {#if $errors.message}<p class="text-red-500 text-sm mt-1">{$errors.message}</p>{/if}
  </div>

  <div id="g-recaptcha"></div>
  {#if $errors.captcha}<p class="text-red-500 text-sm mt-1">{$errors.captcha}</p>{/if}

  <Button class="bg-black" type="submit">
    Contact Us
  </Button>
</form>
