<template>
  <span>
    <slot v-bind:user="user">
      {{ user }}
    </slot>
  </span>
</template>

<script>
export default {
  name: "currentuserComponent",
  data() {
    return {
      user: "sreekanth",
    };
  },
};
</script>
