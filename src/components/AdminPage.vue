<template>
    <div class="admin-page-container" style="height: 100%">
        <Header></Header>
        <Menu></Menu>
        <div class="admin-content">
          <router-view></router-view>
        </div>

    </div>
</template>

<script>
    import Header from "@/components/layout/Header";
    import Menu from "@/components/layout/Menu";
    export default {
        name: "AdminPage",
        components:{
            Menu,
            Header
        },
        mounted() {


        },
        data() {
            return {

            }
        },
        methods: {

        }
    }
</script>

<style scoped>

</style>