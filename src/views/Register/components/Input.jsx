import React from 'react';

const Input = ({ type, placeholder, name, styles }) => {
  return (
    <div class={`${styles} px-3 mb-5 dark:text-neutral-300`}>
      <label for="" class="text-xs font-semibold px-1">
        {name}
      </label>
      <div class="flex">
        <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
          <i class=" text-gray-400 text-lg"></i>
        </div>
        <input
          type={type}
          class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 dark:placeholder:text-neutral-100 dark:bg-slate-800 dark:border-neutral-100 outline-none focus:border-rose-500"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default Input;
