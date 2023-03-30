<script>
    import GreenAlert from '$lib/components/GreenAlert.svelte';
    import Alert from '$lib/components/Alert.svelte';    export let form;
  
    console.log(form);
  </script>
  
  <style>
    /* Custom styles for the page */
    body {
      background-color: #fae3e5;
      background-repeat: no-repeat;
      background-size: cover;
    }
  
    .heart-icon {
      font-size: 3rem;
      animation: pulse 2s ease-in-out infinite;
    }
  
    @keyframes pulse {
      0% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.6);
      }
      100% {
        transform: scale(1);
      }
    }
  
    textarea:focus,
    input:focus {
      outline: none;
      box-shadow: 0 0 5px #f50057;
    }
  </style>
  <body>
      <h1 class="title flex items-center justify-center text-4xl font-extrabold font-serif text-red-700 mb-8 pt-10">
    <span class="heart-icon text-red-500 mr-2">&hearts;</span>
    Notes on Love
    <span class="heart-icon text-red-500 ml-2">&hearts;</span>
  </h1>
  
  <form method="POST" class="w-full mx-auto max-w-md bg-gray-100 rounded-lg p-8 shadow-md">
    <div class="mb-4">
      <label for="inline-full-name" class="block text-gray-700 font-bold mb-2">Name</label>
      <input type="text" value={form?.name ?? ''} name="name" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
    </div>
  
    <div class="mb-6">
      <label for="inline-password" class="block text-gray-700 font-bold mb-2">Note on Love</label>
      <textarea class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="note" rows="6" value={form?.note ?? ''} placeholder="My family brings me joy"></textarea>
    </div>
  
    <div class="flex items-center justify-center">
      <button type="submit" class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
    </div>
  
    {#if form?.error}
    <div class="mt-4">
      <Alert message={form?.message} />
    </div>
    {/if}
    {#if form?.success}
    <div class="mt-4">
      <GreenAlert message="Successfully submitted" />
    </div>
    {/if}
  </form>
  </body>