<script lang="ts">
  import { onMount } from "svelte";
  import { writable } from "svelte/store";
  import Button from "../ui/button/button.svelte";
  import { CircleAlert, CircleCheck } from 'lucide-svelte';
  import { innerWidth } from 'svelte/reactivity/window';

  let {siteKey, contactUsURL} = $props()

  let name = $state("");
  let email = $state("");
  let message = $state("");
  let captchaValid = $state(false);
  let apiResponse : any = $state(null);
  let parsedResponse : any = $state(null);
  let apiError : any = $state(null)

  interface FormErrors {
    name?: string;
    email?: string;
    message?: string;
    captcha?: string;
  }

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
      const formData = new FormData(event.currentTarget as HTMLFormElement);

      if (formData.get("g-recaptcha-response")) {
        const captchaResponse = formData.get("g-recaptcha-response") as string
        formData.append("recaptcha_response", captchaResponse)
        formData.delete("g-recaptcha-response");
      }

      let object: any = {};

      formData.forEach(function(value, key){
        object[key] = value;
      });
      
      let json = JSON.stringify(object);

      const options = {
        method: "POST",
        body: json,
      }

      try {
        apiResponse = await fetch(contactUsURL, options)
        parsedResponse = await apiResponse.json()
      } catch (error:any) {
        apiError = error.message
      }
      
      if(apiResponse.status == 201) {
        resetForm()
      }
    }
  }
  const resetForm = () => {
    name = "";
    email = "";
    message = "";
    window.grecaptcha.reset()

    setTimeout(() => {
      apiError = null;
      apiResponse = null
    },3000)
  }

  onMount(() => {
    const checkGrecaptcha = setInterval(() => {
      if (window.grecaptcha) {
        clearInterval(checkGrecaptcha);
        grecaptcha.render("g-recaptcha", {
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

<div class="flex flex-col gap-6 w-full md:w-1/2">
  {#if apiError}
    <div class={`p-3 md:p-5 flex gap-4 text-[#ff4500] rounded-md border-1 border-[#ff4500] transition-all duration-300`}>
      <div class="pt-[0.3rem]">
        <CircleAlert color="#ff4500" size={20} />
      </div>
      <div class="flex flex-col items-start">
        <p class="text-bold font-manrope text-[16px] md:text-[18px] tracking-[0.02em]">Error</p>
        <p class="text-[14px] md:text-[16px] leading-[24px] tracking-[0.02em] font-normal">{apiError}</p>
      </div>
    </div>
  {/if}

  {#if apiResponse && apiResponse?.status == 201 }
    <div class={`p-3 md:p-5 flex gap-4 text-[#a7e075] rounded-md border-1 border-[#a7e075] transition-all duration-300`}>
      <div class="pt-[0.3rem]">
        <CircleCheck color="#a7e075" size={20} />
      </div>
      <div class="flex flex-col items-start">
        <p class="text-bold font-manrope text-[16px] md:text-[18px] tracking-[0.02em]">Success</p>
        <p class="text-[14px] md:text-[16px] leading-[24px] tracking-[0.02em] font-normal">{parsedResponse?.success[0]}</p>
      </div>
    </div>
  {/if}

  {#if apiResponse && apiResponse?.status != 201 }
    <div class={`p-3 md:p-5 flex gap-4 text-[#ff4500] rounded-md border-1 border-[#ff4500] transition-all duration-300`}>
      <div class="pt-[0.3rem]">
        <CircleAlert color="#ff4500" size={20} />
      </div>
      <div class="flex flex-col items-start">
        <p class="text-bold font-manrope text-[16px] md:text-[18px] tracking-[0.02em]">Error</p>
        <p class="text-[14px] md:text-[16px] leading-[24px] tracking-[0.02em] font-normal">{parsedResponse?.error[0]}</p>
      </div>
    </div>
  {/if}
 
  <form onsubmit={validateForm} class="bg-[#F5F7F6] p-8 rounded-2xl shadow-lg space-y-6">
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

    <div id="g-recaptcha" data-size={`${innerWidth?.current && innerWidth?.current < 640 ? "compact" : "normal"}`}></div>
    {#if $errors.captcha}<p class="text-red-500 text-sm mt-1">{$errors.captcha}</p>{/if}

    <Button class="bg-black" type="submit">
      Contact Us
    </Button>
  </form>
</div>
