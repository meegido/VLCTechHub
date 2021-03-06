import Ember from 'ember';

export default Ember.Route.extend({
  titleToken: function(model) {
    return model.get('title');
  },
  headTags: function() {
    let model = this.modelFor(this.routeName);
    return [{
      type: 'meta',
      tagId: 'meta-description-tag',
      attrs: {
        name: 'description',
        content: model.get('excerpt')
      }
    }];
  },
  model: function(params){
    return this.modelFor('job.list').findBy('id', params.job_id);
  },
  setupController: function(controller, model) {
    this.controllerFor('job.list').set('selected', model);
    this._super.apply(this, arguments);
  }
});
