import { NavLink } from 'react-router';

interface CardProps {
  name: string;
  desc?: string;
  head?: boolean;
  page?: string;
  detailsId?: number;
}

const Card = (props: CardProps) => {
  const { head, name, desc, page, detailsId } = props;
  const content = (
    <>
      <div className="font-bold flex-1/3 border-r border-black">{name}</div>
      <div className={`flex-2/3 ${head ? 'font-bold' : ''}`}>
        {desc && desc !== 'unknown' ? desc : '-'}
      </div>
    </>
  );

  return (
    <li
      className={`border  bg-gray-100 rounded-lg shadow-md mb-4 ${head ? 'bg-gray-300' : 'border-gray-100'}`}
    >
      {head ? (
        <div className="flex gap-2 p-4">{content}</div>
      ) : (
        <NavLink
          to={`/${page}/${detailsId}`}
          className={({ isActive }) =>
            `flex gap-2 p-4 ${isActive ? 'bg-yellow-200 shadow-lg' : ''} hover:bg-yellow-200 hover:cursor-pointer hover:shadow-lg transition-normal duration-200`
          }
        >
          {content}
        </NavLink>
      )}
    </li>
  );
};

export default Card;
