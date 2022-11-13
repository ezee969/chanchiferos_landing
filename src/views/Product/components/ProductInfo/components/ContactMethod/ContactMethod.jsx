import React from 'react';

const ContactMethod = ({ method }) => {
  return (
    <div className="flex text-sm text-slate-500 items-center cursor-pointer hover:text-slate-600">
      <img className="mr-2 h-6 w-6" src={method.img} alt="" />
      {method.title}
    </div>
  );
};

export default ContactMethod;
