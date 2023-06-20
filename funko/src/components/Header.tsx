type Props = {};
const arr = [
  { id: 1, name: "Dviračiai" },
  { id: 2, name: "Riedlentės" },
  { id: 3, name: "Longbordai" },
  { id: 4, name: "Riedučiai" },
];
export const Header = (props: Props) => {
  return (
    <header className="w-100 d-flex border-bottom header d-flex flex-column">
      <div className="container d-flex header-main">
        <div className="w-25 p-2 d-flex align-items-center">logo</div>
        <div className="w-25 p-2 center">Paieška</div>
        <div className="w-50 d-flex justify-content-around">
          <div className="p-2 center pointer">{"<3"}</div>
          <div className="p-2 center pointer">Cart</div>
          <div className="p-2 center pointer">Person</div>
          <div className="p-2 center pointer">Parduoti</div>
        </div>
      </div>
      <nav>
        <ul className="header-categories container d-flex">
          {arr.map((item) => {
            return (
              <li className="center pointer drop" key={item.id}>
                {item.name}
                <div className="header-categories-body"></div>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};
