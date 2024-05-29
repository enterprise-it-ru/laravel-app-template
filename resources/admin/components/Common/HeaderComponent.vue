<script setup lang="ts">

</script>

<template>
  <div>
    <nav v-if="pageMeta?.breadcrumbs.length > 0" aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link to="/admin">
            Главная
          </router-link>
        </li>
        <li
          v-for="(item, index) in pageMeta.breadcrumbs"
          :key="index"
          class="breadcrumb-item"
          :class="[pageMeta.breadcrumbs.length === (index+1) ? 'active' : '']"
        >
          <router-link v-if="pageMeta.breadcrumbs.length !== (index+1)" :to="item.url">
            {{ item.name }}
          </router-link>
          <span v-else>{{ item.name }}</span>
        </li>
      </ol>
    </nav>
    <h1 class="page-title">
      {{ pageMeta?.title }}
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
