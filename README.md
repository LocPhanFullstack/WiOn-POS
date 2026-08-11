# WionFnb

# Quản lý source của WiOn-Fnb

# WiOn-Fnb

## Khởi tạo workspace micro-fontend sử dụng module federation

### Bước 1: Khởi tạo 1 workspace trống

```
npx create-nx-workspace@19 wion-fnb

NX   Let's create a new workspace [https://nx.dev/getting-started/intro]
√ Which stack do you want to use? · none
√ Package-based monorepo, integrated monorepo, or standalone project? · integrated
√ Which CI provider would you like to use? · skip
√ Would you like remote caching to make your build faster? · skip
```

### Bước 2: Cài đặt plugin hỗ trợ Angular cho Nx

```
npm install --save-dev @nx/angular@19
```

### Bước 3: Khởi tạo host app và remote app theo mô hình micro-fontend

```
npx nx g @nx/angular:host apps/admin --prefix=wion-fnb

✔ Which stylesheet format would you like to use? · scss
✔ Which E2E test runner would you like to use? · playwright
```

tạo remote app khi đã có host

```
npx nx g @nx/angular:remote apps/account --prefix=wion-fnb --host=admin
```

admin là host và các app account là các app remote

### Bước 4: Khởi tạo libs app

#### Khởi tạo feature lib

```
npx nx g @nx/angular:lib feature --directory=account --buildable --tags=scope:account,type:feature --skip-module --standalone=true

What should be the project name and where should it be generated? …
▸ Derived:
    Name: account-data-access
    Root: libs/account/data-access
```

- Cờ --directory để Nx xác định thư mục chứa feature app đang được khởi tạo
- Cờ --buildable để Nx xác định thư viện được khởi tạo có thể build
- Cờ --tags dùng để nx gắn tag cho thư viện, hiển thị trong biểu đồ graph của nx sẽ được khởi tạo khi chạy câu lệnh.

#### Khởi tạo ui lib

```
npx nx g @nx/angular:lib ui --directory=account --buildable --tags=scope:account,type:ui --skip-module
```

#### Khởi tạo data-access lib

```
npx nx g @nx/angular:lib data-access --directory=account --buildable --tags=scope:account,type:data-access --skip-module
```

- Dùng Cờ `type:data-access` để khởi tạo là 1 app data-access lib
- Khi không dùng cờ --directory thì app sẽ được khởi tạo trực tiếp trong thư mục libs

## remove app

```
npx nx g @nx/angular:remove account
```

- Xóa các phụ thuộc (các file -e2e, khai báo remote trên admin) trước khi remove

## Câu lệnh tạo component

npx nx g @nx/angular:component tên-component --skip-tests --inline-style=true --view-encapsulation=None --standalone=true --change-detection=OnPush

- Ví dụ: npx nx g @nx/angular:component login --directory=libs/account/feature/src/login --skip-tests --inline-style=true --view-encapsulation=None --standalone=true --change-detection=OnPush

### Chạy app admin với remote app là account

npx nx run admin:serve:development --devRemotes=account

### Build staging

npx nx build --configuration=staging

## Nên chạy nhiều terminal: 1 terminal cho host và các terminal cho các app remote cần thiết

### Chạy app admin

npm run start
hay
npx nx run admin:serve:development

### Chạy remote app ví dụ: account

npm run start:account
hay
npx nx run account:serve:development

### Reset cache

npx nx reset

### Câu lệnh gen lại các api

```
npm run ng-openapi-gen
```

### Lưu ý

- Cập nhật biến version trong ./tds-ui-subpaths.ts sau khi cập nhật thư viện tds-ui lên version mới
