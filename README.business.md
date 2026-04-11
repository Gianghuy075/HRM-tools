# HRM-tools - Tài Liệu Nghiệp Vụ

## 1. Mục đích hệ thống

HRM-tools là trạm điều phối trung tâm cho toàn bộ hệ sinh thái quản trị nhân sự. Người dùng đăng nhập một lần và làm việc xuyên suốt trên nhiều hệ thống con thông qua một giao diện thống nhất.

## 2. Giá trị mang lại

- Đăng nhập một lần (SSO), giảm thao tác lặp.
- Quản trị tài khoản tập trung, dễ kiểm soát vòng đời user.
- Quản trị nhóm quyền theo trang và chức năng bằng checkbox.
- Theo dõi nhật ký thao tác với màu nhận diện nhanh theo loại hành động.
- Chuẩn hóa cách vận hành và phân quyền giữa các phòng ban.

## 3. Chức năng theo trang

### 3.1 Bảng điều khiển

- Hiển thị các hệ thống con: BSC, CRM, Chấm công, Tính lương, Tuyển dụng.
- Hiển thị trạng thái vận hành từng hệ thống.
- Điều hướng nhanh đến các khu quản trị.

### 3.2 Quản lý tài khoản

- Danh sách tài khoản dạng bảng.
- Thao tác CRUD:
  - Thêm tài khoản.
  - Sửa tài khoản.
  - Xóa tài khoản.
- Gán tài khoản vào nhóm quyền có trong trang Phân quyền.
- Theo dõi trạng thái tài khoản (đang hoạt động, cần rà soát, đã khóa).

### 3.3 Phân quyền RBAC theo nhóm quyền

- Cột trái: quản lý danh sách tên nhóm quyền.
- Cột phải: checkbox quyền truy cập theo từng trang và chức năng.
- Nhóm quyền quyết định user có thể truy cập trang nào và dùng tính năng nào.

### 3.4 Nhật ký hệ thống

- Hiển thị đầy đủ thông tin thao tác:
  - Người sử dụng chức năng.
  - Đối tượng bị tác động.
  - Chức năng đã thao tác.
  - Thời gian thao tác.
- Màu nhận diện theo hành động:
  - Thêm: xanh.
  - Sửa: vàng.
  - Xóa: đỏ.

### 3.5 Gói sản phẩm

- 4 gói sản phẩm:
  - Gói thử nghiệm.
  - Gói quản trị.
  - Gói nâng cao.
  - Gói tùy chỉnh.
- Mỗi gói có mô tả, giá, quyền lợi và CTA.

### 3.6 Cài đặt SSO và bảo mật

- Quản lý nhà cung cấp SSO.
- Quản lý domain cho phép truy cập.
- Điều chỉnh chính sách bảo mật.

## 4. Vai trò điển hình

- Quản trị HR: quản trị tài khoản, nhóm quyền, cấu hình bảo mật.
- Quản lý bộ phận: theo dõi user thuộc phạm vi quản lý, thực hiện các tác vụ được cấp.
- Chuyên viên: truy cập các trang/chức năng theo nhóm quyền được gán.

## 5. Kịch bản sử dụng tiêu biểu

1. Quản trị tạo tài khoản mới tại trang Quản lý tài khoản.
2. Gán tài khoản vào nhóm quyền phù hợp.
3. Tại trang Phân quyền, quản trị cấu hình checkbox quyền của nhóm.
4. Người dùng đăng nhập và chỉ thấy các trang/chức năng được cấp.
5. Mọi thay đổi được ghi nhận ở Nhật ký hệ thống.

## 6. Phạm vi hiện tại

- Dữ liệu hiện tại là mock data phục vụ giao diện và mô phỏng nghiệp vụ.
- Chưa tích hợp backend API và cơ chế lưu thay đổi thực tế trên server.
