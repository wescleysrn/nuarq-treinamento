import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoadingModule } from 'ngx-loading';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// Pessoa - Rotas
import { PessoaRoutingModule } from './pessoa.routing';

// Pessoa - Components BaseForm
import { DisplayErrorModule } from '../../components/display-error/display-error.module';
import { BaseFormComponentModule } from '../../components/base-form/base-form.module';

// Pessoa - Components Form
import { ModalExcluirComponent } from '../../components/form/modal/modal-excluir.component';
import { ChosenSelectComponent } from '../../components/form/chosen-select/chosen-select.component';

// Pessoa - Components
import { PessoaListaComponent } from './lista/pessoa-lista.component';
import { PessoaFormComponent } from './formulario/pessoa-formulario.component';

// Pessoa - Services
import { GenericoProvider } from '../../shared/providers/generico/generico-service';
import { PessoaService } from '../../shared/providers/pessoa/pessoa-service';

// Pessoa - Interceptor
import { AuthInterceptor } from '../../shared/interceptor/auth.interceptor';

@NgModule({
  declarations: [
    PessoaListaComponent,
    PessoaFormComponent,
    ModalExcluirComponent,
    ChosenSelectComponent,
  ],
  entryComponents: [
    ModalExcluirComponent,
    ChosenSelectComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,    
    CommonModule, 
    LoadingModule,    
    BaseFormComponentModule, 
    DisplayErrorModule,
    PessoaRoutingModule
  ],
  providers: [
    GenericoProvider,
    PessoaService,
    { provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }   
  ]
})
export class PessoaModule { }
