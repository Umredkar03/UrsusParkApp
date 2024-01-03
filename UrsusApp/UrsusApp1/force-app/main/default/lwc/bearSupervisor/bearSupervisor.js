import { LightningElement, api, wire } from 'lwc';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
// Import Bear Objects fields
import SUPERVISIOR_FIELD from '@salesforce/schema/Bear__c.supervisor__c';
const bearFields = [SUPERVISIOR_FIELD];

export default class BearSupervisor extends LightningElement {
    @api recordId; //recordId
    @wire(getRecord, { recordId: '$recordId', fields: bearFields})
    bear;
      get supervisorId(){
        return getFieldValue(this.bear.data, SUPERVISIOR_FIELD);
      }
}