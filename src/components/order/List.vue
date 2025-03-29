<template>
    <div class="order-management-container">
        <el-button type="primary" size="mini" @click="openAddOrderDialog">添加订单</el-button>
        <el-table :data="orders" style="width: 100%">
            <el-table-column prop="order_id" label="订单 ID" width="100"></el-table-column>
            <el-table-column prop="user_id" label="用户 ID" width="100"></el-table-column>
            <el-table-column prop="menu_id" label="菜单 ID" width="100"></el-table-column>
            <el-table-column prop="quantity" label="数量" width="100"></el-table-column>
            <el-table-column prop="order_time" label="订单时间" width="200"></el-table-column>
            <el-table-column prop="total_price" label="总价" width="100"></el-table-column>
            <el-table-column prop="status" label="订单状态" width="150">
                <template slot-scope="scope">
                    <el-select v-model="scope.row.status" @change="updateOrderStatus(scope.row.order_id, scope.row.status)">
                        <el-option label="待支付" value="待支付"></el-option>
                        <el-option label="已支付" value="已支付"></el-option>
                        <el-option label="已取消" value="已取消"></el-option>
                        <el-option label="已完成" value="已完成"></el-option>
                    </el-select>
                </template>
            </el-table-column>
            <el-table-column prop="payment_method" label="支付方式" width="150">
                <template slot-scope="scope">
                    <el-select v-model="scope.row.payment_method">
                        <el-option label="微信支付" value="微信支付"></el-option>
                        <el-option label="支付宝支付" value="支付宝支付"></el-option>
                        <el-option label="校园卡支付" value="校园卡支付"></el-option>
                        <el-option label="现金支付" value="现金支付"></el-option>
                    </el-select>
                </template>
            </el-table-column>
            <el-table-column prop="delivery_address" label="送餐地址" width="200"></el-table-column>
            <el-table-column prop="delivery_time" label="预计送餐时间" width="200"></el-table-column>
            <el-table-column prop="delivery_status" label="送餐状态" width="150">
                <template slot-scope="scope">
                    <el-select v-model="scope.row.delivery_status" @change="updateDeliveryStatus(scope.row.order_id, scope.row.delivery_status)">
                        <el-option label="未配送" value="未配送"></el-option>
                        <el-option label="已配送" value="已配送"></el-option>
                        <el-option label="配送中" value="配送中"></el-option>
                    </el-select>
                </template>
            </el-table-column>
            <el-table-column label="操作" width="200">
                <template slot-scope="scope">
                    <el-button type="primary" size="mini" @click="openEditOrderDialog(scope.row)">编辑</el-button>
                    <el-button type="danger" size="mini" @click="deleteOrder(scope.row.order_id)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>

        <!-- 添加订单对话框 -->
        <el-dialog :visible.sync="addOrderDialogVisible" title="添加订单" width="30%">
            <el-form :model="newOrder" :rules="rules" ref="addOrderForm" label-width="120px">
                <el-form-item label="用户 ID" prop="user_id">
                    <el-input v-model="newOrder.user_id"></el-input>
                </el-form-item>
                <el-form-item label="菜单 ID" prop="menu_id">
                    <el-input v-model="newOrder.menu_id"></el-input>
                </el-form-item>
                <el-form-item label="数量" prop="quantity">
                    <el-input v-model="newOrder.quantity"></el-input>
                </el-form-item>
                <el-form-item label="总价" prop="total_price">
                    <el-input v-model="newOrder.total_price"></el-input>
                </el-form-item>
                <el-form-item label="支付方式" prop="payment_method">
                    <el-select v-model="newOrder.payment_method">
                        <el-option label="微信支付" value="微信支付"></el-option>
                        <el-option label="支付宝支付" value="支付宝支付"></el-option>
                        <el-option label="校园卡支付" value="校园卡支付"></el-option>
                        <el-option label="现金支付" value="现金支付"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="送餐地址" prop="delivery_address">
                    <el-input v-model="newOrder.delivery_address"></el-input>
                </el-form-item>
                <el-form-item label="预计送餐时间" prop="delivery_time">
                    <el-input v-model="newOrder.delivery_time"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitAddOrder">添加</el-button>
                    <el-button @click="addOrderDialogVisible = false">取消</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>

        <!-- 编辑订单对话框 -->
        <el-dialog :visible.sync="editOrderDialogVisible" title="编辑订单" width="30%">
            <el-form :model="editOrder" :rules="rules" ref="editOrderForm" label-width="120px">
                <el-form-item label="订单 ID" prop="order_id">
                    <el-input v-model="editOrder.order_id" disabled></el-input>
                </el-form-item>
                <el-form-item label="用户 ID" prop="user_id">
                    <el-input v-model="editOrder.user_id"></el-input>
                </el-form-item>
                <el-form-item label="菜单 ID" prop="menu_id">
                    <el-input v-model="editOrder.menu_id"></el-input>
                </el-form-item>
                <el-form-item label="数量" prop="quantity">
                    <el-input v-model="editOrder.quantity"></el-input>
                </el-form-item>
                <el-form-item label="总价" prop="total_price">
                    <el-input v-model="editOrder.total_price"></el-input>
                </el-form-item>
                <el-form-item label="支付方式" prop="payment_method">
                    <el-select v-model="editOrder.payment_method">
                        <el-option label="微信支付" value="微信支付"></el-option>
                        <el-option label="支付宝支付" value="支付宝支付"></el-option>
                        <el-option label="校园卡支付" value="校园卡支付"></el-option>
                        <el-option label="现金支付" value="现金支付"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="送餐地址" prop="delivery_address">
                    <el-input v-model="editOrder.delivery_address"></el-input>
                </el-form-item>
                <el-form-item label="预计送餐时间" prop="delivery_time">
                    <el-input v-model="editOrder.delivery_time"></el-input>
                </el-form-item>
                <el-form-item label="订单状态" prop="status">
                    <el-select v-model="editOrder.status">
                        <el-option label="待支付" value="待支付"></el-option>
                        <el-option label="已支付" value="已支付"></el-option>
                        <el-option label="已取消" value="已取消"></el-option>
                        <el-option label="已完成" value="已完成"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="送餐状态" prop="delivery_status">
                    <el-select v-model="editOrder.delivery_status">
                        <el-option label="未配送" value="未配送"></el-option>
                        <el-option label="已配送" value="已配送"></el-option>
                        <el-option label="配送中" value="配送中"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitEditOrder">保存</el-button>
                    <el-button @click="editOrderDialogVisible = false">取消</el-button>
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
                orders: [],
                addOrderDialogVisible: false,
                editOrderDialogVisible: false,
                newOrder: {
                    user_id: null,
                    menu_id: null,
                    quantity: 0,
                    total_price: 0,
                    payment_method: '',
                    delivery_address: '',
                    delivery_time: ''
                },
                editOrder: {
                    order_id: null,
                    user_id: null,
                    menu_id: null,
                    quantity: 0,
                    total_price: 0,
                    payment_method: '',
                    delivery_address: '',
                    delivery_time: '',
                    status: '待支付',
                    delivery_status: '未配送'
                },
                rules: {
                    user_id: [
                        { required: true, message: '请输入用户 ID', trigger: 'blur' }
                    ],
                    menu_id: [
                        { required: true, message: '请输入菜单 ID', trigger: 'blur' }
                    ],
                    quantity: [
                        { required: true, message: '请输入数量', trigger: 'blur' },
                        { type: 'number', message: '请输入有效的数量', trigger: 'blur' }
                    ],
                    total_price: [
                        { required: true, message: '请输入总价', trigger: 'blur' },
                        { type: 'number', message: '请输入有效的总价', trigger: 'blur' }
                    ],
                    payment_method: [],
                    delivery_address: [],
                    delivery_time: []
                }
            };
        },
        created() {
            this.fetchOrders();
        },
        methods: {
            fetchOrders() {
                //这里需要替换为实际的后端API地址
                axios.get('/api/orders')
                    .then(response => {
                        this.orders = response.data;
                    }).catch(error => {
                        console.error('获取订单信息失败:', error);
                    });
            },
            openAddOrderDialog() {
                this.addOrderDialogVisible = true;
            },
            openEditOrderDialog(order) {
                this.editOrder = Object.assign({}, order);
                this.editOrderDialogVisible = true;
            },
            submitAddOrder() {
                this.$refs.addOrderForm.validate(valid => {
                    if (valid) {
                        axios.post('/api/orders', this.newOrder) // 这里需要替换为实际的后端 API 地址
                            .then(() => {
                                this.addOrderDialogVisible = false;
                                this.fetchOrders();
                                this.resetAddOrderForm();
                            })
                            .catch(error => {
                                console.error('添加订单失败:', error);
                            });
                    } else {
                        console.log('请检查输入');
                    }
                });
            },
            submitEditOrder() {
                this.$refs.editOrderForm.validate(valid => {
                    if (valid) {
                        axios.put(`/api/orders/${this.editOrder.order_id}`, this.editOrder) // 这里需要替换为实际的后端 API 地址
                            .then(() => {
                                this.editOrderDialogVisible = false;
                                this.fetchOrders();
                                this.resetEditOrderForm();
                            })
                            .catch(error => {
                                console.error('编辑订单失败:', error);
                            });
                    } else {
                        console.log('请检查输入');
                    }
                });
            },
            deleteOrder(orderId) {
                axios.delete(`/api/orders/${orderId}`) // 这里需要替换为实际的后端 API 地址
                    .then(() => {
                        this.fetchOrders();
                    })
            }
        }
    }
</script>