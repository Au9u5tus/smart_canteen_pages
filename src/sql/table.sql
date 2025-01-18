CREATE TABLE user (
    user_id INT AUTO_INCREMENT PRIMARY KEY COMMENT '用户的唯一标识符，通过自增长的方式生成，作为主键，用于唯一标识每个用户',
    student_id VARCHAR(20) UNIQUE COMMENT '学生学号，可作为唯一标识，也可根据实际情况使用其他唯一标识，如教职工编号等',
    username VARCHAR(50) NOT NULL UNIQUE COMMENT '用户名，用于登录系统，不能为空且必须唯一，避免用户名冲突',
    password VARCHAR(255) NOT NULL COMMENT '密码，存储加密后的密码，以保障安全性',
    name VARCHAR(100) NOT NULL COMMENT '用户的真实姓名，不能为空，方便在系统中显示用户信息',
    gender ENUM('男', '女', '其他') NOT NULL COMMENT '用户的性别，使用枚举类型，限定取值范围，确保数据的规范性',
    phone VARCHAR(20) COMMENT '用户的联系电话，方便接收短信通知或其他联系需要，可根据实际情况调整长度',
    email VARCHAR(100) UNIQUE COMMENT '用户的电子邮件地址，可用于接收订单信息、系统通知等，必须唯一，避免邮件发送混淆',
    avatar VARCHAR(255) COMMENT '用户头像的存储，可以存储头像的 URL 或存储头像文件的路径，根据实际情况选择存储方式',
    role ENUM('学生', '食堂管理员') NOT NULL DEFAULT '学生' COMMENT '用户在系统中的角色，使用枚举类型，区分不同类型的用户，不同角色可能具有不同的权限',
    registration_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP COMMENT '用户注册系统的日期，使用默认值为当前时间戳，方便记录用户注册时间',
    last_login TIMESTAMP COMMENT '用户最后登录系统的时间，可用于统计用户活跃度等信息',
    status ENUM('正常', '停用', '冻结') DEFAULT '正常' COMMENT '用户账号的状态，方便管理员对用户账号进行管理，默认为正常状态'
);

CREATE TABLE menu (
    menu_id INT AUTO_INCREMENT PRIMARY KEY COMMENT '菜单的唯一标识符，作为主键',
    menu_name VARCHAR(100) NOT NULL COMMENT '菜单名称，不能为空',
    description TEXT COMMENT '菜单描述，可存储较长的文本信息，用于描述菜品',
    price DECIMAL(10, 2) NOT NULL COMMENT '菜品价格，使用 DECIMAL 类型存储，保留两位小数',
    category ENUM('主食', '小吃', '饮料', '甜品', '套餐') NOT NULL COMMENT '菜品分类，使用枚举类型，方便筛选和分类菜品',
    image_url VARCHAR(255) COMMENT '菜品主图的 URL，存储菜品主图的网络地址或文件路径',
    image_url_2 VARCHAR(255) COMMENT '菜品的第二张图片的 URL，存储菜品第二张图片的网络地址或文件路径',
    image_url_3 VARCHAR(255) COMMENT '菜品的第三张图片的 URL，存储菜品第三张图片的网络地址或文件路径',
    image_url_4 VARCHAR(255) COMMENT '菜品的第四张图片的 URL，存储菜品第四张图片的网络地址或文件路径',
    available BOOLEAN DEFAULT TRUE COMMENT '菜品是否可用，用于控制菜品的上下架状态，默认为可用',
    create_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP COMMENT '菜品创建日期，记录菜品添加到菜单的时间',
    update_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '菜品更新日期，记录菜品信息最后更新的时间'
);

CREATE TABLE orders (
    order_id INT AUTO_INCREMENT PRIMARY KEY COMMENT '订单的唯一标识符，作为主键',
    user_id INT NOT NULL COMMENT '用户的唯一标识符，关联用户表的 user_id，用于标识该订单属于哪个用户',
    menu_id INT NOT NULL COMMENT '菜单的唯一标识符，关联菜单表的 menu_id，用于标识该订单中的菜品',
    quantity INT NOT NULL COMMENT '订单中该菜品的数量',
    order_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP COMMENT '订单生成时间，记录用户下单的时间',
    total_price DECIMAL(10, 2) NOT NULL COMMENT '订单的总价，根据菜品价格和数量计算得出',
    status ENUM('待支付', '已支付', '已取消', '已完成') DEFAULT '待支付' COMMENT '订单状态，使用枚举类型，方便管理订单状态',
    payment_method ENUM('微信支付', '支付宝支付', '校园卡支付', '现金支付') COMMENT '支付方式，使用枚举类型，方便记录用户的支付方式',
    delivery_address VARCHAR(255) COMMENT '送餐地址，用于记录用户的送餐位置，可为空，例如用户自取时可能不需要地址',
    delivery_time TIMESTAMP COMMENT '预计送餐时间，可根据实际业务逻辑计算或手动输入，可为空',
    delivery_status ENUM('未配送', '已配送', '配送中') DEFAULT '未配送' COMMENT '送餐状态，使用枚举类型，方便管理送餐状态',
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (menu_id) REFERENCES menu(menu_id)
);

CREATE TABLE order_details (
    detail_id INT AUTO_INCREMENT PRIMARY KEY COMMENT '订单详情的唯一标识符，作为主键',
    order_id INT NOT NULL COMMENT '订单的唯一标识符，关联订单表的 order_id，用于标识该订单详情属于哪个订单',
    menu_id INT NOT NULL COMMENT '菜单的唯一标识符，关联菜单表的 menu_id，用于标识该订单详情中的菜品',
    quantity INT NOT NULL COMMENT '该菜品在订单中的数量',
    unit_price DECIMAL(10, 2) NOT NULL COMMENT '该菜品的单价，使用 DECIMAL 类型存储，保留两位小数',
    sub_total DECIMAL(10, 2) NOT NULL COMMENT '该菜品的小计金额，根据单价和数量计算得出，保留两位小数',
    FOREIGN KEY (order_id) REFERENCES orders(order_id),
    FOREIGN KEY (menu_id) REFERENCES menu(menu_id)
);

CREATE TABLE delivery (
    delivery_id INT AUTO_INCREMENT PRIMARY KEY COMMENT '配送的唯一标识符，作为主键',
    order_id INT NOT NULL COMMENT '订单的唯一标识符，关联订单表的 order_id，用于标识该配送信息属于哪个订单',
    delivery_person_id INT COMMENT '配送人员的唯一标识符，关联配送人员表的 person_id，用于标识负责该订单配送的人员，可为空，可能存在未分配配送员的情况',
    delivery_start_time TIMESTAMP COMMENT '配送开始时间，记录配送人员开始配送的时间，可为空，当开始配送时记录',
    delivery_end_time TIMESTAMP COMMENT '配送结束时间，记录配送人员完成配送的时间，可为空，当完成配送时记录',
    delivery_status ENUM('待分配', '已分配', '已取货', '配送中', '已完成') DEFAULT '待分配' COMMENT '配送状态，使用枚举类型，方便管理配送进度',
    actual_delivery_address VARCHAR(255) COMMENT '实际送餐地址，用于记录实际送餐的地址，可为空，当送餐地址发生变更时使用',
    FOREIGN KEY (order_id) REFERENCES orders(order_id),
    FOREIGN KEY (delivery_person_id) REFERENCES delivery_persons(person_id)
);

CREATE TABLE evaluation (
    evaluation_id INT AUTO_INCREMENT PRIMARY KEY COMMENT '评价的唯一标识符，作为主键',
    menu_id INT NOT NULL COMMENT '菜单的唯一标识符，关联菜单表的 menu_id，用于标识该评价针对哪个菜品',
    user_id INT NOT NULL COMMENT '用户的唯一标识符，关联用户表的 user_id，用于标识该评价由哪个用户做出',
    rating INT NOT NULL COMMENT '评分，使用整数表示，可根据具体的评分范围设定，例如 1 到 5 分',
    comment TEXT COMMENT '用户的评论内容，可存储较长的文本，用户可对菜品和服务进行评价',
    evaluation_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP COMMENT '评价时间，记录用户提交评价的时间，默认为当前时间戳',
    FOREIGN KEY (menu_id) REFERENCES menu(menu_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE likes (
    like_id INT AUTO_INCREMENT PRIMARY KEY COMMENT '点赞的唯一标识符，作为主键',
    user_id INT NOT NULL COMMENT '用户的唯一标识符，关联用户表的 user_id，用于标识点赞的用户',
    menu_id INT NOT NULL COMMENT '菜单的唯一标识符，关联菜单表的 menu_id，用于标识被点赞的菜品',
    liked_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP COMMENT '点赞时间，记录用户点赞的时间，默认为当前时间戳',
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (menu_id) REFERENCES menu(menu_id)
);