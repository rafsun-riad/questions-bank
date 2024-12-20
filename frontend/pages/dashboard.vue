<template>
  <h2 class="text-4xl text-center font-bold my-6">Welcome to dashboard</h2>
  <div class="flex justify-center gap-3 flex-wrap">
    <UCard class="bg-blue-400 text-white w-52">
      <p class="text-3xl py-3">120</p>
      <p class="text-lg pb-3">Admin</p>
      <UButton variant="ghost" color="black" block>
        More Info
        <template #trailing>
          <UIcon name="i-heroicons-arrow-right-20-solid" class="w-5 h-5" />
        </template>
      </UButton>
    </UCard>
    <UCard class="bg-green-400 text-white w-52">
      <p class="text-3xl py-3">10</p>
      <p class="text-lg pb-3">Department</p>
      <UButton variant="ghost" color="black" block>
        More Info
        <template #trailing>
          <UIcon name="i-heroicons-arrow-right-20-solid" class="w-5 h-5" />
        </template>
      </UButton>
    </UCard>
    <UCard class="bg-purple-400 text-white w-52">
      <p class="text-3xl py-3">130+</p>
      <p class="text-lg pb-3">Teachers</p>
      <UButton variant="ghost" color="black" block>
        More Info
        <template #trailing>
          <UIcon name="i-heroicons-arrow-right-20-solid" class="w-5 h-5" />
        </template>
      </UButton>
    </UCard>
    <UCard class="bg-red-400 text-white w-52">
      <p class="text-3xl py-3">8000+</p>
      <p class="text-lg pb-3">Students</p>
      <UButton variant="ghost" color="black" block>
        More Info
        <template #trailing>
          <UIcon name="i-heroicons-arrow-right-20-solid" class="w-5 h-5" />
        </template>
      </UButton>
    </UCard>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'dashboard',
});
</script>
