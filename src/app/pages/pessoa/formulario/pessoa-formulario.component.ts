import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

// Pessoa - Components
import { BaseFormComponent } from '../../../components/base-form/base-form.component';
// Pessoa - Serviços
import { PessoaService } from '../../../shared/providers/pessoa/pessoa-service';

@Component({
  selector: 'app-pessoa-formulario',
  templateUrl: './pessoa-formulario.component.html',
  styleUrls: ['./pessoa-formulario.component.scss']
})
export class PessoaFormComponent extends BaseFormComponent implements OnInit {

    // Declarações
    public loading = false; 
    public form : FormGroup;
    private id: number = null;

    // Função construtor    
    constructor(private service: PessoaService, 
                private formBuilder: FormBuilder,
                private router: Router,
                private activatedRoute: ActivatedRoute) { 
        super();
        this.activatedRoute.params.subscribe(
            res => this.id = res.id
        );
        this.form = this.formBuilder.group({
            id: [''],
            nome: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(250)]],
            cpf: ['', [Validators.required, Validators.minLength(11)]],
            email: ['', [Validators.required, Validators.maxLength(100)]],
            login: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(40)]],
            senha: ['', [Validators.required, Validators.minLength(6)]],
            telefone: ['', [Validators.required, Validators.minLength(14)]],
            dataNascimento: ['', [Validators.required, Validators.minLength(10)]],
            endereco: 
                this.formBuilder.group({
                    cep: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
                    logradouro: ['', [Validators.required, Validators.maxLength(200)]],
                    bairro: ['', [Validators.required, Validators.maxLength(200)]],
                    numero: ['', [Validators.required, Validators.maxLength(15)]],
                    complemento: ['', [Validators.required, Validators.maxLength(150)]],
                    uf: ['', [Validators.required, Validators.maxLength(2)]],
                    cidade: ['', [Validators.required, Validators.maxLength(250)]]
                })
        });    
    }
        
    // Função de inicialização - Carrega form de categoria de equipamento
    ngOnInit() {
        if(this.id != null) {
            this.loading = true;        
            this.service.buscarPorId(this.id).subscribe(
                response => { 
                    this.form.reset (
                        response
                    );
                    this.loading = false;
                }                  
            );
        }
    }

    // Função de persistencia de dados
    onSave() {
        if (this.form.dirty && this.form.valid) {
            this.service.salvar(this.form).subscribe(
                response => { 
                    this.router.navigate(['/pessoa']);
                    this.loading = false;
                }
            );
        }
    }

}
