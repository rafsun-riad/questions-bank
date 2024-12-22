<template>
  <UContainer>
    <div class="w-full h-full">
      <h2 class="text-center my-6 text-4xl">Add Department</h2>
      <form
        @submit.prevent="handleAddDepartment"
        class="max-w-md w-full mx-auto space-y-5"
      >
        <div>
          <UFormGroup
            label="Department Name"
            required
            v-slot="{ error }"
            :error="
              !form.departmentName &&
              checkSubmit &&
              'You must enter a department name'
            "
          >
            <UInput
              size="md"
              v-model="form.departmentName"
              type="text"
              placeholder="Enter department name"
            />
          </UFormGroup>
        </div>

        <div>
          <UFormGroup
            label="Department Code"
            required
            v-slot="{ error }"
            :error="
              !form.departmentCode &&
              checkSubmit &&
              'You must enter a department code'
            "
          >
            <UInput
              size="md"
              v-model="form.departmentCode"
              type="text"
              placeholder="Enter department code"
            />
          </UFormGroup>
        </div>
        <UButton
          color="green"
          class="mt-3 mx-auto w-48"
          block
          size="md"
          type="submit"
          >Add Department</UButton
        >
      </form>
    </div>
  </UContainer>
</template>

<script setup>
definePageMeta({
  layout: "dashboard",
});

const checkSubmit = ref(false);

const form = reactive({
  departmentName: "",
  departmentCode: "",
});

function validateForm() {
  return !!form.departmentName && !!form.departmentCode;
}

function handleAddDepartment() {
  if (!validateForm()) {
    checkSubmit.value = true;
    return;
  }
  console.log(form);
}
</script>
