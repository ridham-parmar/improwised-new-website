<script lang="ts">
    let responseMessage: string;

    async function submit(e: SubmitEvent) {
      e.preventDefault();
      const formData = new FormData(e.currentTarget as HTMLFormElement);
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      responseMessage = data.message;
    }
  </script>

  <form on:submit={submit} method="post" enctype='multipart/form-data'>
    <label>
      Name
      <input type="text" id="name" name="name" required  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"/>
    </label>
    <label>
      Email
      <input type="email" id="email" name="email" required  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"/>
    </label>
    <label>
      Message
      <!-- svelte-ignore element_invalid_self_closing_tag -->
      <textarea id="message" name="message" required  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"/>
    </label>
    <button>Send</button>
    {#if responseMessage}
      <p>{responseMessage}</p>
    {/if}
  </form>
