import { NavLink } from 'react-router';
import { useAppStore } from '../store/appStore';
import type { Result } from '../types/result.types';
import type { ChangeEvent } from 'react';

interface CardProps {
  name: string;
  desc?: string;
  head?: boolean;
  page?: string;
  detailsId?: number;
  result?: Result;
}

const Card = (props: CardProps) => {
  const { head, name, desc, page, detailsId, result } = props;
  const { selected, addItem, removeItem } = useAppStore();

  const handleCheck = (event: ChangeEvent<HTMLInputElement>) => {
    if (result && event.target.checked) {
      const { climate, url, terrain, population, gravity } = result;
      addItem({ name, climate, url, terrain, population, gravity });
    } else if (result && !event.target.checked) {
      removeItem(result.url ?? '');
    }
  };

  const content = (
    <>
      <div className="font-bold flex-1/3 border-r border-black">{name}</div>
      <div className={`flex-2/3 ${head ? 'font-bold' : ''}`}>
        {desc && desc !== 'unknown' ? desc : '-'}
      </div>
    </>
  );

  const isChecked = selected.some((item) => item.url === result?.url);

  return (
    <li
      className={`flex border bg-gray-100 rounded-lg shadow-md mb-4 ${head ? 'bg-gray-300' : 'border-gray-100'}`}
    >
      {head ? (
        <div className="flex w-full ml-11 gap-2 p-4">{content}</div>
      ) : (
        <>
          <input
            type="checkbox"
            className="w-5 h-5 self-center mx-3 hover:bg-yellow-200 hover:cursor-pointer"
            checked={isChecked}
            onChange={handleCheck}
          />
          <NavLink
            to={`/${page}/${detailsId}`}
            className={({ isActive }) =>
              `flex flex-auto gap-2 p-4 border-l border-gray-500 ${isActive ? 'bg-yellow-200 shadow-lg' : ''} hover:bg-yellow-200 hover:cursor-pointer hover:shadow-lg transition-normal duration-200`
            }
          >
            {content}
          </NavLink>
        </>
      )}
    </li>
  );
};

export default Card;
