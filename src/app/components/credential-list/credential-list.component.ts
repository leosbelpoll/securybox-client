import { Component, OnInit } from '@angular/core';

import { CredentialService } from '../../services/CredentialService';

@Component({
  selector: 'credential-list',
  templateUrl: './credential-list.component.html',
  styleUrls: ['./credential-list.component.scss']
})
export class CredentialListComponent implements OnInit {

  credentialList: any = [];

  constructor(
    public service: CredentialService
  ) { }

  ngOnInit() {
    this.getCredentials();
  }

  getCredentials() {
    this.service.getCredentials().subscribe((data: {}) => {
      this.credentialList = data;
    });
  }

}
