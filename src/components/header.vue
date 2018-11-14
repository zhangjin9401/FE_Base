<template>
  <div>
    header
    {{this.message}} - {{this.user}}
  </div>
</template>

<script>
  export default {
    name:'homeHeader',
    data () {
      return {
        message:'hello world'
      }
    },
    props: {
      user:String
    }
  }
</script>

<style lang="less" scoped>
  span{
    color:green
  }
</style>