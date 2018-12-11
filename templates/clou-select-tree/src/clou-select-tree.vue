<template>
  <div class="clou-select-tree">
    <el-select v-model="value" placeholder="请选择">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
        class="clou-tree_element-li">
      </el-option>
      <el-tree :data="treeData" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
    </el-select>
  </div>
</template>
<script>
export default {
  name: "ClouSlectTree",
  props:['treeData'],
  data() {
    return {
      options: [
        {
          value: "",
          label: ""
        }
      ],
      value: "",
      defaultProps: {
        children: "children",
        label: "label"
      }
    };
  },
  methods: {
    handleNodeClick(data) {
      if(!data.children &&data.label) {
        this.value = data.label
        this.$emit('getTreeData',data.label)
      }
    }
  },
  mounted() {
  }
};
</script>
<style scoped lang="scss">
.clou-tree_element-li{
  display: none;
}
</style>
