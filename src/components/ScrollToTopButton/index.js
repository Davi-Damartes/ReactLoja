import "./button.css";

function ScrollToTopButton() {
    const handleClick = () => {
        window.scrollTo({
        top: 0,
        behavior: 'smooth'
        })
    }

  return (
    <button onClick={handleClick}>
      &#8593;
    </button>
  );
}

export default ScrollToTopButton;