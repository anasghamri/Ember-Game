import DS from 'ember-data';
import { computed } from '@ember/object';
const { Model } = DS;

export default Model.extend({
    cells: DS.hasMany('cell' , {async: false}),

    init() {
        this._super(...arguments);

        for(let i=0; i<400; i++){
            this.cells.createRecord();
        }
    },

    load(tm){
        for(let i=0; i<tm.length; i++){
            let cell = this.cells.objectAt(i);
            cell.set('color', tm[i]);
        }
    },
    
    clear() {
        this.cells.setEach('color', 'white');
    },

    serialized: computed.mapBy('cells', 'color'),
    asJson: computed('serialized.[]', function() {
        return JSON.stringify(this.serialized, null, 2)
    })
});
