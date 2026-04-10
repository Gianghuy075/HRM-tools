export const navItems = [
  { label: "Bảng điều khiển", to: "/" },
  { label: "Quản lý tài khoản", to: "/users" },
  { label: "Phân quyền", to: "/permissions" },
  { label: "Nhật ký hệ thống", to: "/audit-logs" },
  { label: "Cài đặt", to: "/settings" },
];

export const mockSSOUser = {
  id: "sso-001",
  name: "Taylor Morgan",
  email: "taylor.morgan@company.com",
  role: "Quản trị HR",
};

export const subsystems = [
  {
    name: "CRM",
    description: "Quản lý pipeline, sức khỏe khách hàng và gia hạn hợp đồng.",
    url: "https://crm.hrm-tools.com",
    status: "Hoạt động",
    icon: "crm",
    health: "Ổn định",
    tone: "ok",
  },
  {
    name: "Chấm công",
    description: "Theo dõi ca làm, duyệt nghỉ phép và quy tắc tăng ca.",
    url: "https://attendance.hrm-tools.com",
    status: "Hoạt động",
    icon: "attendance",
    health: "Ổn định",
    tone: "ok",
  },
  {
    name: "Tính lương",
    description: "Vận hành bảng lương tháng, quy tắc thuế và phiếu lương.",
    url: "https://payroll.hrm-tools.com",
    status: "Hoạt động",
    icon: "payroll",
    health: "Đang đồng bộ",
    tone: "warn",
  },
  {
    name: "Tuyển dụng",
    description: "Quản lý pipeline ứng viên, offer và công việc onboarding.",
    url: "https://recruitment.hrm-tools.com",
    status: "Thử nghiệm",
    icon: "recruitment",
    health: "Giới hạn",
    tone: "pilot",
  },
  {
    name: "BSC",
    description: "Quản lý mục tiêu, đánh giá hiệu suất và kế hoạch phát triển nhân viên.",
    url: "https://bsc-kpi.space",
    status: "Thử nghiệm",
    icon: "bsc",
    health: "Giới hạn",
    tone: "pilot",
  },
];

export const accessTools = [
  {
    title: "Quản lý tài khoản truy cập",
    description: "Quản lý người dùng, cấp độ truy cập và trạng thái tài khoản.",
    to: "/users",
  },
  {
    title: "Phân quyền RBAC",
    description: "Rà soát vai trò RBAC và phạm vi phân quyền giữa các bộ phận.",
    to: "/permissions",
  },
  {
    title: "Nhật ký kiểm toán",
    description: "Theo dõi thay đổi truy cập và các hoạt động nhạy cảm.",
    to: "/audit-logs",
  },
  {
    title: "Cài đặt bảo mật",
    description: "Cấu hình SSO, domain và chính sách bảo mật.",
    to: "/settings",
  },
];

export const users = [
  {
    name: "Taylor Morgan",
    role: "Quản trị HR",
    department: "Nhân sự",
    status: "active",
    statusLabel: "Đang hoạt động",
    lastLogin: "10/04/2026",
  },
  {
    name: "Jordan Lee",
    role: "Chuyên viên bảo mật",
    department: "An ninh",
    status: "active",
    statusLabel: "Đang hoạt động",
    lastLogin: "09/04/2026",
  },
  {
    name: "Casey Patel",
    role: "Quản lý CNTT",
    department: "CNTT",
    status: "review",
    statusLabel: "Cần rà soát",
    lastLogin: "07/04/2026",
  },
];

export const rbac = [
  { permission: "Xem bảng lương", admin: true, manager: false, analyst: false },
  { permission: "Sửa hồ sơ nhân sự", admin: true, manager: true, analyst: false },
  { permission: "Xuất báo cáo", admin: true, manager: true, analyst: true },
];

export const permissions = [
  {
    role: "Quản trị HR",
    summary: "Toàn quyền vận hành quy trình HR, bảng lương và kiểm soát tuân thủ.",
  },
  {
    role: "Quản lý CNTT",
    summary: "Quản lý chính sách thiết bị, quy trình onboarding và vòng đời truy cập.",
  },
  {
    role: "Chuyên viên bảo mật",
    summary: "Rà soát nhật ký truy cập, thực thi kiểm toán và xác thực kiểm soát an ninh.",
  },
];

export const auditLogs = [
  {
    action: "Thay đổi vai trò",
    detail: "Taylor Morgan đã cấp quyền Quản trị HR cho Jordan Lee",
    time: "09/04/2026 09:12",
  },
  {
    action: "Chính sách SSO",
    detail: "Đã cập nhật danh sách domain cho phép cho corp.company.com",
    time: "08/04/2026 16:44",
  },
  {
    action: "Xuất dữ liệu",
    detail: "Casey Patel đã tạo tệp xuất danh sách người dùng",
    time: "07/04/2026 11:03",
  },
];

export const securitySettings = [
  {
    title: "Nhà cung cấp SSO",
    value: "Okta Enterprise (Đã cấu hình)",
    actionLabel: "Cập nhật nhà cung cấp",
  },
  {
    title: "Danh sách domain cho phép",
    value: "company.com, corp.company.com",
    actionLabel: "Chỉnh sửa domain",
  },
  {
    title: "Mức độ bảo mật",
    value: "Yêu cầu MFA cho toàn bộ tài khoản quản trị",
    actionLabel: "Điều chỉnh chính sách",
  },
];
