<template>
    <div class="menu-management-container">
        <el-button type="primary" @click="openAddMenuDialog">添加菜品</el-button>
        <el-table :data="menus" style="width: 100%">
            <el-table-column prop="menu_id" label="菜单 ID" width="100"></el-table-column>
            <el-table-column prop="menu_name" label="菜品名称" width="200"></el-table-column>
            <el-table-column prop="description" label="描述" width="300"></el-table-column>
            <el-table-column prop="price" label="价格" width="100"></el-table-column>
            <el-table-column prop="category" label="分类" width="150"></el-table-column>
            <el-table-column prop="image_url" label="主图" width="200">
                <template slot-scope="scope">
                    <img :src="scope.row.image_url" :alt="scope.row.menu_name" style="width: 50px; height: 50px;">
                </template>
            </el-table-column>
            <el-table-column prop="image_url_2" label="图片 2" width="200">
                <template slot-scope="scope">
                    <img :src="scope.row.image_url_2" :alt="scope.row.menu_name" style="width: 50px; height: 50px;">
                </template>
            </el-table-column>
            <el-table-column prop="image_url_3" label="图片 3" width="200">
                <template slot-scope="scope">
                    <img :src="scope.row.image_url_3" :alt="scope.row.menu_name" style="width: 50px; height: 50px;">
                </template>
            </el-table-column>
            <el-table-column prop="image_url_4" label="图片 4" width="200">
                <template slot-scope="scope">
                    <img :src="scope.row.image_url_4" :alt="scope.row.menu_name" style="width: 50px; height: 50px;">
                </template>
            </el-table-column>
            <el-table-column prop="available" label="可用" width="100">
                <template slot-scope="scope">
                    <el-switch v-model="scope.row.available"></el-switch>
                </template>
            </el-table-column>
            <el-table-column prop="create_date" label="创建日期" width="200"></el-table-column>
            <el-table-column prop="update_date" label="更新日期" width="200"></el-table-column>
            <el-table-column label="操作" width="200">
                <template slot-scope="scope">
                    <el-button type="primary" size="mini" @click="openEditMenuDialog(scope.row)">编辑</el-button>
                    <el-button type="danger" size="mini" @click="deleteMenu(scope.row.menu_id)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>

        <!-- 添加菜品对话框 -->
        <el-dialog :visible.sync="addMenuDialogVisible" title="添加菜品" width="30%">
            <el-form :model="newMenu" :rules="rules" ref="addMenuForm" label-width="120px">
                <el-form-item label="菜品名称" prop="menu_name">
                    <el-input v-model="newMenu.menu_name"></el-input>
                </el-form-item>
                <el-form-item label="描述" prop="description">
                    <el-input type="textarea" v-model="newMenu.description"></el-input>
                </el-form-item>
                <el-form-item label="价格" prop="price">
                    <el-input v-model="newMenu.price"></el-input>
                </el-form-item>
                <el-form-item label="分类" prop="category">
                    <el-select v-model="newMenu.category">
                        <el-option label="主食" value="主食"></el-option>
                        <el-option label="小吃" value="小吃"></el-option>
                        <el-option label="饮料" value="饮料"></el-option>
                        <el-option label="甜品" value="甜品"></el-option>
                        <el-option label="套餐" value="套餐"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="主图 URL" prop="image_url">
                    <el-input v-model="newMenu.image_url"></el-input>
                </el-form-item>
                <el-form-item label="图片 2 URL" prop="image_url_2">
                    <el-input v-model="newMenu.image_url_2"></el-input>
                </el-form-item>
                <el-form-item label="图片 3 URL" prop="image_url_3">
                    <el-input v-model="newMenu.image_url_3"></el-input>
                </el-form-item>
                <el-form-item label="图片 4 URL" prop="image_url_4">
                    <el-input v-model="newMenu.image_url_4"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitAddMenu">添加</el-button>
                    <el-button @click="addMenuDialogVisible = false">取消</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>

        <!-- 编辑菜品对话框 -->
        <el-dialog :visible.sync="editMenuDialogVisible" title="编辑菜品" width="30%">
            <el-form :model="editMenu" :rules="rules" ref="editMenuForm" label-width="120px">
                <el-form-item label="菜单 ID" prop="menu_id">
                    <el-input v-model="editMenu.menu_id" disabled></el-input>
                </el-form-item>
                <el-form-item label="菜品名称" prop="menu_name">
                    <el-input v-model="editMenu.menu_name"></el-input>
                </el-form-item>
                <el-form-item label="描述" prop="description">
                    <el-input type="textarea" v-model="editMenu.description"></el-input>
                </el-form-item>
                <el-form-item label="价格" prop="price">
                    <el-input v-model="editMenu.price"></el-input>
                </el-form-item>
                <el-form-item label="分类" prop="category">
                    <el-select v-model="editMenu.category">
                        <el-option label="主食" value="主食"></el-option>
                        <el-option label="小吃" value="小吃"></el-option>
                        <el-option label="饮料" value="饮料"></el-option>
                        <el-option label="甜品" value="甜品"></el-option>
                        <el-option label="套餐" value="套餐"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="主图 URL" prop="image_url">
                    <el-input v-model="editMenu.image_url"></el-input>
                </el-form-item>
                <el-form-item label="图片 2 URL" prop="image_url_2">
                    <el-input v-model="editMenu.image_url_2"></el-input>
                </el-form-item>
                <el-form-item label="图片 3 URL" prop="image_url_3">
                    <el-input v-model="editMenu.image_url_3"></el-input>
                </el-form-item>
                <el-form-item label="图片 4 URL" prop="image_url_4">
                    <el-input v-model="editMenu.image_url_4"></el-input>
                </el-form-item>
                <el-form-item label="可用" prop="available">
                    <el-switch v-model="editMenu.available"></el-switch>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitEditMenu">保存</el-button>
                    <el-button @click="editMenuDialogVisible = false">取消</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        data() {
            return {
                menus: [],
                addMenuDialogVisible: false,
                editMenuDialogVisible: false,
                newMenu: {
                    menu_name: '',
                    description: '',
                    price: 0,
                    category: '主食',
                    image_url: '',
                    image_url_2: '',
                    image_url_3: '',
                    image_url_4: ''
                },
                editMenu: {
                    menu_id: null,
                    menu_name: '',
                    description: '',
                    price: 0,
                    category: '主食',
                    image_url: '',
                    image_url_2: '',
                    image_url_3: '',
                    image_url_4: '',
                    available: true
                },
                rules: {
                    menu_name: [
                        { required: true, message: '请输入菜品名称', trigger: 'blur' },
                        { min: 1, max: 100, message: '长度在 1 到 100 个字符之间', trigger: 'blur' }
                    ],
                    description: [
                        { max: 500, message: '长度不能超过 500 个字符', trigger: 'blur' }
                    ],
                    price: [
                        { required: true, message: '请输入价格', trigger: 'blur' },
                        { type: 'number', message: '请输入有效的价格', trigger: 'blur' }
                    ],
                    category: [],
                    image_url: [],
                    image_url_2: [],
                    image_url_3: [],
                    image_url_4: []
                }
            };
        },
        created() {
            this.fetchMenus();
        },
        methods: {
            fetchMenus() {
                axios.get('/api/menus') // 这里需要替换为实际的后端 API 地址
                    .then(response => {
                        this.menus = response.data;
                    })
                    .catch(error => {
                        console.error('获取菜单信息失败:', error);
                    });
            },
            openAddMenuDialog() {
                this.addMenuDialogVisible = true;
            },
            openEditMenuDialog(menu) {
                this.editMenu = Object.assign({}, menu);
                this.editMenuDialogVisible = true;
            },
            submitAddMenu() {
                this.$refs.addMenuForm.validate(valid => {
                    if (valid) {
                        axios.post('/api/menus', this.newMenu) // 这里需要替换为实际的后端 API 地址
                            .then(() => {
                                this.addMenuDialogVisible = false;
                                this.fetchMenus();
                                this.resetAddMenuForm();
                            })
                            .catch(error => {
                                console.error('添加菜品失败:', error);
                            });
                    } else {
                        console.log('请检查输入');
                    }
                });
            },
            submitEditMenu() {
                this.$refs.editMenuForm.validate(valid => {
                    if (valid) {
                        axios.put(`/api/menus/${this.editMenu.menu_id}`, this.editMenu) // 这里需要替换为实际的后端 API 地址
                            .then(() => {
                                this.editMenuDialogVisible = false;
                            })
                    }
                })
            }
        }
    }
 </script>
