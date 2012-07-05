/**
 * Copyright 2012, Raxa
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */
Ext.define('mUserStories.view.resources', {
    extend: 'Ext.Panel',
    config: {
        height: '100%',
        ui: 'neutral',
        items: [{
            xtype: 'titlebar',
            docked: 'top',
            title: 'Resources',
            items: [{
                xtype: 'button',
                id: 'back_res',
                ui: 'back',
                text: 'Back'
            }]
        }, {
            xclass: 'mUserStories.view.userToolbar'
        }, {
            xtype: 'panel',
            items: [{
                width: Ext.os.deviceType === 'Phone' ? null : '80%',
                height: Ext.os.deviceType === 'Phone' ? null : '100%',
                xtype: 'list',
                ui: 'round',
                grouped: true,
                pinHeaders: false,
                onItemDisclosure: function (record, btn, index) {
                    Ext.Msg.alert('Tap', 'Disclose more info for ' + record.get('name'));
                },
                store: 'resourceStore',
                itemTpl: '<div>{name}</div>',
                indexBar: true
            }]
        }]
    }
})