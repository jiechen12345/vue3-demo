<template>
    <div class="container">
        <div class="header">
            <button class="back-button" @click="goBack">
                <span>&larr;</span> <!-- 向左箭頭 -->
            </button>
        </div>
        <h1>Detail Page</h1>
        <div class="form-group">
            <label for="poName">PO Name:</label>
            <input type="text" id="poName" class="form-control" v-model="poName" />
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            poName: ''
        };
    },
    created() {
        // 取得路由參數並設置到 poName
        this.poName = this.$route.params.poName;
    },
    methods: {
        goBack() {
            this.$router.go(-1); // 返回上一頁
        }
    }
};
</script>

<style scoped>
.container {
    margin-top: 20px;
}

.back-button {
    font-size: 20px;
    text-decoration: none;
    margin-bottom: 20px;
    background: none;
    border: none;
    cursor: pointer;
    /* 使按鈕可點擊 */
    color: #007bff;
    /* 按鈕顏色 */
}
</style>
