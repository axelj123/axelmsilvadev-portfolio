import Image from 'next/image';
import React from 'react';

const generateIdFromText = (text) => {
  return text
    .toString()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Elimina acentos
    .replace(/[^a-z0-9]+/g, '-') // Reemplaza caracteres especiales por guiones
    .replace(/^-+|-+$/g, ''); // Elimina guiones al principio y al final
};

export const CustomHeading = {
  h1: (props) => {
    const id = generateIdFromText(props.children);
    return (
      <h1 id={id} className="flex text-5xl font-bold mt-6 mb-4">
        {props.children}
      </h1>
    );
  },
  h2: (props) => {
    const id = generateIdFromText(props.children);
    return (
      <h2 id={id} className="flex text-3xl font-semibold mt-6 mb-4 ">
        <a
          href={`#${id}`}
          className="
        no-underline 
        text-inherit 
        flex 
        items-center 
        font-bold 
        transition-colors 
        hover:text-blue-400 
        group
      "
          aria-label={`Link to ${props.children}`}
          title={`Link to ${props.children}`}
        >
          {props.children}
          <svg
            viewBox="0 0 16 16"
            height="0.9em"
            width="0.9em"
            className="
          inline-block 
          ml-2 
          opacity-0 
          transition-opacity 
          duration-300 
          group-hover:opacity-100 
          fill-current 
          text-inherit 
          group-hover:text-blue-400
        "
            aria-hidden="true"
          >
            <path d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z" />
          </svg>
        </a>

      </h2>
    );
  },
  h3: (props) => {
    const id = generateIdFromText(props.children);
    return (
      <h3 id={id} className=" flex text-xl font-medium mt-6 mb-4  ">
        <a
          href={`#${id}`}
          className="    no-underline 
        text-inherit 
        flex 
        items-center 
        font-bold 
        transition-colors 
        hover:text-blue-400 
        group"
          aria-label={`Link to ${props.children}`}
          title={`Link to ${props.children}`}
        >
          {props.children}
          <svg
            viewBox="0 0 16 16"
            height="0.9em"
            width="0.9em"
            className="   inline-block 
          ml-2 
          opacity-0 
          transition-opacity 
          duration-300 
          group-hover:opacity-100 
          fill-current 
          text-inherit 
          group-hover:text-blue-400"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z" />
          </svg>
        </a>
      </h3>
    );
  },
  h4: (props) => {
    const id = generateIdFromText(props.children);
    return (
      <h4 id={id} className=" flex text-lg font-normal mt-6 mb-4">
        {props.children}
      </h4>
    );
  },
  h5: (props) => {
    const id = generateIdFromText(props.children);
    return (
      <h5 id={id} className="flex text-md font-light mt-6 mb-4">
        {props.children}
      </h5>
    );
  },
  h6: (props) => {
    const id = generateIdFromText(props.children);
    return (
      <h6 id={id} className="flex text-sm font-thin mt-6 mb-4">
        {props.children}
      </h6>
    );
  },

  img: (props) => {
    return (
      <Image
        {...props}
        width={0}
        height={0}
        sizes="100vw"
        className="w-full sm:w-auto sm:h-auto rounded-lg max-w-full mx-auto my-8 block"
        style={{
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        }}
        alt={props.alt || ''}
      />
    );
  }
};