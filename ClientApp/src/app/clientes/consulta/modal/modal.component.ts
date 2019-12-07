import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { from } from 'rxjs';
import { ClienteConsultaModalComponent } from '../cliente-consulta-modal/cliente-consulta-modal.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(private modalService:NgbModal) { }
  open(){
    const modalRef= this.modalService.open(ClienteConsultaModalComponent,{centered:true});
    modalRef.componentInstance.activeModal;
  }

  ngOnInit() {
  }

}
