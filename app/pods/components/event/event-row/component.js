import Ember from 'ember';

export default Ember.Component.extend({
  item:null,
  selectedItem:null,
  isExpanded: Ember.computed('item', 'selectedItem', function(){
    if(this.get('item') === null || this.get('selectedItem') === null) { return false; }
    return this.get('item.id') === this.get('selectedItem.id');
  }),
  hasHashtag: Ember.computed('item', function(){
    return !Ember.isEmpty(this.get('item.hashtag'));
  }),
  actions: {
    toggleExpand: function(item){
      var action = this.get('isExpanded')? 'collapseAction':'expandAction';
      this.sendAction(action, item);
    }
  }
});
