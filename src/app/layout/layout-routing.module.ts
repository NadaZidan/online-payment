import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
            {
                path: 'dashboard',
                loadChildren: () => import('./dashboard/dashboard.module').then((m) => m.DashboardModule)
            },
            { path: '', redirectTo: 'products', pathMatch: 'prefix' },
            {
                path: 'products',
                loadChildren: () => import('./products/products.module').then((m) => m.ProductsModule)
            },

            { path: '', redirectTo: 'category', pathMatch: 'prefix' },
            {
                path: 'category',
                loadChildren: () => import('./category/category.module').then((m) => m.CategoryModule)
            },
            { path: '', redirectTo: 'order', pathMatch: 'prefix' },
            {
                path: 'order',
                loadChildren: () => import('./order/order.module').then((m) => m.OrderModule)
            },
            {
                path: 'offer',
                loadChildren: () => import('./offer/offer.module').then((m) => m.OfferModule)
            },
            {
                path: 'users',
                loadChildren: () => import('./users/users.module').then((m) => m.UsersModule)
            },
            { path: '', redirectTo: 'contacts', pathMatch: 'prefix' },

            {
                path: 'contacts',
                loadChildren: () => import('./contacts/contacts.module').then((m) => m.ContactsModule)
            },
           
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
