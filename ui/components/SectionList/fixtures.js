// @flow

import { createFixture } from 'react-cosmos';
import { SectionList } from '.';
import { testKinds } from '../../import-files';

export default [
  createFixture({
    name: 'open',
    component: SectionList,
    props: {
      sections: testKinds['jest-enzyme'].tests,
      testKindId: 'jest-enzyme',
      sectionName: undefined,
      searchText: '',
      changeSearch: () => {}
    },
    state: {
      isOpen: true
    },
    bgColor: '#f5f7f9'
  }),
  createFixture({
    name: 'closed',
    component: SectionList,
    props: {
      sections: testKinds['jest-enzyme'].tests,
      testKindId: 'jest-enzyme',
      sectionName: undefined,
      searchText: '',
      changeSearch: () => {}
    },
    state: {
      isOpen: false
    },
    bgColor: '#f5f7f9'
  }),
  createFixture({
    name: 'search',
    component: SectionList,
    props: {
      sections: testKinds['jest-enzyme'].tests,
      testKindId: 'jest-enzyme',
      sectionName: undefined,
      searchText: 'state',
      changeSearch: () => {}
    },
    state: {
      isOpen: false
    },
    bgColor: '#f5f7f9'
  })
];
