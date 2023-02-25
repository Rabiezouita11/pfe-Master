import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-ajouter-abonnement',
  templateUrl: './ajouter-abonnement.component.html',
  styleUrls: ['./ajouter-abonnement.component.css']
})
export class AjouterAbonnementComponent implements OnInit {

  @ViewChild('inputAbonnement') inputAbonnement!: ElementRef;
  @ViewChild('inputPrix') inputPrix!: ElementRef;
  @ViewChild('inputDescription') inputDescription!: ElementRef;


  form: FormGroup = new FormGroup({
    produit: new FormControl(''),
    Prix: new FormControl(''),
    Description: new FormControl(''),
    Upload: new FormControl(''),
  });
  submitted = false;
  images: string[] = [];
  listCategories: any[] = [];
  selectedfiles?: FileList;
  previews: String[] = [];
  constructor(
    private toastr: ToastrService,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) { }

  selecteFile(event: any) {
    this.selectedfiles = event.target.files;
    if (this.selectedfiles && this.selectedfiles[0]) {
      const numberoffiles = this.selectedfiles.length;
      for (let i = 0; i < numberoffiles; i++) {
        const reader = new FileReader();
        reader.onload = (event: any) => {
          this.previews.push(event.target.result);
        };
        reader.readAsDataURL(this.selectedfiles[i]);
      }
    }
  }

  ngOnInit(): void {
    // how show categories in select option ?



    this.form = this.formBuilder.group({
      Abonnement: ['', Validators.required],
      Prix: ['', [Validators.required]],
      Upload: ['', Validators.required],
      Description: ['', Validators.required],
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    if (this.selectedfiles) {
      const nomAbonnement = this.inputAbonnement.nativeElement.value;
      const prix = this.inputPrix.nativeElement.value;
      const description = this.inputDescription.nativeElement.value;
      const formData = new FormData();
      for (let i = 0; i < this.selectedfiles.length; i++) {
        formData.append('image[]', this.selectedfiles[i]);
        console.log(formData.get('image[]'));
      }
      formData.append('description', description);
      formData.set('nom', nomAbonnement);
      formData.set('Prix', prix);;
      this.http.post('/api/abonnement/ajouterAbonnement', formData).subscribe(
        (data: any) => {
          console.log(data);
          this.toastr.success('Abonnement ajouté avec succès');
          this.router.navigate(['/Abonnement']);
        },
        (error: any) => {
          if (error.status === 400) {
            this.toastr.error("Erreur lors de l'ajout du Abonnement");
          }
        }
      );
    } else {
      this.toastr.error('image obligatoire');
    }
  }
  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }
}

// registerForm!: FormGroup;
// submitted = false;
//
//

//
// /*------------------------------------------
// --------------------------------------------
// Declare Form
// --------------------------------------------
// --------------------------------------------*/
//
//
// /*------------------------------------------
// --------------------------------------------
// Created constructor
// --------------------------------------------
// --------------------------------------------*/
//
// constructor(private http: HttpClient,private formBuilder: FormBuilder) { }
//
//
// get g() { return this.registerForm.controls; }
//
// onSubmit(): void {
//   this.submitted = true;
//
//   if (this.registerForm.invalid) {
//
//     return ;
//   }
//    this.affiche();
//
//
//
// }
//
// affiche(){
//   console.log("aaa");
// }

// ngOnInit() {
//   //Add User form validations
//   this.submitted = false;
//   this.registerForm = this.formBuilder.group({
//     produit: ['', [Validators.required]],
//     Prix: ['', [Validators.required]],
//     Categories: ['', [Validators.required]],
//     password: ['', [Validators.required]],
//     Description: ['', [Validators.required]],
//     Quantite: ['', [Validators.required]],
//     Upload: ['', [Validators.required]],
//
//
//   });
// }

