import { Builder } from "@builder.io/react";
import React from 'react';

export const Heading = (props: { title: string; color: string; }) => {
  return(
    <h1 style={{
        'color': props.color,
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
      defaultValue: 'I am a heading!',
      required: true,
    },
    {
      name: "color",
      type: "color",
      defaultValue: '#AC7EF4',
    },
  ],
});
