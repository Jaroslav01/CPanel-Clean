import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-devices-dashboard',
  templateUrl: './devices-dashboard.component.html',
  styleUrls: ['./devices-dashboard.component.scss']
})
export class DevicesDashboardComponent implements OnInit {
    formFieldHelpers: string[] = [''];

  constructor() { }

  ngOnInit(): void {
  }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Get the form field helpers as string
     */
    getFormFieldHelpersAsString(): string
    {
        return this.formFieldHelpers.join(' ');
    }
}
