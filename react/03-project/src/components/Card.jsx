import React from "react";

const Card = ({ title, description, img, btnText }) => {
  return (
    <div className="bg-neutral-primary-soft block max-w-sm p-6  border-default rounded-base shadow-xs border-2 border-red-900">
      <a href="#">
        <img className="rounded-base" src={img} alt={title} />
      </a>
      <a href="#">
        <h5 className="mt-6 mb-2 text-2xl font-semibold tracking-tight text-heading text-white">
          {title}
        </h5>
      </a>
      <p className="mb-6 text-body text-white">{description}</p>
      <a
        href="#"
        className="inline-flex text-white items-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
      >
        {btnText}
        <svg
          className="w-4 h-4 ms-1.5 rtl:rotate-180 -me-0.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 12H5m14 0-4 4m4-4-4-4"
          />
        </svg>
      </a>
    </div>
  );
};

export default Card;
