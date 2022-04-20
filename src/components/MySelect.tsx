import React from 'react';



type Option = {
    label: React.ReactNode;
    value: string | number | string[];
  };
  
  type SelectProps = React.DetailedHTMLProps<
    React.SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  > & { options: Option[] };
  
  export const MySelect = React.forwardRef<HTMLSelectElement, SelectProps>(
    ({ options, ...props }, ref) => (
      <select ref={ref} {...props}>
        {options.map(({ label, value }) => (
          <option value={value}>{label}</option>
        ))}
      </select>
    )
  );


