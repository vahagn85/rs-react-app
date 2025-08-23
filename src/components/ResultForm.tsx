import type { ReactNode } from 'react';
import type { FormValues } from '../types/formTypes';
import { formFields } from '../utils/formFields';

interface ResultFormProps {
  title: string;
  updated: boolean;
  data: FormValues;
  renderBtn: () => ReactNode;
}

function ResultForm({ title, updated, data, renderBtn }: ResultFormProps) {
  const renderData = () => {
    if (!data)
      return <p className="text-center">No data. Please fill the form.</p>;
    return (
      <ul className="space-y-1">
        {formFields.map((field) => {
          return (
            <li key={field.id}>
              <strong>{field.label}:</strong>{' '}
              {field.id === 'terms' ? (
                '✔️ Accepted'
              ) : field.id === 'picture' ? (
                <img
                  className="w-full h-20 object-cover"
                  src={data[field.id] as string}
                  alt="picture"
                />
              ) : (
                data[field.id]
              )}
            </li>
          );
        })}
      </ul>
    );
  };
  return (
    <div
      className={
        'flex flex-col min-h-60 p-4 border border-blue-400 rounded shadow ' +
        (updated ? '!border-green-600 bg-green-100' : '')
      }
    >
      <h2 className="font-bold mb-2 text-center">{title}</h2>
      <hr className="mb-2 text-gray-400" />
      {renderData()}
      {renderBtn()}
    </div>
  );
}

export default ResultForm;
