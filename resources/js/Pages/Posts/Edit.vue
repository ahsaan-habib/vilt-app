<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import ValidationErrors from "@/Jetstream/ValidationErrors.vue";
// import Label from '@/Jetstream/Label.vue'
// import Input from '@/Jetstream/Input.vue'
// import Button from '@/Jetstream/Button.vue'
import { Head, Link, useForm } from "@inertiajs/inertia-vue3";

import InputLabel from "@/Components/InputLabel.vue";
import TextInput from "@/Components/TextInput.vue";
import InputError from "@/Components/InputError.vue";

import PrimaryButton from "@/Components/PrimaryButton.vue";

const props = defineProps({
    post: Object,
});
const form = useForm({
    title: props.post.title,
    body: props.post.body,
});
</script>
<template>
    <AppLayout>
        <Head title="Posts" />
        <h1 class="pl-6 py-2 text-3xl font-bold bg-gray-500 text-white">
            Posts
        </h1>
        <ValidationErrors
            :hasError="form.hasErrors"
            message="Invalid Form Data"
        />

        <div
            class="min-h-screen flex flex-col sm:justify-start items-center pt-6 sm:pt-0 bg-gray-100"
        >
            <div
                class="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg"
            >
                <form
                    @submit.prevent="form.put(route('posts.update', post.id))"
                >
                    <div>
                        <InputLabel for="title" value="Title" />
                        <TextInput
                            id="title"
                            v-model="form.title"
                            type="text"
                            class="mt-1 block w-full"
                            autofocus
                        />
                        <InputError :message="form.errors.title" class="mt-2" />
                    </div>
                    <div class="mt-4">
                        <InputLabel for="body" value="Body" />
                        <TextInput
                            id="body"
                            v-model="form.body"
                            type="text"
                            class="mt-1 block w-full"
                        />
                        <InputError :message="form.errors.body" class="mt-2" />
                    </div>
                    <div class="flex items-center justify-end mt-4">
                        <PrimaryButton
                            type="submit"
                            class="ml-4"
                            :class="{ 'opacity-25': form.processing }"
                            :disabled="form.processing"
                        >
                            Update Post
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </div>
    </AppLayout>
</template>
