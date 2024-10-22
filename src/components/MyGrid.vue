<template>
    <div class="itxst">
        <slot name="tbar"></slot>
        <ag-grid-vue style="width: 100%;height: 69%;" class="table ag-theme-balham" :columnDefs="columnDefs"
            :rowData="rowData" :gridOptions="mergedGridOptions" @gridReady="onGridReady" @cellClicked="onCellClicked">
        </ag-grid-vue>
        <slot name="bbar"></slot>
    </div>
</template>

<script>
import { AgGridVue } from 'ag-grid-vue3';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

export default {
    components: {
        AgGridVue,
    },
    props: {
        rowData: {
            type: Array,
            default: () => []
        },
        columnDefs: {
            type: Array,
            default: () => []
        },
        gridOptions: {
            type: Object,
            default: () => ({})
        },
        // gridStyle: {
        //     type: Object,
        //     default: () => ({ width: '80%', height: '200px' })
        // }
    },
    computed: {
        mergedGridOptions() {
            return {
                ...this.getDefaultGridOptions(),
                ...this.gridOptions
            };
        }
    },
    methods: {
        getDefaultGridOptions() {
            return {
                rowSelection: 'single', // 預設為單選模式 multiple
                suppressRowClickSelection: false, // 禁用點擊行選擇
                pagination: true,
                paginationPageSize: 3,
                paginationPageSizeSelector: [3, 10, 20], // 指定頁面大小選項
                enableSorting: true,
                enableFilter: true
                // Other grid options you may need
            };
        },
        onGridReady(params) {
            this.gridApi = params.api; // 儲存 grid API 以便後續使用
            this.$emit('gridReady', params);// 向父組件傳遞事件
        },
        onCellClicked(cell) {
            this.$emit('cellClicked', cell);// 向父組件傳遞事件
        },
    }
};
</script>
<style scoped>
.ag-grid-vue {
    width: 100%;
    height: 100%;
}

.itxst {
    height: 100%;
    width: 100%;
}
</style>
