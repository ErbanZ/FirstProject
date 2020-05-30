import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, RenderResult, waitFor } from '@testing-library/react';
import React from 'react';
import Notice from '../../src/client/components/Notice';

// notice 组件

let wrapper: RenderResult;
describe('Notice 组件', () => {
  beforeEach(() => {
    wrapper = render(<Notice />);
  });

  it('是否渲染成功？', () => {
    expect(wrapper.container.querySelector('.notice-icon')).toBeInTheDocument();
    expect(wrapper.container.querySelector('svg')).toBeInTheDocument();
  });

  it('点击获取消息', async () => {
    fireEvent.click(wrapper.container);
    await waitFor(() => {
      // todo: 模拟 ajax
      expect(
        wrapper.container.querySelector('.notice-icon')
      ).toBeInTheDocument();
    });
  });
});
