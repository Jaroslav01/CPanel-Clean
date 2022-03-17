/* tslint:disable:max-line-length */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [
    {
        id      : 'dashboards',
        title   : 'Dashboards',
        subtitle: '',
        type    : 'group',
        icon    : 'heroicons_outline:home',
        children: [
            {
                id   : 'control',
                title: 'Control',
                type : 'basic',
                icon : 'settings_input_component',
                link : '/example'
            },
            {
                id   : 'dashboard.devices1',
                title: 'Devices',
                type : 'basic',
                icon : 'dashboard',
                link : '/dashboards/devices-dashboard'
            },
            // {
            //     id   : 'dashboards.project',
            //     title: 'Project',
            //     type : 'basic',
            //     icon : 'heroicons_outline:clipboard-check',
            //     link : '/dashboards/project'
            // },
            {
                id   : 'dashboards.electricity-costs',
                title: 'Electricity costs',
                type : 'basic',
                icon : 'heroicons_outline:chart-pie',
                link : '/dashboards/analytics'
            },
            // {
            //     id   : 'dashboards.finance',
            //     title: 'Finance',
            //     type : 'basic',
            //     icon : 'heroicons_outline:cash',
            //     link : '/dashboards/finance'
            // },
        ]
    },
    {
        id      : 'settings',
        title   : 'Settings',
        subtitle: '',
        type    : 'group',
        icon    : 'heroicons_outline:home',
        children: [
            {
                id   : 'devices-settings',
                title: 'Devices',
                type : 'basic',
                icon : 'heroicons_outline:adjustments',
                link : '/devices-settings'
            },
        ]
    },
    {
        id      : 'documentation',
        title   : 'Documentation',
        subtitle: '',
        type    : 'group',
        icon    : 'heroicons_outline:home',
        children: [
            {
                id      : 'apps.help-center',
                title   : 'Help Center',
                type    : 'collapsable',
                icon    : 'heroicons_outline:support',
                link    : '/apps/help-center',
                children: [
                    {
                        id        : 'apps.help-center.home',
                        title     : 'Home',
                        type      : 'basic',
                        link      : '/apps/help-center',
                        exactMatch: true
                    },
                    {
                        id   : 'apps.help-center.faqs',
                        title: 'FAQs',
                        type : 'basic',
                        link : '/apps/help-center/faqs'
                    },
                    {
                        id   : 'apps.help-center.guides',
                        title: 'Guides',
                        type : 'basic',
                        link : '/apps/help-center/guides'
                    },
                    {
                        id   : 'apps.help-center.support',
                        title: 'Support',
                        type : 'basic',
                        link : '/apps/help-center/support'
                    }
                ]
            },
        ]
    },
];
export const compactNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];
export const futuristicNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];
export const horizontalNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];
