<template>
    <div class="user-management-container">
        <el-button type="primary" @click="openAddUserDialog">添加用户</el-button>
        <el-table :data="users" style="width: 100%">
            <el-table-column prop="user_id" label="用户 ID" width="100"></el-table-column>
            <el-table-column prop="student_id" label="学生学号/职工编号" width="150"></el-table-column>
            <el-table-column prop="username" label="用户名" width="150"></el-table-column>
            <el-table-column prop="name" label="姓名" width="150"></el-table-column>
            <el-table-column prop="gender" label="性别" width="100"></el-table-column>
            <el-table-column prop="phone" label="电话" width="150"></el-table-column>
            <el-table-column prop="email" label="邮箱" width="200"></el-table-column>
            <el-table-column prop="avatar" label="头像" width="200">
                <template slot-scope="scope">
                    <img :src="scope.row.avatar" :alt="scope.row.name" style="width: 50px; height: 50px;">
                </template>
            </el-table-column>
            <el-table-column prop="role" label="角色" width="150"></el-table-column>
            <el-table-column prop="registration_date" label="注册日期" width="200"></el-table-column>
            <el-table-column prop="last_login" label="最后登录时间" width="200"></el-table-column>
            <el-table-column prop="status" label="状态" width="150"></el-table-column>
            <el-table-column label="操作" width="200">
                <template slot-scope="scope">
                    <el-button type="primary" size="mini" @click="openEditUserDialog(scope.row)">编辑</el-button>
                    <el-button type="danger" size="mini" @click="deleteUser(scope.row.user_id)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>

        <!-- 添加用户对话框 -->
        <el-dialog :visible.sync="addUserDialogVisible" title="添加用户" width="30%">
            <el-form :model="newUser" :rules="rules" ref="addUserForm" label-width="120px">
                <el-form-item label="学生学号/职工编号" prop="student_id">
                    <el-input v-model="newUser.student_id"></el-input>
                </el-form-item>
                <el-form-item label="用户名" prop="username">
                    <el-input v-model="newUser.username"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input type="password" v-model="newUser.password"></el-input>
                </el-form-item>
                <el-form-item label="姓名" prop="name">
                    <el-input v-model="newUser.name"></el-input>
                </el-form-item>
                <el-form-item label="性别" prop="gender">
                    <el-select v-model="newUser.gender">
                        <el-option label="男" value="男"></el-option>
                        <el-option label="女" value="女"></el-option>
                        <el-option label="其他" value="其他"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="电话" prop="phone">
                    <el-input v-model="newUser.phone"></el-input>
                </el-form-item>
                <el-form-item label="邮箱" prop="email">
                    <el-input v-model="newUser.email"></el-input>
                </el-form-item>
                <el-form-item label="头像" prop="avatar">
                    <el-input v-model="newUser.avatar"></el-input>
                </el-form-item>
                <el-form-item label="角色" prop="role">
                    <el-select v-model="newUser.role">
                        <el-option label="学生" value="学生"></el-option>
                        <el-option label="食堂管理员" value="食堂管理员"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitAddUser">添加</el-button>
                    <el-button @click="addUserDialogVisible = false">取消</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>

        <!-- 编辑用户对话框 -->
        <el-dialog :visible.sync="editUserDialogVisible" title="编辑用户" width="30%">
            <el-form :model="editUser" :rules="rules" ref="editUserForm" label-width="120px">
                <el-form-item label="用户 ID" prop="user_id">
                    <el-input v-model="editUser.user_id" disabled></el-input>
                </el-form-item>
                <el-form-item label="学生学号/职工编号" prop="student_id">
                    <el-input v-model="editUser.student_id"></el-input>
                </el-form-item>
                <el-form-item label="用户名" prop="username">
                    <el-input v-model="editUser.username"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input type="password" v-model="editUser.password"></el-input>
                </el-form-item>
                <el-form-item label="姓名" prop="name">
                    <el-input v-model="editUser.name"></el-input>
                </el-form-item>
                <el-form-item label="性别" prop="gender">
                    <el-select v-model="editUser.gender">
                        <el-option label="男" value="男"></el-option>
                        <el-option label="女" value="女"></el-option>
                        <el-option label="其他" value="其他"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="电话" prop="phone">
                    <el-input v-model="editUser.phone"></el-input>
                </el-form-item>
                <el-form-item label="邮箱" prop="email">
                    <el-input v-model="editUser.email"></el-input>
                </el-form-item>
                <el-form-item label="头像" prop="avatar">
                    <el-input v-model="editUser.avatar"></el-input>
                </el-form-item>
                <el-form-item label="角色" prop="role">
                    <el-select v-model="editUser.role">
                        <el-option label="学生" value="学生"></el-option>
                        <el-option label="食堂管理员" value="食堂管理员"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitEditUser">保存</el-button>
                    <el-button @click="editUserDialogVisible = false">取消</el-button>
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
                users: [],
                addUserDialogVisible: false,
                editUserDialogVisible: false,
                newUser: {
                    student_id: '',
                    username: '',
                    password: '',
                    name: '',
                    gender: '男',
                    phone: '',
                    email: '',
                    avatar: '',
                    role: '学生'
                },
                editUser: {
                    user_id: null,
                    student_id: '',
                    username: '',
                    password: '',
                    name: '',
                    gender: '男',
                    phone: '',
                    email: '',
                    avatar: '',
                    role: '学生'
                },
                rules: {
                    student_id: [
                        { required: true, message: '请输入学生学号/职工编号', trigger: 'blur' },
                        { min: 5, max: 20, message: '长度在 5 到 20 个字符之间', trigger: 'blur' }
                    ],
                    username: [
                        { required: true, message: '请输入用户名', trigger: 'blur' },
                        { min: 3, max: 50, message: '长度在 3 到 50 个字符之间', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' },
                        { min: 6, message: '密码长度至少为 6 位', trigger: 'blur' }
                    ],
                    name: [
                        { required: true, message: '请输入姓名', trigger: 'blur' },
                        { max: 100, message: '长度不能超过 100 个字符', trigger: 'blur' }
                    ],
                    gender: [
                        { required: true, message: '请选择性别', trigger: 'change' }
                    ],
                    phone: [
                        { max: 20, message: '长度不能超过 20 个字符', trigger: 'blur' }
                    ],
                    email: [
                        { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur' },
                        { max: 100, message: '长度不能超过 100 个字符', trigger: 'blur' }
                    ],
                    avatar: [],
                    role: []
                }
            };
        },
        created() {
            this.fetchUsers();
        },
        methods: {
            fetchUsers() {
                axios.get('/api/users') // 这里需要替换为实际的后端 API 地址
                    .then(response => {
                        this.users = response.data;
                    })
                    .catch(error => {
                        console.error('获取用户信息失败:', error);
                    });
            },
            openAddUserDialog() {
                this.addUserDialogVisible = true;
            },
            openEditUserDialog(user) {
                this.editUser = Object.assign({}, user);
                this.editUserDialogVisible = true;
            },
            submitAddUser() {
                this.$refs.addUserForm.validate(valid => {
                    if (valid) {
                        axios.post('/api/users', this.newUser) // 这里需要替换为实际的后端 API 地址
                            .then(() => {
                                this.addUserDialogVisible = false;
                                this.fetchUsers();
                                this.resetAddUserForm();
                            })
                            .catch(error => {
                                console.error('添加用户失败:', error);
                            });
                    } else {
                        console.log('请检查输入');
                    }
                });
            },
            submitEditUser() {
                this.$refs.editUserForm.validate(valid => {
                    if (valid) {
                        axios.put(`/api/users/${this.editUser.user_id}`, this.editUser) // 这里需要替换为实际的后端 API 地址
                            .then(() => {
                                this.editUserDialogVisible = false;
                                this.fetchUsers();
                                this.resetEditUserForm();
                            })
                            .catch(error => {
                                console.error('编辑用户失败:', error);
                            });
                    } else {
                        console.log('请检查输入');
                    }
                });
            },
            deleteUser(userId) {
                axios.delete(`/api/users/${userId}`) // 这里需要替换为实际的后端 API 地址
                    .then(() => {
                        this.fetchUsers();
                    })
                    .catch(error => {
                        console.error('删除用户失败:', error);
                    });
            },
            resetAddUserForm() {
                this.$refs.addUserForm.resetFields();
                this.newUser = {
                    student_id: '',
                    username: '',
                    password: '',
                    name: '',
                    gender: '男',
                    phone: '',
                    email: '',
                    avatar: '',
                    role: '学生'
                };
            },
            resetEditUserForm() {
                this.$refs.editUserForm.resetFields();
                this.editUser = {
                    user_id: null,
                    student_id: '',
                    username: '',
                    password: '',
                    name: '',
                    gender: '男',
                    phone: '',
                    email: '',
                    avatar: '',
                    role: '学生'
                };
            }
        }
    };
</script>

<style scoped>
    .user-management-container {
        padding: 20px;
    }
</style>