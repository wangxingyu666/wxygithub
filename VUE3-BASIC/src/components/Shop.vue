<template>
  <div>
    <!-- Table 表格 -->
    <el-table :data="paginatedData" border style="width: 100%">
      <el-table-column prop="date" label="日期" width="180" />
      <el-table-column prop="name" label="姓名" width="180" />
      <el-table-column prop="address" label="地址" />
    </el-table>
    <!-- Pagination 分页 -->
    <el-pagination background layout="total,sizes,prev, pager, next,jumper" :current-page="currentPage"
      :page-size="pageSize" :total="totalData" @size-change="handleSizeChange" @current-change="handleCurrentChange" />

    <!--dialog对话框-Form表单-->
    <el-button type="text" @click="dialogFormVisible = true">
      打开表单
    </el-button>

    <el-dialog v-model="dialogFormVisible" title="Form表单" width="800">
      <el-form :model="form" label-width="auto" style="max-width: 600px">
        <el-form-item label="活动名称">
          <el-input v-model="form.name" />
        </el-form-item>

        <el-form-item label="活动区域">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域1" value="shanghai" />
            <el-option label="区域2" value="beijing" />
          </el-select>
        </el-form-item>

        <el-form-item label="活动时间">
          <el-col :span="11">
            <el-date-picker v-model="form.date1" type="date" placeholder="选择日期" style="width: 100%" />
          </el-col>
          <el-col :span="2" class="text-center">
            <span class="text-gray-500">-</span>
          </el-col>
          <el-col :span="11">
            <el-time-picker v-model="form.date2" placeholder="选择时间" style="width: 100%" />
          </el-col>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="onSubmit">提交</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPage: 1,
      pageSize: 10,
      totalData: 40,
      form:{
              name: '',
              region: '',
              date1: '',
              date2: '',
          }, // 假设总数据量为40  
      tableData: [
        {
          date: '2024-09-24',
          name: '王小鼠',
          address: '江苏南京',
        },
        {
          date: '2024-09-24',
          name: '王小牛',
          address: '江苏无锡',
        },
        {
          date: '2024-09-24',
          name: '王小虎',
          address: '江苏徐州',
        },
        {
          date: '2024-09-24',
          name: '王小兔',
          address: '江苏常州',
        },
        {
          date: '2024-09-24',
          name: '王小龙',
          address: '江苏苏州',
        },
        {
          date: '2024-09-24',
          name: '王小蛇',
          address: '江苏南通',
        },
        {
          date: '2024-09-24',
          name: '王小马',
          address: '江苏连云港',
        },
        {
          date: '2024-09-24',
          name: '王小羊',
          address: '江苏淮安',
        },
        {
          date: '2024-09-24',
          name: '王小猴',
          address: '江苏盐城',
        },
        {
          date: '2024-09-24',
          name: '王小鸡',
          address: '江苏扬州',
        },
        {
          date: '2024-09-24',
          name: '王小狗',
          address: '江苏镇江',
        },
        {
          date: '2024-09-24',
          name: '王小猪',
          address: '江苏泰州',
        },
        {
          date: '2024-09-24',
          name: '王小猫',
          address: '江苏宿迁',
        },
        {
          date: '2024-09-24',
          name: '王小熊',
          address: '上海',
        },
        {
          date: '2024-09-24',
          name: '王小鱼',
          address: '北京',
        },
        {
          date: '2024-09-24',
          name: '王小鹿',
          address: '深圳',
        },
        {
          date: '2024-09-24',
          name: '王小凤',
          address: '杭州',
        },
        {
          date: '2024-09-24',
          name: '王小狼',
          address: '广州',
        }, {
          date: '2024-09-24',
          name: '王小星',
          address: '长沙',
        },
        {
          date: '2024-09-24',
          name: '王小宇',
          address: '成都',
        },
      ],
      dialogTableVisible:false,
      dialogFormVisible: false,
      paginatedData: [], // 用于存储分页后的数据  
    };
  },
  computed: {
    // 计算属性，用于处理分页逻辑  
    paginatedData() {
      const start = (this.currentPage - 1) * this.pageSize;
      const end = start + this.pageSize;
      return this.tableData.slice(start, end);
    }
  },
  methods: {
    handleSizeChange(val) {
      this.pageSize = val;
      this.currentPage = 1; // 重置当前页码为1  
    },
    handleCurrentChange(val) {
      this.currentPage = val;
    },
    onSubmit: function () {
      alert(JSON.stringify(this.form));
    }
  }
};  
</script>

<style>
/* 样式省略 */
</style>