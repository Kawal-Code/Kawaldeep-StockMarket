import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyRelatedComponent } from './containers/company-related/company-related.component';
import { HomePageComponent } from './containers/home-page/home-page.component';
import { UserLoginComponent } from './containers/user-login/user-login.component';
import { AdminLoginComponent } from './containers/admin-login/admin-login.component';
import { AdminLandingComponent } from './containers/admin-landing/admin-landing.component';
import { ImportDataComponent } from './containers/import-data/import-data.component';
import { ManageStockExchangesComponent } from './containers/manage-stock-exchanges/manage-stock-exchanges.component';
import { ManageIpoComponent } from './containers/manage-ipo/manage-ipo.component';
import { UserSignupComponent } from './containers/user-signup/user-signup.component';
import { UserLandingComponent } from './containers/user-landing/user-landing.component';
import { NotFoundComponent } from './containers/not-found/not-found.component';
import { NewuserCreatedComponent } from './containers/newuser-created/newuser-created.component';
import { NothingComponent } from './containers/nothing/nothing.component';
import { CompareCompaniesComponent } from './containers/compare-companies/compare-companies.component';
import { ManageCompaniesComponent } from './containers/manage-companies/manage-companies.component';
import { UpdateIpoComponent } from './containers/update-ipo/update-ipo.component';
import { AddIpoComponent } from './containers/add-ipo/add-ipo.component';
import { EditIpoComponent } from './containers/edit-ipo/edit-ipo.component';
import { ImportExcelComponent } from './containers/import-excel/import-excel.component';
import { AddstockexchangeComponent } from './containers/addstockexchange/addstockexchange.component';
import { EditstockexchangeComponent } from './containers/editstockexchange/editstockexchange.component';
import { BarChartComponent } from './containers/bar-chart/bar-chart.component';


const routes: Routes = [
  {path: '',redirectTo: '/Home', pathMatch: 'full'},
  {path: 'Companies', component: CompanyRelatedComponent},
  {path: 'Home', component:HomePageComponent},
  {path: 'User', component:UserLoginComponent},
  {path: 'Admin', component:AdminLoginComponent},
  {path: 'AdminLanding', component:AdminLandingComponent},
  {path: 'ImportData', component:ImportDataComponent},
  {path: 'ManageExchanges', component:ManageStockExchangesComponent},
  {path:'ManageCompanies',component:ManageCompaniesComponent},
  {path:'GetIPO',component:ManageIpoComponent},
  {path:'SignUp',component:UserSignupComponent},
  {path:'UserLanding',component:UserLandingComponent},
  {path:'NotFound', component:NotFoundComponent},
  {path: 'NewUser',component:NewuserCreatedComponent},
  {path: 'nothing',component:NothingComponent},
  {path:'Compare',component:CompareCompaniesComponent},
  {path: 'UpdateIPO',component:UpdateIpoComponent},
  {path:'AddIPO',component:AddIpoComponent},
  {path: 'EditIPO',component:EditIpoComponent},
  {path:'ImportExcel',component:ImportExcelComponent},
  {path:'AddStockExchange',component:AddstockexchangeComponent},
  {path:'EditStockExchange',component:EditstockexchangeComponent},
  {path:'BarChart',component:BarChartComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
