import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './/layouts/layout.component';

import { HomeComponent } from './pages/home/home.component';

// Componentes - Básicos
import { PanelsComponent } from './pages/ui/panels/panels.component';
import { TabsComponent } from './pages/ui/tabs/tabs.component';
import { AlertsComponent } from './pages/ui/alerts/alerts.component';
import { CardsComponent } from './pages/ui/cards/cards.component';
import { BadgesProgressComponent } from './pages/ui/badges-progress/badges-progress.component';
import { ListComponent } from './pages/ui/list/list.component';

// Componentes - Formulários
import { FormBasicComponent } from './pages/forms/form-basic/form-basic.component';
import { InputMasksComponent } from './pages/forms/input-masks/input-masks.component';
import { FormValidationComponent } from './pages/forms/form-validation/form-validation.component';
import { FormAdvancedComponent } from './pages/forms/form-advanced/form-advanced.component';

// Componentes - Tabelas
import { TablesComponent } from './pages/tables/tables.component';
import { DatatablesComponent } from './pages/datatables/datatables.component';

// Componentes - Gráficos
import { ChartjsComponent } from './pages/charts/chartjs/chartjs.component';
import { MorrisChartComponent } from './pages/charts/morris-chart/morris-chart.component';

// Componentes - Mapas
import { MapsVectorComponent } from './pages/maps-vector/maps-vector.component';

// Componentes - Páginas
import { ProfileComponent } from './pages/profile/profile.component';
import { InvoiceComponent } from './pages/invoice/invoice.component';
import { Error404Component } from './pages/error-404/error-404.component';
import { Error500Component } from './pages/error-500/error-500.component';

// Injetar o guardião utilizado nas rotas
import { AuthGuard } from './auth/guard/auth.guard';
// Injeta módulo controlador de acesso
import { AuthComponent } from './auth/auth.component';
// Injeta módulo do dominio Pessoa
import { PessoaModule } from './pages/pessoa/pessoa.module';

const routes: Routes = [
    {path: '', redirectTo: 'index', pathMatch: 'full'},
    {
        "path": "",
        "component": LayoutComponent,
        "canActivate": [AuthGuard],
        "children": [
            // Todos mapeamentos de rotas de exemplos, que auxiliam os desenvolvedores na produção de funcionaliades
            {
                path: "index",
                component: HomeComponent
            },
            {
                path: "ui/panels",
                component: PanelsComponent
            },
            {
                path: "ui/tabs",
                component: TabsComponent
            },
            {
                path: "ui/alerts",
                component: AlertsComponent
            },
            {
                path: "ui/badges_progress",
                component: BadgesProgressComponent
            },
            {
                path: "ui/lists",
                component: ListComponent
            },
            {
                path: "ui/cards",
                component: CardsComponent
            },
            {
                path: "forms/form_basic",
                component: FormBasicComponent
            },
            {
                path: "forms/form_advanced",
                component: FormAdvancedComponent
            },
            {
                path: "forms/form_masks",
                component: InputMasksComponent
            },
            {
                path: "forms/form_validation",
                component: FormValidationComponent
            },
            {
                path: "tables/basic",
                component: TablesComponent
            },
            {
                path: "tables/datatables",
                component: DatatablesComponent
            },
            {
                path: "charts/chartjs",
                component: ChartjsComponent
            },
            {
                path: "charts/charts_morris",
                component: MorrisChartComponent
            },
            {
                path: "maps_vector",
                component: MapsVectorComponent
            },
            {
                "path": "invoice",
                "component": InvoiceComponent
            },
            {
                path: "profile",
                component: ProfileComponent
            },
            // Mapeamento de módulo do dominio Pessoa
            {
                path: 'pessoa',
                component: AuthComponent,
                children: [{
                    path: '',
                    loadChildren: './pages/pessoa/pessoa.module#PessoaModule'
                }]
            },
        ]
    },
    // Mapeamento de módulo de autenticação e autorização.
    {
        path: 'auth',
        component: AuthComponent,
        children: [{
            path: '',
            loadChildren: './auth/auth.module#AuthModule'
        }]
    },
    // Mapeamentos de páginas de erros não tratados ou de recurso não encontrado.
    {
        "path": "error_404",
        "component": Error404Component
    },
    {
        "path": "error_500",
        "component": Error500Component
    },
    {
        "path": "**",
        "redirectTo": "error_404",
        "pathMatch": "full"
    },
];

@NgModule({
  declarations: [
    HomeComponent,
    PanelsComponent,
    TabsComponent,
    AlertsComponent,
    CardsComponent,
    BadgesProgressComponent,
    ListComponent,
    FormBasicComponent,
    InputMasksComponent,
    FormValidationComponent,
    FormAdvancedComponent,
    TablesComponent,
    DatatablesComponent,
    ChartjsComponent,
    MorrisChartComponent,
    MapsVectorComponent,
    ProfileComponent,
    InvoiceComponent,
    Error404Component,
    Error500Component,
  ],
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ 
    RouterModule,
  ]
})

export class AppRoutingModule { }
