<template>
  <div class="container mt-8 mx-auto w-[800px]">
    <div class="px-4 mb-8 md:block">
      <form @submit.prevent="handleSubmit">
        <div class="grid md:grid-cols-2 md:gap-6">
          <!-- First Name Input -->
          <div class="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="floating_first_name"
              id="floating_first_name"
              class="block py-2.5 px-0 w-full text-sm text-slate-800 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="floating_first_name"
              class="peer-focus:font-medium absolute text-sm text-slate-800 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-slate-800 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >First name</label
            >
          </div>

          <!-- Last Name Input -->
          <div class="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="floating_last_name"
              id="floating_last_name"
              class="block py-2.5 px-0 w-full text-sm text-slate-800 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="floating_last_name"
              class="peer-focus:font-medium absolute text-sm text-slate-800 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-slate-800 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >Last name</label
            >
          </div>
        </div>

        <!-- Email Input -->
        <div class="relative z-0 w-full mb-6 group">
          <input
            type="email"
            name="email"
            id="email"
            class="block py-2.5 px-0 w-full text-sm text-slate-800 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            for="email"
            class="peer-focus:font-medium absolute text-sm text-slate-800 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-slate-800 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >Email</label
          >
        </div>

        <!-- Message Textarea -->
        <div class="relative z-0 w-full mb-6 group">
          <textarea
            rows="4"
            cols="50"
            name="message"
            id="message"
            class="block py-2.5 px-0 w-full text-sm text-slate-800 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          ></textarea>
          <label
            for="message"
            class="peer-focus:font-medium absolute text-sm text-slate-800 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-slate-800 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >Message</label
          >
        </div>

        <!-- Submit Button -->
        <button
          type="submit"
          class="text-white bg-indigo-600 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Request Quote
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import transporter from "../../server/app/services/mailer.ts";

const handleSubmit = async (event) => {
  event.preventDefault();

  // Get form data
  const formData = new FormData(event.target);

  // Send email using transporter
  try {
    const info = await transporter.sendMail({
      from: formData.get("email"),
      to: "donavanjones79@gmail.com",
      subject: "New Quote Request",
      text: `Name: ${formData.get("floating_first_name")} ${formData.get(
        "floating_last_name"
      )}
            Email: ${formData.get("email")}
            Message: ${formData.get("message")}`,
    });
    console.log("Email sent:", info.response);
    alert("Your message has been sent successfully!");
  } catch (error) {
    console.error("Error sending email:", error);
    alert(
      "An error occurred while sending your message. Please try again later."
    );
  }
};
</script>
