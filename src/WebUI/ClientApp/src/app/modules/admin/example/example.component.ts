import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector     : 'example',
    templateUrl  : './example.component.html',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./example.component.scss']

})
export class ExampleComponent
{
    public devices: any = [
        {name: 'Bedside left', description: 'Bedroom 1 1/3', power: '15', type: 'led', isOn: false},
        {name: 'Bedside right', description: 'Bedroom 1 2/3', power: '15', type: 'led', isOn: false},
        {name: 'General', description: 'Bedroom 1 2/3', power: '100', type: 'tungsten', isOn: false},
        {name: 'Restroom', description: 'Restroom 1/1', power: '100', type: 'fluorescent', isOn: true}
    ];
    /**
     * Constructor
     */
    constructor()
    {
    }
}
