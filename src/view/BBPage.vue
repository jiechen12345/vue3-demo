<template>
    <div class="container">
        <h1>BB Page</h1>
        <p>This is the content of b page.</p>
        <div class="col-12 col-lg-8" style="width: 80%; height: 400px; overflow-y: auto; overflow-x: auto;">
            <MyGrid :rowData="datas" :gridOptions="gridOptions1" :columnDefs="columnDefs1" @gridReady="onGridReady"
                @cellClicked="onCellClicked">
                <template #tbar>
                    <button class="btn custom-btn btn-success btn-block col-lg-3 mb-1 me-3" @click="logSelectedRows">Log
                        Selected
                        Rows</button>
                    <button class="btn custom-btn btn-success btn-block col-lg-3 mb-1" @click="exportToExcel">Export to
                        Excel</button>
                </template>
                <template #bbar>
                    <button class="btn custom-btn btn-success btn-block col-lg-3 mb-1" @click="logSelectedRows">Log
                        Selected
                        Rows</button>
                </template>
            </MyGrid>
        </div>
    </div>
</template>

<script>
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import MyGrid from '@/components/MyGrid.vue';
import * as XLSX from 'xlsx';

export default {
    components: {
        MyGrid
    },
    data() {
        return {
            datas: [
                { PO_NAME: 'name1', PO_COUNT: 5, PO_DESC: 'OOXX' },
                { PO_NAME: 'name2', PO_COUNT: 4, PO_DESC: 'asd' },
                { PO_NAME: 'name3', PO_COUNT: 3, PO_DESC: 'zxc' },
                { PO_NAME: 'name4', PO_COUNT: 1, PO_DESC: 'qwe' },
                { PO_NAME: 'name5', PO_COUNT: 5, PO_DESC: 'asd' },
                { PO_NAME: 'name6', PO_COUNT: 6, PO_DESC: 'OOXzxcX' },
                { PO_NAME: 'name6', PO_COUNT: 68, PO_DESC: 'OOXzasdsadasdsadsasdasdasdadasdasdasdasdasdsadasdasdasdasdasdasdsadasdasdasdasaxcX' },
                { PO_NAME: 'name7', PO_COUNT: 6, PO_DESC: 'OOXzxcX' },
                { PO_NAME: 'name8', PO_COUNT: 6, PO_DESC: 'OOXzxcX' },
                { PO_NAME: 'name9', PO_COUNT: 6, PO_DESC: 'OOXzxcX' },
                { PO_NAME: 'name10', PO_COUNT: 6, PO_DESC: 'OOXzxcX' },
                { PO_NAME: 'nam11', PO_COUNT: 6, PO_DESC: 'OOXzxcX' },
            ],
            gridOptions1: {
                rowSelection: 'multiple',// 設置多選模式
                pagination: true,
                paginationPageSize: 10,
                enableSorting: true,
                enableFilter: true,
                // suppressRowClickSelection: false,
                suppressRowClickSelection: true, //隨便點一格無法選取
            },
            columnDefs1: [
                { headerName: '', checkboxSelection: true, headerCheckboxSelection: true, flex: 1 },
                {
                    headerName: 'Name',
                    field: 'PO_NAME',
                    flex: 2,
                    cellStyle: { textAlign: 'center' },
                    headerClass: 'header-center',
                    cellRenderer: params => {
                        const a = document.createElement('a');
                        a.textContent = params.value;
                        a.style.cursor = 'pointer';
                        a.style.color = '#007bff'; // 加上藍色以模仿超連結的顏色
                        a.style.textDecoration = 'underline'; // 加上下劃線以模仿超連結的樣式
                        a.onclick = () => this.openDetail(params.value);
                        return a;
                    },
                },
                {
                    headerName: 'Count',
                    field: 'PO_COUNT',
                    flex: 2,
                    cellStyle: { textAlign: 'right' },
                    headerClass: 'header-center',
                    editable: true,
                    cellEditor: 'agNumberCellEditor',
                    cellEditorParams: {
                        min: 0,
                        max: 100
                    }
                },
                {
                    headerName: 'Desc',
                    field: 'PO_DESC',
                    flex: 5,
                    cellStyle: { textAlign: 'left' },
                    cellRenderer: this.descCellRenderer,
                    editable: true,
                    headerClass: 'header-center',
                    cellEditor: 'agLargeTextCellEditor',
                    cellEditorPopup: true,
                    cellEditorParams: {
                        maxLength: 100
                    }
                }
            ],

        };
    },
    created() {
        console.log('created')
    },
    mounted() {
        console.log('mounted')
    },
    methods: {
        openDetail(poName) {
            console.log('openDetail 1')
            this.$router.push({ name: 'detail', params: { poName } });
        },
        onGridReady(params) {
            console.log('App ready:', params);
            this.gridApi = params.api; // 儲存 grid API 以便後續使用
        },
        onCellClicked(cell) {
            console.log('App cell:', cell);
        },
        logSelectedRows() {
            // this.gridApi.deselectAll()
            const selectedRows = this.gridApi.getSelectedRows();// 獲取所有選取的資料
            console.log('Selected Rows:', selectedRows);
        },
        descCellRenderer(params) {
            const value = params.value;
            console.log('descCellRenderer', params)
            if (value && value.length > 10) {
                return `<span title="${value}">${value.substring(0, 10)}...</span>`;
            }
            return value;
        },
        exportToExcel() {
            const rowData = [];
            this.gridApi.forEachNode(node => rowData.push(node.data));

            const worksheet = XLSX.utils.json_to_sheet(rowData);
            const workbook = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

            XLSX.writeFile(workbook, 'data.xlsx');
        }
    }
};
</script>

<style scoped>
.custom-btn {
    font-size: 15px;
    /* 調整字體大小 */
    padding: 5px 5px;
    /* 調整內邊距 */
    width: 150px;
}
</style>