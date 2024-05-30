<script setup lang="ts">
import AdminPageLayout from "../../components/Layout/AdminPageLayout.vue";
import { usePage } from "../../composables/page/usePage";
import { useHead } from '@unhead/vue'

const { pageHeader, breadcrumbsPreset } = usePage()

breadcrumbsPreset.users()
pageHeader.title = 'Пользователи'

useHead({
  title: 'Пользователи'
})

</script>

<template>
  <admin-page-layout>
    <div class="row">
      <div class="col-md-5">
        Компонент <b>admin/pages/Users/index.vue</b>
      </div>
    </div>
  </admin-page-layout>
</template>

<style scoped lang="scss">

</style>
