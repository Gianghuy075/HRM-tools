# HRM-tools
HRM-tools đóng vai trò là "trạm điều khiển trung tâm" (Control Plane) cho toàn bộ hệ sinh thái quản trị nhân sự. Thay vì một ứng dụng khổng lồ (monolithic), HRM-tools hoạt động theo mô hình Portal với hai nhiệm vụ cốt lõi: xác thực tập trung và quản trị người dùng/quyền.

## The Central Hub
HRM-tools là "trạm điều khiển trung tâm" cho toàn bộ hệ sinh thái quản trị nhân sự. Người dùng chỉ cần đăng nhập một lần tại HRM-tools để truy cập các domain con như payroll.hrm-tools.com, recruitment.hrm-tools.com... mà không cần đăng nhập lại.

## Các tính năng chính
- Centralized Authentication (SSO): Đăng nhập một lần, truy cập xuyên suốt mọi domain con mà không cần đăng nhập lại.
- User & Permission Management: Quản lý hồ sơ nhân viên, phân quyền RBAC và nhóm người dùng tập trung. Mọi thay đổi quyền tại đây có hiệu lực tức thời trên toàn hệ thống.
- Smart Navigation Dashboard: Giao diện hiện đại với thẻ (cards) và menu điều hướng, giúp chuyển đổi giữa các công cụ nhanh và mượt.
- System Audit Logs: Theo dõi lịch sử truy cập và hoạt động của người dùng trên toàn hệ sinh thái.
