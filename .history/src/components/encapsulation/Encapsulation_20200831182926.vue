<template>
  <div class="tabletemplate">
    <!-- 动态显示隐藏列功能 -->
    <el-dropdown
      v-if="selectColumns" 
      :hide-on-click="false"
      @visible-change="dropdownSelectShow"
      class="el-dropdown-selectColumn"
      trigger="click"
    >
      <span class="dropdown-button" :style="theme.sysTheme.styleLevel4">
        <i
          class="icon iconfont iconcaidan1"
          :style="theme.sysTheme.colorLevel3"
        ></i>
      </span>
      <el-dropdown-menu slot="dropdown" style="text-align: center;">
        <!-- <CheckboxGroup v-model="tableColumnsCheckedShow" @on-change="changeTableColumns"> -->
        <div class="dropdowntable" style="text-align: left;">
          <el-dropdown-item v-for="(item, index) in tableColumns" :key="index">
            <!-- <Checkbox :label="item.title">{{item.title}}</Checkbox> -->
            <template>
              <el-checkbox
                :checked="item.isShow"
                v-model="item.isShow"
                @change="checkChange(item)"
                >{{ item.title }}</el-checkbox
              >
            </template>
          </el-dropdown-item>
        </div>
        <!-- <el-button
          type="primary"
          style="margin: auto;padding: 5px 15px;"
          @click="buttonclick(tableColumns)"
        >确定</el-button> -->
        <!-- </CheckboxGroup> -->
      </el-dropdown-menu>
    </el-dropdown>
 
    <el-table
      :data="tableData"
      stripe
      border
      v-loading="loading"
      highlight-current-row
      :header-cell-style="{
        'background-color': headerBackColor,
        color: '#333'
      }"
      :cell-style="{
        'background-color': '#ffffff',
        'border-color': cellBorderColor
      }"
      :row-style="{ border: 'none' }"
      show-overflow-tooltip
      style="width: 100%;margin-top: 0.24rem;"
      @selection-change="handleSelectionChange"
      ref="multipleTable"
    >
      <!--选择-->
      <el-table-column
        v-if="selectionShow"
        type="selection"
        align="center"
        :width="selectionWith"
      ></el-table-column>
      // 单选框，多选单选只能选则显示一个或者都不显示
      <el-table-column v-if="radioShow && !selectionShow" :width="radioWidth">
        <template slot-scope="scope">
          <el-radio
            v-model="radioVal"
            @change.native="getRow(scope.row)"
          ></el-radio>
        </template>
      </el-table-column>
      <!--序号 自定义列序号-->
      <el-table-column
        v-if="indexShow"
        type="index"
        align="center"
        label="序号"
        fixed="left"
        :width="indexWidth"
      >
        <template slot-scope="scope">
          <span>{{ (page - 1) * size + scope.$index + 1 }}</span>
        </template>
      </el-table-column>
      <!-- :width="column.width ? column.width: ''" -->
      <!-- 表格数据列 -->
      <el-table-column
        align="center"
        v-for="column in tableColumns"
        
        :key="column.key"
        :label="column.title"
        show-overflow-tooltip
      >
        <template slot-scope="scope">
          <span
            v-if="scope.row.activeStatus === '在线'"
            style="color:#13CE66"
            >{{ scope.row.activeStatus }}</span
          >
          <!-- <span v-else-if="scope.row.accessCode">
            <span v-if="scope.row.accessCode === '3'"
              >高于{{ scope.row.additionalRule }}分钟不得分</span
            >
            <span v-else-if="scope.row.accessCode === '4'">无</span>
            <span v-else>低于{{ scope.row.additionalRule }}%不得分</span>
          </span> -->
          <span v-else>{{ scope.row[column.key] }}</span>
        </template>
      </el-table-column>
      <!--操作-->
      <el-table-column
        v-if="tableOperationShow" 
        :width="operationColumnWidth"
        label="操作"
        align="center"
        fixed="right"
      >
        <!-- 操作列按钮的个数，名称，功能都是可以自定义的 -->
        <template slot-scope="scope">
          <!-- <div class="tablecloumnview"> -->
          <span
            class="font-small font-color-light operationSpan"
            v-if="viewDetail"
            @click="tableOperationBtn1Handle(scope.row)"
            >{{ tableOperationText1 }}</span
          >
          <span
            class="font-small font-color-light operationSpan"
            v-if="linkLogin"
            @click="tableOperationBtn2Handle(scope.row)"
            >{{ tableOperationText2 }}</span
          >
          <span
            class="font-small font-color-light operationSpan"
            v-if="linkLogout"
            @click="tableOperationBtn3Handle(scope.row)"
            >{{ tableOperationText3 }}</span
          >
          <!-- </div> -->
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import createUpDeleteGive from "@/components/buttons/createUpDelGive"; // 按钮组件，很简单不做介绍
export default {
  name: "tabletemplate",
  components: {
    createUpDeleteGive
  },
  props: {
    headerBackColor: { // 表头背景颜色
      type: String,
      default: "#F5F5F5"
    },
    cellBackColor: { // 表格单元格背景颜色
      type: String,
      default: "#FFFFFF"
    },
    cellBorderColor: { // 表格单元格边框颜色
      type: String,
      default: "#E6E6E6"
    },
    selectColumns: { // 是否显示动态列功能，默认显示
      // 动态列功能
      type: Boolean,
      default: true
    },
    tableData: { // 表格数据
      type: Array,
      required: true,
      default: function() {
        return [];
      }
    },
    tableColumns: { // 表格列数据
      type: Array,
      required: true,
      default: function() {
        return [];
      }
    },
    isshowShow: {
      // 是否控制列的动态显示 默认控制
      type: Boolean,
      default: true
    },
    page: {
      type: Number,
      default: 1
    },
    size: {
      type: Number,
      default: 10
    },
    selectionWith: {
      type: Number,
      required: false,
      default: 50
    },
    radioWidth: {
      type: Number,
      required: false,
      default: 40
    },
    operationColumnWidth: {
      // 表格操作列宽度
      type: Number,
      required: false,
      default: 100
    },
    indexWidth: {
      type: Number,
      required: false,
      default: 55
    },
    selectionShow: {
      // 多选   默认显示多选
      type: Boolean,
      default: true
    },
    radioShow: {
      // 单选 使用单选应将多选置为false
      type: Boolean,
      default: false
    },
    indexShow: {
      // 序号列
      type: Boolean,
      default: true
    },
    tableOperationShow: {
      // 最后操作列
      type: Boolean,
      required: false,
      default: false
    },
    linkLogin: {
      type: Boolean,
      required: false,
      default: false
    },
    linkLogout: {
      type: Boolean,
      required: false,
      default: false
    },
    viewDetail: {
      type: Boolean,
      default: true
    },
    loading: {
      type: Boolean,
      default: false
    },
    tableOperationText1: {
      type: String,
      default: "查看详情"
    },
    tableOperationText2: {
      type: String,
      default: "链路登录"
    },
    tableOperationText3: {
      type: String,
      default: "链路注销"
    }
  },
  data() {
    return {
      tableColumnsCheckedShow: [],
      radioVal: -1
    };
  },
  methods: {
    handleSelectionChange(val) {
      // console.log(val);
      this.$emit("handleSelectionChange", val);
    },
    tableOperationBtn1Handle(row) {
      this.$emit("tableOperationBtn1Handle", row);
    },
    tableOperationBtn2Handle(row) {
      this.$emit("tableOperationBtn2Handle", row);
    },
    tableOperationBtn3Handle(row) {
      this.$emit("tableOperationBtn3Handle", row);
    },
    checkChange(val) {
      console.log("checkChange");
      // console.log(val);
    },
    getRow(row) {
      // console.log(row);
      this.$emit("giveTableRowData", row);
    },
    buttonclick(row) {},
    reset() {
      this.radioVal = -1;
      this.$refs["multipleTable"].clearSelection();
    },
    dropdownSelectShow(val) {
      if (val === true) {
        // var mo = function(e) {
        //   e.preventDefault();
        // };
        // document.body.style.overflow = "hidden";
        // document.addEventListener("touchmove", mo, false); //禁止页面滑动
        var scorllbar = document.querySelector(".form-table-content");
        scorllbar.addEventListener(
          "scorll",
          function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log("页面滚动事件");
            scorllbar.scrollTop = 0;
          },
          { passive: false }
        );
      }
    }
  },
  mounted() {},
  computed: {
    ...mapGetters(["currentNav", "theme"])
  }
};
</script>
<style lang="scss" scoped>
.tabletemplate {
  .el-dropdown-selectColumn {
    position: relative;
    float: right;
    .dropdown-button {
      cursor: pointer;
      position: absolute;
      z-index: 1000;
      top: 0px;
      left: -16px;
    }
    .dropdowntable {
      width: 100%;
      max-height: 200px !important;
      overflow: auto !important;
    }
  }
  .selectColumn {
    margin-bottom: 10px;
    height: auto;
  }
  .operationSpan {
    display: inline-block;
    width: 0.7rem;
    margin: 0 0.05rem;
    min-width: 40px;
    text-align: center;
    white-space: nowrap;
    cursor: pointer;
    font-size: 12px;
    font-family: "MicrosoftYaHei";
    font-weight: 400;
  }
}
</style>