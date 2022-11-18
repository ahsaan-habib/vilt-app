<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
// import ValidationErrors from "@/Jetstream/ValidationErrors.vue";
import DangerButton from "@/Components/DangerButton.vue";
// import Label from "@/Jetstream/Label.vue";
import InputLabel from "@/Components/InputLabel.vue";
// import Input from "@/Jetstream/Input.vue";
import TextInput from "@/Components/TextInput.vue";

// import Button from "@/Jetstream/Button.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import { Head, Link, useForm } from "@inertiajs/inertia-vue3";

const form = useForm({
    title: null,
    body: null,
});
</script>
<template>
    <AppLayout>
        <Head title="Posts" />
        <h1 class="pl-6 py-2 text-3xl font-bold bg-gray-500 text-white">
            Posts
        </h1>
        <ValidationErrors class="bg-red-100 p-4" />
        <div
            class="min-h-screen flex flex-col sm:justify-start items-center pt-6 sm:pt-0 bg-gray-100"
        >
            <div
                class="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg"
            >
                <form @submit.prevent="form.post(route('posts.store'))">
                    <div>
                        <InputLabel for="title" value="Title" />
                        <TextInput
                            id="title"
                            v-model="form.title"
                            type="text"
                            class="mt-1 block w-full"
                            autofocus
                        />
                    </div>
                    <div class="mt-4">
                        <InputLabel for="body" value="Body" />
                        <TextInput
                            id="body"
                            v-model="form.body"
                            type="text"
                            class="mt-1 block w-full"
                        />
                    </div>
                    <div class="flex items-center justify-end mt-4">
                        <PrimaryButton
                            type="submit"
                            class="ml-4"
                            :class="{ 'opacity-25': form.processing }"
                            :disabled="form.processing"
                        >
                            Create Post
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </div>
    </AppLayout>
</template>
