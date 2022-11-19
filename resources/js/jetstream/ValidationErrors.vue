<script setup>
defineProps({
    hasError: Boolean,
    message: String,
});
</script>

<template>
    <div v-show="hasError" class="bg-red-100 flex justify-center">
        <p class="text-md font-medium text-red-600 p-4">
            {{ message }}
        </p>
    </div>
</template>
