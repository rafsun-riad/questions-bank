<template>
  <UContainer>
    <h2 class="text-center text-4xl my-6">Change Your Password</h2>
    <div class="max-w-md w-full mx-auto space-y-3">
      <UFormGroup label="Old Password">
        <UInput
          color="green"
          type="password"
          size="lg"
          required
          placeholder="Enter Old Password"
        />
      </UFormGroup>
      <UFormGroup label="New Password">
        <UInput
          color="green"
          type="password"
          size="lg"
          placeholder="Enter New Password"
        />
      </UFormGroup>
      <UFormGroup label="Confirm New Password">
        <UInput
          color="green"
          type="password"
          size="lg"
          placeholder="Confirm New Password"
        />
      </UFormGroup>

      <UButton
        type="button"
        label="Change Password"
        size="lg"
        color="green"
        block
        @click.prevent="handlePasswordChange"
      />
    </div>
  </UContainer>
</template>

<script setup>
definePageMeta({
  layout: "dashboard",
});

async function handlePasswordChange() {}
</script>
