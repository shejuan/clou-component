<template>
  <div class="clou-table">
    <el-table
      ref="multipleTable"
      :data="tableData.records"
      tooltip-effect="dark"
      @selection-change="handleSelectionChange"
      @row-dblclick="mydblclick"
      @row-click="myclick"
      height="100%"
      width="100%"
     >
      <el-table-column
        type="index"
        width="40"
        >
      </el-table-column>
      <el-table-column
        type="selection"
        width="55"
        v-if="tableConfig.showCheckbox === false?false:true">
      </el-table-column>
      <template  v-for="(item,index) in tableName">
        <el-table-column
              :key="index"
              :prop="item.prop"
              :label="item.label"
              :width="item.width"
              v-if="item.width!=='0'">
        </el-table-column>
      </template>
    </el-table>
    <div class="block">
      <el-pagination
        @current-change="handleCurrentChange"
        :current-page="tableData.current" 
        :page-size="tableData.size" layout="total, prev, pager, next, jumper" 
        :total="tableData.total"
        :pager-count="5">
      </el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  name: "ClouTable",
  props: { tableData: Object, tableName: Array,tableConfig: Object},
  data() {
    return {
      multipleSelection: [],
      currentPage4: 4,
      time: null
    };
  },
  methods: {
    // 点击选择框的事件
    handleSelectionChange(val) {
      this.multipleSelection = val;
      this.$emit("select-click", val);
    },
    // 单击一行的点击事件 添加延时器 清除双击之前的单击事件
    myclick(val) {
      var that = this;
      clearTimeout(this.time);
      //执行延时
      that.time = setTimeout(function() {
        that.$refs.multipleTable.toggleRowSelection(val);
      }, 300);
    },
    // 双击一行的点击事件
    mydblclick(val) {
      clearTimeout(this.time);
      this.$emit("row-dblclick", val);
    },
    handleCurrentChange(val) {
      this.$emit("current-change", val);
    }
  },
  created() {}
};
</script>
<style type="css">
.block{
  width: 100%;
}
.block .el-pagination{
  text-align: right;
}
.clou-table .el-pager li{
  min-width: 25px;
}
.clou-table .el-pagination button, .el-pagination span:not([class*=suffix]){
  min-width: auto;
}
</style>