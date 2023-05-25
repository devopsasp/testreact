import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer'
import App from './App';

test('snap shot testing', () => {
 
    const component=renderer.create(<App/>)
    let tree=component.toJSON()
    expect(tree).toMatchSnapshot()
  
});
