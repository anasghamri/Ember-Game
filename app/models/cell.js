import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
    color: DS.attr('string', {defaultValue: 'white'})
}); 
