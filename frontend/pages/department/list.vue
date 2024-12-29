<template>
  <UContainer>
    <h2 class="text-center text-4xl my-6">Departments List</h2>
    <div class="my-10">
      <UTable :columns="columns" :rows="rows" />
    </div>
  </UContainer>
</template>

<script setup>
definePageMeta({
  layout: "dashboard",
});

const columns = [
  {
    key: "id",
    label: "ID",
  },
  {
    key: "name",
    label: "Department Name",
  },
  {
    key: "code",
    label: "Department Code",
  },
];

const rows = [
  {
    id: 1,
    name: "Computer Science and Engineering",
    code: "UG02",
  },
];
</script>
