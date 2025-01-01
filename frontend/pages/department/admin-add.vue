<template>
  <UContainer>
    <h2 class="text-center text-4xl my-6">Add Department Admin</h2>
    <form @submit.prevent="handleSubmit">
      <div class="max-w-lg w-full mx-auto space-y-3">
        <UFormGroup label="Email" required>
          <UInput
            color="green"
            type="email"
            size="lg"
            required
            placeholder="Enter Email"
          />
        </UFormGroup>
        <UFormGroup label="Password" required>
          <UInput
            color="green"
            type="password"
            size="lg"
            placeholder="Enter Password"
          />
        </UFormGroup>
        <UFormGroup label="Confirm Password" required>
          <UInput
            color="green"
            type="password"
            size="lg"
            placeholder="Enter Confirm Password"
          />
        </UFormGroup>
        <UFormGroup label="Department" required>
          <USelectMenu
            color="green"
            placeholder="Select Department"
            size="lg"
          />
        </UFormGroup>

        <UButton
          type="submit"
          label="Add Department Admin"
          size="lg"
          color="green"
          block
        />
      </div>
    </form>
  </UContainer>
</template>

<script setup>
definePageMeta({
  layout: "dashboard",
});

async function handleSubmit() {}
</script>
