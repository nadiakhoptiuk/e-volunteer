const LangButton = ({ currentLanguage, onClick }) => {
  return (
    <button
      onClick={onClick}
      aria-label={'Кнопка переключения языка'}
      id={'lang-switcher-button'}
      type="button"
      className={`font-navigation text-light flex items-center gap-x-3 px-3 py-4`}
    >
      <span>{currentLanguage}</span>
      {/* <DropdownArrowIcon className="stroke-light" /> */}
    </button>
  );
};

export default LangButton;
