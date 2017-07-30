import { TemplateController } from 'meteor/space:template-controller';

import './index-list.html';

TemplateController('IndexList_component', {
  state: {
    isLoaded: false,
    lists: []
  },
  private: {
    getList() {
      return [
        {id: 1, title: 'test 1'},
        {id: 2, title: 'test 2'}
      ];
    }
  },
  onCreated() {
    this.autorun(() => {
      this.state.lists = this.getList(); 
    });
  },
  onRendered() {
    this.state.isLoaded = true;
  },
  helpers: {
    lists() {
      return this.state.lists;
    }
  }
});
