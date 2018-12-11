<template>
  <div id="app">
    <h1>{{ msg}}</h1>
    <!-- <clou-form></clou-form> -->
    <!-- <clou-select-tree :treeData="treeData" @getTreeData="handleNodeClick"></clou-select-tree> -->
    <clou-table
      :table-name="tableName"
      :table-data="tableData"
      :table-config="tableConfig"
      @row-click="myclick"
      @row-dblclick="mydblclick"
      @select-click="handleSelectionChange"
      :isToast="isToast"
      ></clou-table>

    
    <input type="button" value="点击隐藏" v-on:click="a=false"/>
    <input type="button" value="双击出现" v-on:dblclick="a=true"/>
    <div style="width:100px; height:100px; background: red" v-show="a"></div>

    <input type="text" value="双击出现"/>
    
    <input type="number" value="1"/>

  </div>
</template>

<script>
import { clouForm, clouSelectTree, clouTable } from "./index.js";

export default {
  name: "app",
  components: {
    //注册插件
    clouForm,
    clouSelectTree,
    clouTable
  },
  data() {
    return {
      a:true,
      msg: "Welcome to Your Vue.js App",
      treeData: [
        {
          label: "一级 1",
          children: [
            {
              label: "二级 1-1"
              // children: [
              //   {
              //     label: "三级 1-1-1"
              //   }
              // ]
            }
          ]
        },
        {
          label: "一级 2",
          children: [
            {
              label: "二级 2-1",
              children: [
                {
                  label: "三级 2-1-1"
                }
              ]
            },
            {
              label: "二级 2-2",
              children: [
                {
                  label: "三级 2-2-1"
                }
              ]
            }
          ]
        },
        {
          label: "一级 3",
          children: [
            {
              label: "二级 3-1",
              children: [
                {
                  label: "三级 3-1-1"
                }
              ]
            },
            {
              label: "二级 3-2",
              children: [
                {
                  label: "三级 3-2-1"
                }
              ]
            }
          ]
        }
      ],
      tableData: {
        records: [
          {
            date: "2016-05-03",
            name: "<span style='color:red;'>王小虎</span>",
            address: '<a href="./">aaaa</a>',
            cell_className: "trmName_class"
          },
          {
            date: "2016-05-02",
            name: '<a href="./">aaaa</a>',
            address: "上海市普陀区金沙江路 1518 弄",
          },
          {
            date: "2016-05-04",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1518 弄",
            cell_className: "trmName_class"
          },
          {
            date: "2016-05-01",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1518 弄",
            cell_className: "trmName_class"
          },
          {
            date: "2016-05-08",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1518 弄"
          },
          {
            date: "2016-05-06",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1518 弄",
            cell_className: "trmName_class"
          },
          {
            date: "2016-05-07",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1518 弄"
          }
        ]
      },
      tableName: [
        {
          prop: "date",
          label: "时间",
          width: "100",
          align: "right"
        },
        {
          prop: "name",
          label: "姓名",
          width: "100",
          align: "center"
        },
        {
          prop: "address",
          label: "地址",
          width: "200",
          align: "left"
        }
      ],
      tableConfig:{
        ischeckbox:false
      },
      isToast: false,
    };
  },
  methods: {
    // clou-select-tree获取到的值
    handleNodeClick(val) {
      console.log(val, "tree树选中过后的值");
    },
    myclick(val) {
      console.log(val, "单击一行的返回事件");
    },
    mydblclick(val) {
      console.log(val, "双击一行的返回事件");
    },
    handleSelectionChange(val) {
      // this.isToast = true
      console.log(val, "点击选择框的事件");
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
