<script setup lang="ts">
import RenderlessLaravelVuePagination from './RenderlessLaravelVuePagination.vue';
import { withDefaults, computed } from 'vue';
import { useRoute } from 'vue-router';
import { getQuery } from 'ufo'

const route = useRoute()

interface Props {
  data?: object
  limit?: number
  showDisabled?: boolean
  size?: 'small' | 'default' | 'large'
  align?: 'left' | 'center' | 'right'
  pageQueryParamName?: string
}

const props = withDefaults(defineProps<Props>(), {
  data: () => ({}),
  limit: 2,
  showDisabled: false,
  size: 'default',
  align: 'left',
  pageQueryParamName: 'page'
});

const emit = defineEmits(['pagination-change-page']);

const getRouterLinkTo = (page: number | null) => {
  const currentQuery = getQuery(document.location.href)
  if (page === null) {
    return {...currentQuery}
  }

  currentQuery[props.pageQueryParamName] = page.toString()
  return {
    name: route.name || route.path,
    query: currentQuery,
  }
}

const prevPageLink = computed(() => {
  if (props.data.current_page > 1) {
    return getRouterLinkTo(props.data.current_page - 1);
  }
  return null;
});

const nextPageLink = computed(() => {
  if (props.data.current_page < props.data.last_page) {
    return getRouterLinkTo(props.data.current_page + 1);
  }
  return null;
});

const onPaginationChangePage = (page) => {
  emit('pagination-change-page', page);
};
</script>

<template>
  <RenderlessLaravelVuePagination
    v-slot="slotProps"
    :data="data"
    :limit="limit"
    :show-disabled="showDisabled"
    :size="size"
    :align="align"
    @pagination-change-page="onPaginationChangePage"
  >
    <div class="mt-4">
      <div class="mb-2">
        Всего: {{ slotProps.computed.total }}
      </div>
      <ul
        v-if="slotProps.computed.total > slotProps.computed.perPage"
        v-bind="$attrs"
        class="pagination"
        :class="{
          'pagination-sm': slotProps.size === 'small',
          'pagination-lg': slotProps.size === 'large',
          'justify-content-center': slotProps.align === 'center',
          'justify-content-end': slotProps.align === 'right'
        }"
      >
        <li
          v-if="slotProps.computed.prevPageUrl || showDisabled"
          class="page-item pagination-prev-nav"
          :class="{'disabled': !prevPageLink}"
        >
          <router-link
            class="page-link"
            :to="prevPageLink || {}"
            :tabindex="!prevPageLink && -1"
            aria-label="Previous"
            :event="!prevPageLink ? '' : 'click'"
            @click="prevPageLink && onPaginationChangePage(slotProps.computed.currentPage - 1)"
          >
            <slot name="prev-nav">
              <span aria-hidden="true">&laquo;</span>
            </slot>
          </router-link>
        </li>

        <li
          v-for="(page, key) in slotProps.computed.pageRange"
          :key="key"
          class="page-item pagination-page-nav"
          :class="{ 'active': page == slotProps.computed.currentPage }"
        >
          <router-link
            class="page-link"
            :title="page.toString()"
            :to="getRouterLinkTo(page)"
            @click="onPaginationChangePage(page)"
          >
            {{ page }}
          </router-link>
        </li>

        <li
          v-if="slotProps.computed.nextPageUrl || showDisabled"
          class="page-item pagination-next-nav"
          :class="{'disabled': !nextPageLink}"
        >
          <router-link
            class="page-link"
            :to="nextPageLink || {}"
            :tabindex="!nextPageLink && -1"
            aria-label="Next"
            :event="!nextPageLink ? '' : 'click'"
            @click="nextPageLink && onPaginationChangePage(slotProps.computed.currentPage + 1)"
          >
            <slot name="next-nav">
              <span aria-hidden="true">&raquo;</span>
            </slot>
          </router-link>
        </li>
      </ul>
    </div>
  </RenderlessLaravelVuePagination>
</template>
