import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'employee-view',
    loadChildren: () => import('./employee-view/employee-view.module').then( m => m.EmployeeViewPageModule)
  },
  {
    path: 'employee-trade-shifts',
    loadChildren: () => import('./employee-trade-shifts/employee-trade-shifts.module').then( m => m.EmployeeTradeShiftsPageModule)
  },
  {
    path: 'owner-view',
    loadChildren: () => import('./owner-view/owner-view.module').then( m => m.OwnerViewPageModule)
  },
  {
    path: 'add-staff',
    loadChildren: () => import('./add-staff/add-staff.module').then( m => m.AddStaffPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'staff-list',
    loadChildren: () => import('./staff-list/staff-list.module').then( m => m.StaffListPageModule)
  },
  {
    path: 'add-supplier',
    loadChildren: () => import('./add-supplier/add-supplier.module').then( m => m.AddSupplierPageModule)
  },
  {
    path: 'supplier-list',
    loadChildren: () => import('./supplier-list/supplier-list.module').then( m => m.SupplierListPageModule)
  },
  {
    path: 'supplier-view',
    loadChildren: () => import('./supplier-view/supplier-view.module').then( m => m.SupplierViewPageModule)
  },
  {
    path: 'supplier-order',
    loadChildren: () => import('./supplier-order/supplier-order.module').then( m => m.SupplierOrderPageModule)
  },
  {
    path: 'supplier-order-history',
    loadChildren: () => import('./supplier-order-history/supplier-order-history.module').then( m => m.SupplierOrderHistoryPageModule)
  },
  {
    path: 'owner-order',
    loadChildren: () => import('./owner-order/owner-order.module').then( m => m.OwnerOrderPageModule)
  },
  {
    path: 'new-sale',
    loadChildren: () => import('./new-sale/new-sale.module').then( m => m.NewSalePageModule)
  },
  {
    path: 'sales-report',
    loadChildren: () => import('./sales-report/sales-report.module').then( m => m.SalesReportPageModule)
  },
  {
    path: 'owner-order-history',
    loadChildren: () => import('./owner-order-history/owner-order-history.module').then( m => m.OwnerOrderHistoryPageModule)
  },
  {
    path: 'owner-view-schedule',
    loadChildren: () => import('./owner-view-schedule/owner-view-schedule.module').then( m => m.OwnerViewSchedulePageModule)
  },
  {
    path: 'add-item',
    loadChildren: () => import('./add-item/add-item.module').then( m => m.AddItemPageModule)
  },
  {
    path: 'item-list',
    loadChildren: () => import('./item-list/item-list.module').then( m => m.ItemListPageModule)
  },
  {
    path: 'staff-view-schedule',
    loadChildren: () => import('./staff-view-schedule/staff-view-schedule.module').then( m => m.StaffViewSchedulePageModule)
  },
  {
    path: 'view-stock',
    loadChildren: () => import('./view-stock/view-stock.module').then( m => m.ViewStockPageModule)
  },
  {
    path: 'owner-trade-request',
    loadChildren: () => import('./owner-trade-request/owner-trade-request.module').then( m => m.OwnerTradeRequestPageModule)
  },
  {
    path: 'owner-sales-report',
    loadChildren: () => import('./owner-sales-report/owner-sales-report.module').then( m => m.OwnerSalesReportPageModule)
  },
  {
    path: 'staff-stock',
    loadChildren: () => import('./staff-stock/staff-stock.module').then( m => m.StaffStockPageModule)
  },
  {
    path: 'credits',
    loadChildren: () => import('./credits/credits.module').then( m => m.CreditsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
