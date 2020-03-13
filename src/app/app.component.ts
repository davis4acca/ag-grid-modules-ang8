import { Component } from '@angular/core';

import { AllModules, LicenseManager } from '@ag-grid-enterprise/all-modules';

LicenseManager.setLicenseKey('YOUR KEY')


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  columnDefs = [
    { field: 'make', filter: true },

    { field: 'model' },
    { field: 'price' }
  ];

  rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 }
  ];

  modules = AllModules;

}

