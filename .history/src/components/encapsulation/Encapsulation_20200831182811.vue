<template>
  <div class="tabletemplate">
    <!-- 动态显示隐藏列功能 -->
    <el-dropdown
      v-if="selectColumns" // 动态列功能是否显示
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
        v-if="selectionShow" // 表格是够显示多选框
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
        v-if="selectColumns ? column.isShow || !isshowShow : true"
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
        v-if="tableOperationShow" // 操作按钮是否显示
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