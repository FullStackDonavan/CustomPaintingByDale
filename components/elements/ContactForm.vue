<template>
  <div class="container mt-8 mx-auto w-[800px]">
    <div class="px-4 mb-8 md:block">
      <form @submit.prevent="handleSubmit">
        <div>
          <label for="floating_first_name">First Name:</label>
          <input
            type="text"
            id="floating_first_name"
            name="floating_first_name"
            required
          />
        </div>
        <div>
          <label for="floating_last_name">Last Name:</label>
          <input
            type="text"
            id="floating_last_name"
            name="floating_last_name"
            required
          />
        </div>
        <div>
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label for="message">Message:</label>
          <textarea id="message" name="message" required></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  </div>
</template>

