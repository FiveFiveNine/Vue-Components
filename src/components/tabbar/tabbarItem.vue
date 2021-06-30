<template>
  <div class="tab-bar-item" @click="activeClick">
    <div v-if="isActive">
      <slot name="icon-item-active"></slot>
    </div>
    <div v-else>
      <slot name="icon-item"></slot>
    </div>
    <div :style="'color:' + activeStyle">
      <slot name="text-item"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabBarItem',
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  data () {
    return {
    }
  },
  computed: {
    isActive () {
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle () {
      return this.isActive ? this.activeColor : ''
    }
  },
  methods: {
    activeClick () {
      this.$router.replace(this.path)
    }
  }
}
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
}
.tab-bar-item img {
  width: 24px;
  height: 24px;
  vertical-align: middle;
  margin-top: 3px;
  margin-bottom: 1px;
}
</style>
