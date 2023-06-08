import React from "react";
import { mount, shallow } from "enzyme";
import { App } from "../App.jsx";
import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });

describe("App", () => {
  it("renders", () => {
    const wrapper = mount(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
