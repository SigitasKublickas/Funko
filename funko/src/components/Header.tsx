type Props = {};
export const Header = (props: Props) => {
  return (
    <div className="w-100 d-flex border-bottom header d-flex flex-column">
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
      <div className="header-categories container d-flex">
        <div className="p-2 center pointer">Dviračiai</div>
        <div className="p-2 center pointer">Riedlentės</div>
        <div className="p-2 center pointer">Longbordai</div>
        <div className="p-2 center pointer">Riedučiai</div>
      </div>
    </div>
  );
};
