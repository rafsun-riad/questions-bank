<template>
  <PublicHeader />
  <PublicSection>
    <div class="flex w-full h-full">
      <div class="h-full w-2/12 bg-gray-200 pt-5 p-2">
        <UAccordion :items="items" color="gray" variant="ghost" size="xl">
          <template #admin>
            <UVerticalNavigation
              class="w-full"
              :links="adminLinks"
              :ui="{
                size: 'text-base',
                padding: 'px-8',
              }"
            />
          </template>
          <template #department
            ><UVerticalNavigation
              class="w-full"
              :links="departmentLinks"
              :ui="{
                size: 'text-base',
                padding: 'px-8',
              }"
          /></template>
          <template #user
            ><UVerticalNavigation
              class="w-full"
              :links="userLinks"
              :ui="{
                size: 'text-base',
                padding: 'px-8',
              }"
            />
          </template>
          <template #profile>
            <UVerticalNavigation
              class="w-full"
              :links="profileLinks"
              :ui="{
                size: 'text-base',
                padding: 'px-8',
              }"
            />
          </template>
        </UAccordion>
      </div>
      <div class="h-full w-10/12 pl-3 pt-3">
        <slot />
      </div>
    </div>
  </PublicSection>
</template>

<script setup>
const adminLinks = [
  {
    label: 'Department Admin List',
    icon: 'i-ic-round-format-list-bulleted',
    to: '/department/admin-list',
  },
  {
    label: 'Add Department Admin',
    icon: 'i-material-symbols-add-circle-outline-rounded',
    to: '/department/admin-add',
  },
];

const departmentLinks = [
  {
    label: 'Department List',
    icon: 'i-ic-round-format-list-bulleted',
    to: '/department/list',
  },
  {
    label: 'Add Department',
    icon: 'i-material-symbols-add-circle-outline-rounded',
    to: '/department/add',
  },
];

const userLinks = [
  {
    label: 'User List',
    icon: 'i-ci-users',
    to: '/department/list',
  },
];

const profileLinks = [
  {
    label: 'Change Password',
    icon: 'i-arcticons-passwordgenerator',
    to: '/profile',
  },
];

const items = [
  {
    label: 'Admin',
    icon: 'i-eos-icons-admin-outlined',
    slot: 'admin',
  },
  {
    label: 'Department',
    icon: 'i-streamline-quality-education',
    slot: 'department',
  },
  {
    label: 'User',
    icon: 'i-ci-users-group',
    slot: 'user',
  },
  {
    label: 'Profile',
    icon: 'i-mdi-account-circle-outline',
    slot: 'profile',
  },
];
</script>
