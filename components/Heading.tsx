import { Builder } from "@builder.io/react";
import React from 'react';

export const Heading = (props: { title: string; }) => {
  return(
    <h1 style={{
        'color': '#AC7EF4',
        'fontFamily': 'sans-serif',
    }}>
        {props.title}
    </h1>
  )
}

Builder.registerComponent(Heading, {
  name: "Heading",
  inputs: [
    {
      name: "title",
      type: "text",
      defaultValue: 'I am a heading!'
    },
  ],
});
