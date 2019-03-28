import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'SpCrudopsWebPartStrings';

import 'pn-pspfx-angular/dist/PnPSPFxAngular/bundle.js';

export interface ISpCrudopsWebPartProps {
  description: string;
}

export default class SpCrudopsWebPart extends BaseClientSideWebPart<ISpCrudopsWebPartProps> {

  public render(): void {
    this.domElement.innerHTML = `<app-sp-crudops-web-part description="${ this.properties.description }"></app-sp-crudops-web-part>`;
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
