<script setup lang="ts">
import { usePage } from "../../composables/page/usePage";
const { pageHeader, breadcrumbs } = usePage()

</script>

<template>
  <div>
    <nav v-if="breadcrumbs.breadcrumbs.items.length > 0" aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link to="/admin">
            Главная
          </router-link>
        </li>
        <li
          v-for="(item, index) in breadcrumbs.breadcrumbs.items"
          :key="index"
          class="breadcrumb-item"
          :class="[breadcrumbs.breadcrumbs.items.length === (index+1) ? 'active' : '']"
        >
          <router-link v-if="breadcrumbs.breadcrumbs.items.length !== (index+1)" :to="item.url">
            {{ item.name }}
          </router-link>
          <span v-else>{{ item.name }}</span>
        </li>
      </ol>
    </nav>
    <h1 class="page-title">
      {{ pageHeader.title }}
    </h1>
  </div>
</template>

<style scoped lang="scss">
.breadcrumb {
  --bs-breadcrumb-font-size: 12px;
  --bs-breadcrumb-margin-bottom: 0.3rem;
}

.page-title {
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 1rem;
}
</style>
