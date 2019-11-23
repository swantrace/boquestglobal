<template>
  <div class="section-header">
    <slot />
  </div>
</template>
<style scoped>
.section-header {
  font-size: 38px;
  line-height: 38px;
  color: #303233;
  font-family: LegacySerifBook, serif;
  margin-bottom: 20px;
}
</style>
<script>
export default {
  name: 'SectionHeader',
}
</script>