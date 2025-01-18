<template>
    <div class="register-container" :style="{ backgroundColor: background }">
        <el-form :model="form" :rules="rules" ref="form" label-width="120px">
            <el-form-item label="学生学号/职工编号" prop="student_id">
                <el-input v-model="form.student_id"></el-input>
            </el-form-item>
            <el-form-item label="用户名" prop="username">
                <el-input v-model="form.username"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input type="password" v-model="form.password"></el-input>
            </el-form-item>
            <el-form-item label="姓名" prop="name">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="性别" prop="gender">
                <el-select v-model="form.gender">
                    <el-option label="男" value="男"></el-option>
                    <el-option label="女" value="女"></el-option>
                    <el-option label="其他" value="其他"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="电话" prop="phone">
                <el-input v-model="form.phone"></el-input>
            </el-form-item>
            <el-form-item label="邮箱" prop="email">
                <el-input v-model="form.email"></el-input>
            </el-form-item>
            <el-form-item label="头像" prop="avatar">
                <el-upload class="upload-demo" action="/your-upload-url"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload"
                >
                <img v-if="form.avatar" :src="form.avatar" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
            </el-form-item>
            <el-form-item label="用户角色" prop="role">
                <el-select v-model="form.role">
                    <el-option label="学生" value="学生"></el-option>
                    <el-option label="食堂管理员" value="食堂管理员"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('form')">注册</el-button>
                <el-button @click="resetForm('form')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                form: {
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
                },
                background: '#f0f0f0' // 背景色，可以修改为你喜欢的颜色
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate(valid => {
                    if (valid) {
                        // 这里可以添加提交表单到后端的逻辑，例如使用 axios 发送 POST 请求
                        console.log('注册成功', this.form);
                    } else {
                        console.log('注册失败，请检查输入');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            handleAvatarSuccess(response, file, fileList) {
                this.form.avatar = response.url; // 假设后端返回头像的 URL
            },
            beforeAvatarUpload(file) {
                const isJPG = file.type === 'image/jpeg' || file.type === 'image/png';
                const isLt2M = file.size / 1024 / 1024 < 2;

                if (!isJPG) {
                    this.$message.error('上传头像图片只能是 JPG 或 PNG 格式!');
                }
                if (!isLt2M) {
                    this.$message.error('上传头像图片大小不能超过 2MB!');
                }
                return isJPG && isLt2M;
            }
        }
    };
</script>

<style scoped>
    .register-container {
        padding: 20px;
        min-height: 100vh; /* 确保背景色铺满整个视口高度 */
    }
    .avatar-uploader.el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }
    .avatar-uploader.el-upload:hover {
        border-color: #409EFF;
    }
    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
    }
    .avatar {
        width: 178px;
        height: 178px;
        display: block;
    }
</style>