<template>
  <UContainer class="w-full h-full flex items-center justify-center my-48">
    <div class="max-w-md w-full p-4 bg-green-50 shadow-md rounded-md">
      <h2 class="text-center font-semibold text-2xl my-5">
        Admin / Teacher Login
      </h2>
      <div class="space-y-3 mb-5">
        <UFormGroup label="Email" size="xl">
          <UInput
            placeholder="youremail@example.com"
            icon="i-heroicons-envelope"
            size="xl"
          />
        </UFormGroup>
        <UFormGroup label="Password" size="xl">
          <UInput
            placeholder="Enter your password"
            icon="i-mdi-lock-outline"
            size="xl"
          />
        </UFormGroup>
        <UDivider />
        <UButton size="xl" color="green" block>Login</UButton>
      </div>
    </div>
  </UContainer>
</template>
