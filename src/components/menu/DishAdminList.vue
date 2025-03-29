<template>
  <div id="app">
    <!-- 筛选和查询区域 -->
    <el-row>
      <el-col :span="8">
        <el-select v-model="selectedCategory" placeholder="请选择菜品分类">
          <el-option label="请选择菜品分类" value=""></el-option>
          <el-option v-for="category in categories" :key="category" :label="category" :value="category"></el-option>
        </el-select>
      </el-col>
      <el-col :span="8">
        <el-input v-model="searchName" placeholder="请输入菜品名称查询" style="width: 100%;"></el-input>
      </el-col>
      <el-col :span="4">
        <el-button type="primary" @click="searchDishes">查询</el-button>
        <el-button @click="resetSearch">重置</el-button>
      </el-col>
    </el-row>
    <!-- 操作按钮区域 -->
    <el-row>
      <el-col :span="4">
        <el-button type="primary" @click="addDish">新增</el-button>
      </el-col>
      <el-col :span="4">
        <el-button type="danger" @click="batchDelete">批量删除</el-button>
      </el-col>
    </el-row>
    <!-- 菜品列表区域 -->
    <el-table :data="filteredDishes" border style="width: 100%;">
      <el-table-column type="selection" v-model="selectedDishes"></el-table-column>
      <el-table-column label="分类名称" prop="category"></el-table-column>
      <el-table-column label="菜品名称" prop="name"></el-table-column>
      <el-table-column label="菜品描述" prop="description"></el-table-column>
      <el-table-column label="价格" prop="price"></el-table-column>
      <el-table-column label="封面">
        <template slot-scope="scope">
          <img :src="scope.row.cover" width="50">
        </template>
      </el-table-column>
      <el-table-column label="份数" prop="quantity"></el-table-column>
      <el-table-column v-for="(_, index) in 4" :key="index" :label="'图片' + (index + 1)">
        <template slot-scope="scope">
          <img :src="scope.row.images[index]" width="50">
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" type="primary" @click="editDish(scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="deleteDish(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页区域 -->
    <el-pagination
        :current-page="currentPage"
        :page-size="pageSize"
        layout="prev, pager, next"
        :total="dishes.length"
        @current-change="handleCurrentChange">
    </el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: ['肉类', '蔬菜', '下饭菜', '鱼'],
      selectedCategory: '',
      searchName: '',
      dishes: [
        {
          category: '肉类',
          name: '葱爆肥牛',
          description: '葱爆...',
          price: '￥55',
          cover: 'https://example.com/cover1.jpg',
          quantity: 24,
          images: ['https://example.com/img1.jpg', 'https://example.com/img2.jpg', 'https://example.com/img3.jpg', 'https://example.com/img4.jpg']
        },
        // 其他菜品数据...
      ],
      currentPage: 1,
      pageSize: 5,
      selectedDishes: []
    }
  },
  computed: {
    filteredDishes() {
      let filtered = this.dishes;
      if (this.selectedCategory) {
        filtered = filtered.filter(dish => dish.category === this.selectedCategory);
      }
      if (this.searchName) {
        filtered = filtered.filter(dish => dish.name.includes(this.searchName));
      }
      const startIndex = (this.currentPage-1) * this.pageSize;
      const endIndex = startIndex + this.pageSize;
      return filtered.slice(startIndex, endIndex);
    }
  },
  methods: {
    searchDishes() {
      this.currentPage = 1;
    },
    resetSearch() {
      this.selectedCategory = '';
      this.searchName = '';
      this.currentPage = 1;
    },
    addDish() {
      console.log('新增菜品');
    },
    editDish(dish) {
      console.log('编辑菜品', dish);
    },
    deleteDish(dish) {
      const index = this.dishes.indexOf(dish);
      if (index > -1) {
        this.dishes.splice(index, 1);
      }
    },
    batchDelete() {
      this.selectedDishes.forEach(dish => {
        const index = this.dishes.indexOf(dish);
        if (index > -1) {
          this.dishes.splice(index, 1);
        }
      });
      this.selectedDishes = [];
    },
    handleCurrentChange(page) {
      this.currentPage = page;
    }
  }
}
</script>

<style>
</style>