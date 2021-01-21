<template>
  <div class="todo-item" v-bind:class="{'is-complete':todo.completed}"></div>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null
    };
  },
  name: "TodoItem",
  props: ["todo"],
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
      console.log(slide);
    },
    onSlideEnd(slide) {
      console.log(slide);
      this.sliding = false;
    }
  }
};
</script>
<style  scoped>
</style>