import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CredentialService } from 'src/app/services/CredentialService';

@Component({
    selector: 'app-credential-detail',
    templateUrl: './credential-detail.component.html',
    styleUrls: ['./credential-detail.component.scss']
})
export class CredentialDetailComponent implements OnInit {

    credential: object = {}

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private service: CredentialService
    ) { }

    ngOnInit() {
        let id = this.route.snapshot.paramMap.get("id");

        this.service.getCredential(id).subscribe((data: {}) => {
            this.credential = data;
        },
            err => {
                this.router.navigate(['/not-found']);
            });
    }

}
