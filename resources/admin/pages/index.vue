<script setup lang="ts">
import AdminPageLayout from "../components/Layout/AdminPageLayout.vue";
import { usePage } from "../composables/page/usePage";
import { useHead } from "@unhead/vue";
const {pageHeader, breadcrumbs} = usePage()

breadcrumbs.reset()
pageHeader.title = 'Главная'

useHead({
  title: 'Главная'
})

</script>

<template>
  <admin-page-layout>
    <div class="row">
      <div class="col-md-5">
        Компонент <b>admin/pages/index.vue</b>
      </div>
    </div>
  </admin-page-layout>
</template>
