import { TDSMenuDTO } from 'tds-ui/menu';

export const LayoutMenu: Array<TDSMenuDTO> = [
  {
    name: 'Tổng quan',
    link: '/dashboard/overview',
    icon: 'tdsi-dashboard-fill',
  },
  {
    name: 'Bán hàng',
    link: '/ordering/multiple-create',
    icon: 'tdsi-add-to-cart-fill',
  },
  {
    name: 'Đơn hàng',
    link: '/ordering/list',
    icon: 'tdsi-inventory-check-fill',
  },
  {
    name: 'Hóa đơn điện tử',
    link: '/billing/list',
    icon: 'tdsi-quotation-fill',
  },
  {
    name: 'Sản phẩm',
    icon: 'tdsi-box-fill',
    listChild: [
      {
        name: 'Danh sách sản phẩm',
        link: '/product/list',
      },
      {
        name: 'Danh mục sản phẩm',
        link: '/product/category',
      },
      {
        name: 'Bảng giá',
        link: '/price-list/list',
      },
      // {
      //   name: 'Thương hiệu sản phẩm',
      //   link: '',
      // },
    ],
  },
  {
    name: 'Kho hàng',
    icon: 'tdsi-storehouse-fill',
    listChild: [
      {
        name: 'Xuất nhập kho',
        link: '/inventory/list',
      },
      // {
      //   name: 'Kiểm kho',
      //   link: '',
      // },
      {
        name: 'Nhà cung cấp',
        link: '/supplier/list',
      },
    ],
  },
  {
    name: 'Khách hàng',
    link: '/customer/list',
    icon: 'tdsi-group-fill',
  },
  {
    name: 'Sổ quỹ',
    link: '/cashbook/list',
    icon: 'tdsi-money-bag-fill',
  },
  {
    name: 'Báo cáo',
    icon: 'tdsi-bar-chart-fill',
    listChild: [
      {
        name: 'Báo cáo bán hàng',
        link: '/report/sale',
      },
      {
        name: 'Báo cáo tồn kho',
        link: '/report/inventory',
      },
      {
        name: 'Báo cáo doanh thu',
        link: '/report/revenue',
      },
      {
        name: 'Doanh thu theo nhân viên',
        link: '/report/shop-user-revenue',
      },
      {
        name: 'Xuất - Nhập - Tồn',
        link: '/report/inventory-in-out',
      },
    ],
  },
  {
    name: 'Kênh kết nối',
    link: '/integration/dashboard',
    icon: 'tdsi-share-fill',
  },
  {
    name: 'Cài đặt',
    icon: 'tdsi-gear-fill',
    listChild: [
      {
        name: 'Cài đặt chung',
        link: '/setting/general',
      },
      {
        name: 'Cài đặt mẫu in',
        link: '/setting/printing',
      },
      {
        name: 'Nhân viên',
        link: '/setting/permission',
      },
      {
        name: 'Nhãn',
        link: '/tags/list',
      },
    ],
  },
  // {
  //   name: 'Ứng dụng kết nối',
  //   icon: "tdsi-paid-fill",
  //   listChild: [
  //   ]
  // },
];
