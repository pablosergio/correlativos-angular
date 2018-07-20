import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoaderService, PageResponse, DataService, DataTable } from '../../common/api';
import { SelectItem, ConfirmationService} from 'primeng/primeng';
import { Subscription } from 'rxjs/Subscription';
import { UUID } from 'angular2-uuid';
import { Oficina } from '../oficina';
import { OficinaService } from '../oficina.service';


@Component({
  selector: 'grid-oficina',
  templateUrl: './grid-oficina.component.html',
  styleUrls: ['./grid-oficina.component.css'],
  providers: [ ConfirmationService ]
})
export class GridOficinaComponent extends DataTable<Oficina> implements OnInit {
  oficina: Oficina = new Oficina();
  nuevaOficina: Oficina;
  display: boolean;
  titulo: string;
  constructor(route: ActivatedRoute, router: Router, loaderService: LoaderService,
    dataService: DataService<Oficina>, oficinaService: OficinaService, private confirmationService: ConfirmationService) {
    super(route, router, dataService, loaderService);
    dataService.endpoint = 'oficinas';
    dataService.communication.update$.subscribe(
      result => {
    });
  }

  ngOnInit() {
    this.display = false;
  }

  selectOficina(record: Oficina) {
   this.router.navigate([record.id], { relativeTo: this.route });
  }

  newRecord() {
    this.oficina = new Oficina();
    this.titulo = 'Nuevo Registro';
    this.display = true;
  }

  editRecord(record: Oficina): void {
    this.oficina = record;
    this.titulo = 'Editar Registro ' + record.nombre;
    this.display = true;
  }

  saveRecord() {
    this.oficina.creation_date = new Date();
    this.service.save(this.oficina).subscribe(
       result => { this.display = false; this.successMessage(<any>result); this.refresh(); },
       error =>  this.errorMessage = <any>error
    );
  }

  deleteRecord(record: Oficina) {
    this.confirmationService.confirm({
            message: '&#191;Esta seguro de eliminar este registro?',
            header: 'Confirmar Eliminar',
            icon: 'fa fa-trash',
            accept: () => {
              this.service.remove(record.id).subscribe(
                 result => { this.successMessage(<any>result); this.refresh(); },
                 error =>  this.errorMessage = <any>error
              );
            },
            reject: () => {
                this.msgs = [{severity: 'info', summary: 'Cancelar', detail: 'Usted a cancelado la eliminacion'}];
            }
        });

  }

  cancelRecord() {
    this.display = false;
    this.refresh();
  }
}
