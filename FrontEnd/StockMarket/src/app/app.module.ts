import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserSignupComponent } from './containers/user-signup/user-signup.component';
import { UserLoginComponent } from './containers/user-login/user-login.component';
import { ManageStockExchangesComponent } from './containers/manage-stock-exchanges/manage-stock-exchanges.component';
import { ManageIpoComponent } from './containers/manage-ipo/manage-ipo.component';
import { ManageCompaniesComponent } from './containers/manage-companies/manage-companies.component';
import { ImportExcelComponent } from './containers/import-excel/import-excel.component';
import { HttpClientModule } from '@angular/common/http';
import { CompanyRelatedService } from './services/company-related.service';
import { FormsModule } from "@angular/forms";
import { CompanyRelatedComponent } from './containers/company-related/company-related.component';
import { HomePageComponent } from './containers/home-page/home-page.component';
import { AdminLoginComponent } from './containers/admin-login/admin-login.component';
import { AdminLandingComponent } from './containers/admin-landing/admin-landing.component';
import { ImportDataComponent } from './containers/import-data/import-data.component';
import { UserLandingComponent } from './containers/user-landing/user-landing.component';
import { NotFoundComponent } from './containers/not-found/not-found.component';
import { NewuserCreatedComponent } from './containers/newuser-created/newuser-created.component';
import { NothingComponent } from './containers/nothing/nothing.component';
import { CompareCompaniesComponent } from './containers/compare-companies/compare-companies.component';
import { UpdateIpoComponent } from './containers/update-ipo/update-ipo.component';
import { AddIpoComponent } from './containers/add-ipo/add-ipo.component';
import { EditIpoComponent } from './containers/edit-ipo/edit-ipo.component';
import { AddstockexchangeComponent } from './containers/addstockexchange/addstockexchange.component';
import { EditstockexchangeComponent } from './containers/editstockexchange/editstockexchange.component';
import { BarChartComponent } from './containers/bar-chart/bar-chart.component';
import { ChartsModule } from 'ng2-charts';
import { ComparisionChartComponent } from './containers/comparision-chart/comparision-chart.component';
import {ConfirmEqualValidatorDirective} from './confirm-equal-validator.directive';
@NgModule({
  declarations: [
    AppComponent,
    UserSignupComponent,
    UserLoginComponent,
    ManageStockExchangesComponent,
    ManageIpoComponent,
    ManageCompaniesComponent,
    ImportExcelComponent,
    CompanyRelatedComponent,
    HomePageComponent,
    AdminLoginComponent,
    AdminLandingComponent,
    ImportDataComponent,
    UserLandingComponent,
    NotFoundComponent,
    NewuserCreatedComponent,
    NothingComponent,
    CompareCompaniesComponent,
    UpdateIpoComponent,
    AddIpoComponent,
    EditIpoComponent,
    AddstockexchangeComponent,
    EditstockexchangeComponent,
    BarChartComponent,
    ComparisionChartComponent,
    ConfirmEqualValidatorDirective
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ChartsModule
  ],
  providers: [CompanyRelatedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
