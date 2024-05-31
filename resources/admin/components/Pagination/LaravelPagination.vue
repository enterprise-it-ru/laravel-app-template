<script>
import RenderlessLaravelVuePagination from './RenderlessLaravelVuePagination.vue';

export default {
  components: {
    RenderlessLaravelVuePagination
  },
  inheritAttrs: false,
  props: {
    data: {
      type: Object,
      default: () => {
        return {};
      }
    },
    limit: {
      type: Number,
      default: 2
    },
    showDisabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'default',
      validator: value => {
        return ['small', 'default', 'large'].indexOf(value) !== -1;
      }
    },
    align: {
      type: String,
      default: 'left',
      validator: value => {
        return ['left', 'center', 'right'].indexOf(value) !== -1;
      }
    }
  },
  emits: ['pagination-change-page'],
  methods: {
    onPaginationChangePage(page) {
      this.$emit('pagination-change-page', page);
    }
  }
}
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
        <li v-if="slotProps.computed.prevPageUrl || slotProps.showDisabled" class="page-item pagination-prev-nav" :class="{'disabled': !slotProps.computed.prevPageUrl}">
          <a
            class="page-link"
            href="#"
            aria-label="Previous"
            :tabindex="!slotProps.computed.prevPageUrl && -1"
            v-on="slotProps.prevButtonEvents"
          >
            <slot name="prev-nav">
              <span aria-hidden="true">&laquo;</span>
            </slot>
          </a>
        </li>

        <li v-for="(page, key) in slotProps.computed.pageRange" :key="key" class="page-item pagination-page-nav" :class="{ 'active': page == slotProps.computed.currentPage }">
          <a class="page-link" :title="page" href="#" v-on="slotProps.pageButtonEvents(page)">
            {{ page }}
          </a>
        </li>

        <li v-if="slotProps.computed.nextPageUrl || slotProps.showDisabled" class="page-item pagination-next-nav" :class="{'disabled': !slotProps.computed.nextPageUrl}">
          <a
            class="page-link"
            href="#"
            aria-label="Next"
            :tabindex="!slotProps.computed.nextPageUrl && -1"
            v-on="slotProps.nextButtonEvents"
          >
            <slot name="next-nav">
              <span aria-hidden="true">&raquo;</span>
            </slot>
          </a>
        </li>
      </ul>
    </div>
  </RenderlessLaravelVuePagination>
</template>
