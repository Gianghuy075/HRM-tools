# HRM-tools - Tài Liệu Kỹ Thuật

## 1. Tech stack

- React 18
- Vite 5
- React Router DOM 6
- CSS thuần

## 2. Yêu cầu môi trường

- Node.js 18+
- npm 9+

## 3. Cài đặt và chạy

```bash
npm install
npm run dev
```

## 4. Build và preview

```bash
npm run build
npm run preview
```

## 5. Scripts

- `npm run dev`: chạy môi trường phát triển với Vite.
- `npm run build`: build production.
- `npm run preview`: chạy preview bản build.

## 6. Cấu trúc source

```text
src/
  components/      # Header, Sidebar, Layout, ProtectedRoute
  context/         # AuthContext (state đăng nhập + localStorage)
  data/            # Dữ liệu mẫu tập trung
  icon/            # Tài nguyên icon (BSC.svg)
  pages/           # Dashboard, Users, Permissions, AuditLogs, ProductPlans, Settings, Login
  App.jsx          # Router config
  main.jsx         # App bootstrap
  index.css        # Global styles
```

## 7. Routing

- Public route:
  - `/login`
- Protected routes (qua `ProtectedRoute`):
  - `/`
  - `/product-plans`
  - `/users`
  - `/permissions`
  - `/audit-logs`
  - `/settings`

## 8. Data model hiện tại

Tất cả dữ liệu giả lập được đặt tại [src/data/sampleData.js](src/data/sampleData.js), gồm:

- `navItems`, `pageHeaders`
- `subsystems`, `accessTools`
- `users`
- `permissionModules`, `permissionGroups`
- `auditLogs`
- `productPlans`
- `securitySettings`

Lưu ý:

- Trạng thái trong `Users` và `Permissions` hiện là state phía client.
- Chưa có API call, chưa có persistence server-side.

## 9. Kiến trúc giao diện hiện tại

### 9.1 Header + Layout

- Header lấy title/subtitle theo route từ `pageHeaders`.
- Layout chuẩn: sidebar trái, content phải.

### 9.2 Users page

- Quản lý tài khoản theo mô hình CRUD in-memory.
- Form thêm/sửa tài khoản.
- Gán `groupId` theo dữ liệu `permissionGroups`.

### 9.3 Permissions page

- Mô hình 2 cột:
  - Trái: danh sách nhóm quyền + đổi tên + thêm nhóm.
  - Phải: module permissions bằng checkbox (page access + feature access).

### 9.4 Audit Logs page

- Nhật ký hiển thị theo card.
- Màu theo `actionType`: add/edit/delete.

## 10. Hướng tích hợp backend

Đề xuất thứ tự:

1. Users API
  - `GET /users`
  - `POST /users`
  - `PATCH /users/:id`
  - `DELETE /users/:id`
2. Permission groups API
  - `GET /permission-groups`
  - `PATCH /permission-groups/:id`
3. Audit logs API
  - `GET /audit-logs` (có filter/sort/paging)
4. Auth/SSO integration thật
  - thay mock auth trong `AuthContext` bằng token/session flow.

## 11. Gợi ý chất lượng mã

- Tách state quản trị thành custom hooks (`useUsers`, `usePermissionGroups`).
- Thêm schema validation cho payload form (zod/yup).
- Bổ sung test:
  - Unit test cho logic transform data.
  - Component test cho Users và Permissions.
  - Route guard test cho `ProtectedRoute`.
