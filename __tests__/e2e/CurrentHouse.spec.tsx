import '@testing-library/jest-dom/extend-expect';
import { render, RenderResult } from '@testing-library/react';
import React from 'react';
import CurrentHouse from '../../src/client/components/CurrentHouse';
import { AppContext, globalData, IappContext } from '../../src/client/context/appContext';

const appState: IappContext = {
  ...globalData,
  allData: [
    {
      _id: '',
      area: '高新南区',
      beginTime: '2018-12-27 09:00:00',
      endTime: '2018-12-29 18:00:00',
      name: '融创香璟台西苑',
      number: 56,
      status: '报名中',
    },
  ],
  activityKey: '高新南区',
};

let wrapper: RenderResult;
describe('CurrentHouse 组件', () => {
  beforeEach(() => {
    wrapper = render(
      <AppContext.Provider value={appState}>
        <CurrentHouse />
      </AppContext.Provider>
    );
  });

  // 组件渲染
  it('是否正确渲染', () => {
    expect(wrapper.getByText('正在登记')).toBeInTheDocument();
    expect(
      wrapper.container.querySelector('.ant-list-item')
    ).toBeInTheDocument();
  });
});
