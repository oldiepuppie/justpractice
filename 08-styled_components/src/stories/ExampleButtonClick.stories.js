import React from 'react';
import ExampleButtonClick from '../Components/ExampleButtonClick';

export default {
  title: 'ExampleButtonClick',
  component: ExampleButtonClick,
};

const Template = (args) => { 
  return <ExampleButtonClick { ...args } />;
}

export const FirstStory = Template.bind({});