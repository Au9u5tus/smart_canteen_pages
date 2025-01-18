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