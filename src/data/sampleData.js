export const navItems = [
  { label: "Bảng điều khiển", to: "/" },
  { label: "Gói sản phẩm", to: "/product-plans" },
  { label: "Quản lý tài khoản", to: "/users" },
  { label: "Phân quyền", to: "/permissions" },
  { label: "Nhật ký hệ thống", to: "/audit-logs" },
  { label: "Cài đặt", to: "/settings" },
];

export const pageHeaders = {
  "/": {
    title: "Trung tâm điều phối HRM Tools",
    subtitle: "Điều phối hệ thống và quyền truy cập.",
  },
  "/product-plans": {
    title: "Gói sản phẩm",
    subtitle: "Chọn gói phù hợp.",
  },
  "/users": {
    title: "Quản lý tài khoản truy cập",
    subtitle: "CRUD tài khoản và gán nhóm quyền.",
  },
  "/permissions": {
    title: "Phân quyền RBAC",
    subtitle: "Cấp quyền theo nhóm bằng checkbox.",
  },
  "/audit-logs": {
    title: "Nhật ký kiểm toán hệ thống",
    subtitle: "Theo dõi thao tác quan trọng.",
  },
  "/settings": {
    title: "Cài đặt SSO và bảo mật",
    subtitle: "Cấu hình SSO và bảo mật.",
  },
};

export const mockSSOUser = {
  id: "sso-001",
  name: "Taylor Morgan",
  email: "taylor.morgan@company.com",
  role: "Quản trị HR",
};

export const subsystems = [
    {
    name: "BSC",
  description: "Mục tiêu, KPI và đánh giá.",
    url: "https://bsc-kpi.space",
    status: "Thử nghiệm",
    icon: "bsc",
    health: "Giới hạn",
    tone: "pilot",
  },
  {
    name: "CRM",
    description: "Quản lý khách hàng và hợp đồng.",
    url: "https://crm.hrm-tools.com",
    status: "Hoạt động",
    icon: "crm",
    health: "Đang đồng bộ",
    tone: "ok",
  },
  {
    name: "Chấm công",
    description: "Ca làm, nghỉ phép, tăng ca.",
    url: "https://attendance.hrm-tools.com",
    status: "Hoạt động",
    icon: "attendance",
    health: "Đang đồng bộ",
    tone: "ok",
  },
  {
    name: "Tính lương",
    description: "Bảng lương, thuế, phiếu lương.",
    url: "https://payroll.hrm-tools.com",
    status: "Hoạt động",
    icon: "payroll",
    health: "Đang đồng bộ",
    tone: "warn",
  },
  {
    name: "Tuyển dụng",
    description: "Pipeline ứng viên và offer.",
    url: "https://recruitment.hrm-tools.com",
    status: "Thử nghiệm",
    icon: "recruitment",
    health: "Đang đồng bộ",
    tone: "pilot",
  },
  {
    name: "Khen thưởng",
    description: "Quản lý đề xuất và duyệt khen thưởng.",
    url: "https://reward.hrm-tools.com",
    status: "Thử nghiệm",
    icon: "reward",
    health: "Đang đồng bộ",
    tone: "pilot",
  },
  {
    name: "Booking",
    description: "Đặt lịch phòng họp và tài nguyên nội bộ.",
    url: "https://booking.hrm-tools.com",
    status: "Hoạt động",
    icon: "booking",
    health: "Đang đồng bộ",
    tone: "ok",
  },

];

export const accessTools = [
  {
    title: "Gói sản phẩm",
    description: "Xem 4 gói và so sánh nhanh.",
    to: "/product-plans",
  },
  {
    title: "Quản lý tài khoản truy cập",
    description: "Quản lý user và trạng thái tài khoản.",
    to: "/users",
  },
  {
    title: "Phân quyền RBAC",
    description: "Quản trị nhóm quyền theo trang/chức năng.",
    to: "/permissions",
  },
  {
    title: "Nhật ký kiểm toán",
    description: "Theo dõi thay đổi truy cập.",
    to: "/audit-logs",
  },
  {
    title: "Cài đặt bảo mật",
    description: "Cấu hình SSO, domain, bảo mật.",
    to: "/settings",
  },
];

export const users = [
  {
    id: "usr-001",
    name: "Taylor Morgan",
    email: "taylor.morgan@company.com",
    role: "Quản trị HR",
    department: "Nhân sự",
    groupId: "grp-admin",
    status: "active",
    statusLabel: "Đang hoạt động",
    lastLogin: "10/04/2026",
  },
  {
    id: "usr-002",
    name: "Jordan Lee",
    email: "jordan.lee@company.com",
    role: "Chuyên viên bảo mật",
    department: "An ninh",
    groupId: "grp-manager",
    status: "active",
    statusLabel: "Đang hoạt động",
    lastLogin: "09/04/2026",
  },
  {
    id: "usr-003",
    name: "Casey Patel",
    email: "casey.patel@company.com",
    role: "Quản lý CNTT",
    department: "CNTT",
    groupId: "grp-staff",
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

export const permissionModules = [
  {
    id: "dashboard",
    pageLabel: "Bảng điều khiển",
    features: [
      { id: "view_subsystems", label: "Xem các thẻ hệ thống con" },
      { id: "open_subsystems", label: "Mở liên kết hệ thống con" },
      { id: "view_access_cards", label: "Xem khu điều phối truy cập" },
    ],
  },
  {
    id: "users",
    pageLabel: "Quản lý tài khoản",
    features: [
      { id: "view_users", label: "Xem danh sách người dùng" },
      { id: "create_user", label: "Tạo tài khoản" },
      { id: "update_user", label: "Cập nhật tài khoản" },
      { id: "lock_user", label: "Khóa / mở khóa tài khoản" },
    ],
  },
  {
    id: "permissions",
    pageLabel: "Phân quyền",
    features: [
      { id: "view_groups", label: "Xem nhóm quyền" },
      { id: "update_group_name", label: "Cập nhật tên nhóm quyền" },
      { id: "update_group_permissions", label: "Cập nhật quyền truy cập" },
    ],
  },
  {
    id: "audit_logs",
    pageLabel: "Nhật ký hệ thống",
    features: [
      { id: "view_audit_logs", label: "Xem nhật ký" },
      { id: "filter_audit_logs", label: "Lọc nhật ký" },
      { id: "export_audit_logs", label: "Xuất nhật ký" },
    ],
  },
  {
    id: "settings",
    pageLabel: "Cài đặt bảo mật",
    features: [
      { id: "view_settings", label: "Xem cài đặt" },
      { id: "update_sso", label: "Cập nhật nhà cung cấp SSO" },
      { id: "update_domain", label: "Cập nhật domain" },
      { id: "update_security", label: "Điều chỉnh chính sách bảo mật" },
    ],
  },
  {
    id: "product_plans",
    pageLabel: "Gói sản phẩm",
    features: [
      { id: "view_plans", label: "Xem danh sách gói" },
      { id: "update_plans", label: "Cập nhật nội dung gói" },
    ],
  },
];

export const permissionGroups = [
  {
    id: "grp-admin",
    name: "Nhóm Quản trị HR",
    members: 8,
    modules: {
      dashboard: {
        pageAccess: true,
        features: {
          view_subsystems: true,
          open_subsystems: true,
          view_access_cards: true,
        },
      },
      users: {
        pageAccess: true,
        features: {
          view_users: true,
          create_user: true,
          update_user: true,
          lock_user: true,
        },
      },
      permissions: {
        pageAccess: true,
        features: {
          view_groups: true,
          update_group_name: true,
          update_group_permissions: true,
        },
      },
      audit_logs: {
        pageAccess: true,
        features: {
          view_audit_logs: true,
          filter_audit_logs: true,
          export_audit_logs: true,
        },
      },
      settings: {
        pageAccess: true,
        features: {
          view_settings: true,
          update_sso: true,
          update_domain: true,
          update_security: true,
        },
      },
      product_plans: {
        pageAccess: true,
        features: {
          view_plans: true,
          update_plans: true,
        },
      },
    },
  },
  {
    id: "grp-manager",
    name: "Nhóm Quản lý Bộ phận",
    members: 15,
    modules: {
      dashboard: {
        pageAccess: true,
        features: {
          view_subsystems: true,
          open_subsystems: true,
          view_access_cards: true,
        },
      },
      users: {
        pageAccess: true,
        features: {
          view_users: true,
          create_user: false,
          update_user: true,
          lock_user: false,
        },
      },
      permissions: {
        pageAccess: true,
        features: {
          view_groups: true,
          update_group_name: false,
          update_group_permissions: false,
        },
      },
      audit_logs: {
        pageAccess: true,
        features: {
          view_audit_logs: true,
          filter_audit_logs: true,
          export_audit_logs: false,
        },
      },
      settings: {
        pageAccess: false,
        features: {
          view_settings: false,
          update_sso: false,
          update_domain: false,
          update_security: false,
        },
      },
      product_plans: {
        pageAccess: true,
        features: {
          view_plans: true,
          update_plans: false,
        },
      },
    },
  },
  {
    id: "grp-staff",
    name: "Nhóm Chuyên viên",
    members: 42,
    modules: {
      dashboard: {
        pageAccess: true,
        features: {
          view_subsystems: true,
          open_subsystems: true,
          view_access_cards: false,
        },
      },
      users: {
        pageAccess: false,
        features: {
          view_users: false,
          create_user: false,
          update_user: false,
          lock_user: false,
        },
      },
      permissions: {
        pageAccess: false,
        features: {
          view_groups: false,
          update_group_name: false,
          update_group_permissions: false,
        },
      },
      audit_logs: {
        pageAccess: true,
        features: {
          view_audit_logs: true,
          filter_audit_logs: false,
          export_audit_logs: false,
        },
      },
      settings: {
        pageAccess: false,
        features: {
          view_settings: false,
          update_sso: false,
          update_domain: false,
          update_security: false,
        },
      },
      product_plans: {
        pageAccess: true,
        features: {
          view_plans: true,
          update_plans: false,
        },
      },
    },
  },
];

export const auditLogs = [
  {
    id: "log-001",
    actionType: "add",
    actionLabel: "Thêm",
    actor: "Taylor Morgan",
    target: "Jordan Lee",
    feature: "Phân quyền vai trò",
    note: "Cấp quyền Quản trị HR cho Jordan Lee.",
    time: "09/04/2026 09:12",
  },
  {
    id: "log-002",
    actionType: "edit",
    actionLabel: "Sửa",
    actor: "Jordan Lee",
    target: "Nhóm người dùng nội bộ",
    feature: "Chính sách SSO",
    note: "Thêm corp.company.com vào allowlist.",
    time: "08/04/2026 16:44",
  },
  {
    id: "log-003",
    actionType: "delete",
    actionLabel: "Xóa",
    actor: "Casey Patel",
    target: "Tài khoản thử nghiệm intern.hr",
    feature: "Quản lý tài khoản",
    note: "Thu hồi quyền và khóa intern.hr.",
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

export const productPlans = [
  {
    id: "trial",
    name: "Gói thử nghiệm",
    summary: "Dùng thử nhanh, chi phí 0đ.",
    price: "0đ",
    cycle: "/ 14 ngày",
    badge: "Khởi đầu",
    ctaLabel: "Dùng thử ngay",
    highlight: false,
    features: [
      "Tối đa 25 tài khoản người dùng",
      "Dashboard điều phối cơ bản",
      "Quản lý tài khoản và phân quyền nền tảng",
      "Nhật ký hoạt động trong 14 ngày",
    ],
  },
  {
    id: "admin",
    name: "Gói quản trị",
    summary: "Quản trị ổn định cho doanh nghiệp vừa.",
    price: "1.990.000đ",
    cycle: "/ tháng",
    badge: "Phổ biến",
    ctaLabel: "Chọn gói quản trị",
    highlight: true,
    features: [
      "Tối đa 150 tài khoản người dùng",
      "Kết nối CRM, Chấm công, Tính lương",
      "RBAC theo phòng ban và vai trò",
      "Nhật ký kiểm toán trong 90 ngày",
      "Hỗ trợ email trong giờ hành chính",
    ],
  },
  {
    id: "advanced",
    name: "Gói nâng cao",
    summary: "Tự động hóa và phân tích chuyên sâu.",
    price: "4.990.000đ",
    cycle: "/ tháng",
    badge: "Mở rộng",
    ctaLabel: "Nâng cấp ngay",
    highlight: false,
    features: [
      "Không giới hạn tài khoản nội bộ",
      "Quy trình phê duyệt nhiều tầng",
      "Tích hợp SSO nâng cao và domain policy",
      "Nhật ký kiểm toán 12 tháng",
      "Báo cáo tổng hợp theo thời gian thực",
    ],
  },
  {
    id: "custom",
    name: "Gói tùy chỉnh",
    summary: "Tùy biến theo quy trình riêng.",
    price: "Liên hệ",
    cycle: "theo nhu cầu",
    badge: "Doanh nghiệp",
    ctaLabel: "Liên hệ tư vấn",
    highlight: false,
    features: [
      "Tùy biến module theo quy trình nội bộ",
      "Triển khai private cloud hoặc on-premise",
      "Kết nối API và đồng bộ dữ liệu đa hệ thống",
      "SLA, bảo mật và chính sách vận hành riêng",
      "Đội ngũ triển khai và hỗ trợ chuyên trách",
    ],
  },
];
