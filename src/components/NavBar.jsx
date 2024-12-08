import "../styles/NavBar.css";

function NavBar() {
  return (
    <>
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#notHome">notHome</a>
        </li>
        <li className="active">
          <a href="#generate">Generate Something</a>
        </li>
      </ul>
    </>
  );
}

export default NavBar;
