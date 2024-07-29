function Container({ children }) {
  return (
    <div className="h-auto w-[80vw] md:w-[90vw] xl:max-w-[1270px] xl:min-w-[1270px] mx-auto">
      {children}
    </div>
  );
}

export default Container;
