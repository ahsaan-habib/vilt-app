<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import { Head, Link } from "@inertiajs/inertia-vue3";
import { Inertia } from "@inertiajs/inertia";
// import Button from "@/Jetstream/Button.vue";
// import DangerButton from "@/Jetstream/DangerButton.vue";
import DangerButton from "@/Components/DangerButton.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";

const props = defineProps({
    data: Object,
});
const edit = (id) => {
    Inertia.visit(route("posts.edit", id));
};
const destroy = (id) => {
    Inertia.visit(route("posts.destroy", id), { method: "delete" });
};
</script>
<template>
    <AppLayout>
        <Head title="Posts" />
        <h1 class="pl-6 py-2 text-3xl font-bold bg-gray-500 text-white">
            Posts
        </h1>
        <div
            v-if="$page.props.flash.success"
            class="bg-gray-300 font-bold text-blue-900 p-1"
        >
            {{ $page.props.flash.success }}
        </div>
        <div class="m-4">
            <Link
                :href="route('posts.create')"
                class="inline-flex items-center px-4 py-2 bg-green-800 border border-transparent rounded-lg font-semibold text-xs text-white uppercase tracking-widest hover:bg-green-700 active:bg-green-900 focus:outline-none focus:border-green-900 focus:ring ring-green-300 disabled:opacity-25 transition ease-in-out duration-150"
            >
                Create Post
            </Link>
        </div>
        <div class="bg-white rounded-md shadow overflow-x-auto">
            <table class="w-full whitespace-nowrap">
                <thead>
                    <tr class="bg-gray-500 text-white font-extrabold">
                        <th class="px-4 py-1 border">Title</th>
                        <th class="px-4 py-1 border">Body</th>
                        <th class="px-4 py-1 border">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in data" :key="item.id">
                        <td class="px-4 py-1 border">{{ item.title }}</td>
                        <td class="px-4 py-1 border">{{ item.body }}</td>
                        <td class="px-4 py-1 border">
                            <PrimaryButton @click="edit(item.id)" class="mr-4">
                                Edit
                            </PrimaryButton>
                            <DangerButton @click="destroy(item.id)">
                                Delete
                            </DangerButton>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </AppLayout>
</template>
