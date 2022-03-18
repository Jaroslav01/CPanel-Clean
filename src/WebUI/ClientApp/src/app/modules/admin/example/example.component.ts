import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {Subject, takeUntil} from "rxjs";
import {FuseMediaWatcherService} from "../../../../@fuse/services/media-watcher";
import { FuseNavigationItem } from '@fuse/components/navigation/navigation.types';

@Component({
    selector     : 'example',
    templateUrl  : './example.component.html',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./example.component.scss']

})
export class ExampleComponent implements OnInit, OnDestroy
{
    public menuData: FuseNavigationItem[];
    public devices: any = [
        {name: 'Bedside left', description: 'Bedroom 1 1/3', power: '15', type: 'led', isOn: false},
        {name: 'Bedside right', description: 'Bedroom 1 2/3', power: '15', type: 'led', isOn: false},
        {name: 'General', description: 'Bedroom 1 2/3', power: '100', type: 'tungsten', isOn: false},
        {name: 'Restroom', description: 'Restroom 1/1', power: '100', type: 'fluorescent', isOn: true}
    ];
    drawerMode: 'over' | 'side' = 'side';
    drawerOpened: boolean = true;
    private _unsubscribeAll: Subject<any> = new Subject<any>();
    /**
     * Constructor
     */
    constructor(private _fuseMediaWatcherService: FuseMediaWatcherService)
    {
    }
    /**
     * On init
     */
    ngOnInit(): void
    {
        // Subscribe to media changes
        this._fuseMediaWatcherService.onMediaChange$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(({matchingAliases}) => {

                // Set the drawerMode and drawerOpened
                if ( matchingAliases.includes('lg') )
                {
                    this.drawerMode = 'side';
                    this.drawerOpened = true;
                }
                else
                {
                    this.drawerMode = 'over';
                    this.drawerOpened = false;
                }
            });
        this.menuData = [
            {
                title   : 'My home',
                subtitle: 'Address',
                type    : 'group',
                children: [
                    {
                        title: 'Bedroom',
                        type : 'basic',
                    },
                    {
                        title: 'Bedroom 2',
                        type : 'basic',
                    },
                    {
                        title: 'Bedroom 3',
                        type : 'basic',
                    },
                    {
                        title: 'Bedroom 4',
                        type : 'basic',
                    },
                    // {
                    //     title   : 'Assign user or team',
                    //     subtitle: 'Assign to a task or a project',
                    //     type    : 'basic',
                    //     icon    : 'heroicons_outline:badge-check'
                    // }
                ]
            },
            {
                type: 'divider'
            }
        ];
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }
}
